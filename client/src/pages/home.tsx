import { useState, useCallback } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  Lock, Upload, KeyRound, Shield, Zap, Timer,
  ChevronRight, Sparkles, Eye, EyeOff
} from "lucide-react";
import { FileDropzone } from "@/components/file-dropzone";
import { EncryptionProgress } from "@/components/encryption-progress";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/hooks/use-toast";
import { useCreateVault, useGetChunkUploadUrl, useMarkChunkUploaded, useResolveCode } from "@/hooks/use-vaults";
import { generateKey, exportKey, encryptMetadata, encryptData, generateUUID } from "@/lib/crypto";

const CHUNK_SIZE = 5 * 1024 * 1024; // 5MB chunks

type UploadStage = "idle" | "encrypting" | "uploading" | "success";
type ProgressStep = "keys" | "metadata" | "chunks" | "upload" | "done";

export default function Home() {
  // Upload state
  const [files, setFiles] = useState<File[]>([]);
  const [expiresIn, setExpiresIn] = useState([24]);
  const [maxDownloads, setMaxDownloads] = useState([5]);
  const [stage, setStage] = useState<UploadStage>("idle");
  const [currentStep, setCurrentStep] = useState<ProgressStep>("keys");
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("");
  const [isDragActive, setIsDragActive] = useState(false);

  // Code access state
  const [accessCode, setAccessCode] = useState("");
  const [isCodeLoading, setIsCodeLoading] = useState(false);

  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const createVault = useCreateVault();
  const getChunkUrl = useGetChunkUploadUrl();
  const markUploaded = useMarkChunkUploaded();
  const resolveCode = useResolveCode();

  // Handle code submission
  const handleCodeSubmit = async () => {
    if (accessCode.length !== 6) {
      toast({ variant: "destructive", title: "Invalid Code", description: "Please enter a 6-character code." });
      return;
    }

    setIsCodeLoading(true);
    try {
      const result = await resolveCode.mutateAsync(accessCode.toUpperCase());
      setLocation(`/v/${result.id}`);
    } catch (err) {
      toast({ variant: "destructive", title: "Access Denied", description: "Invalid or expired code." });
    } finally {
      setIsCodeLoading(false);
    }
  };

  // Handle file upload
  const handleUpload = async () => {
    if (files.length === 0) return;
    setStage("encrypting");
    setProgress(0);

    try {
      // Step 1: Generate Keys
      setCurrentStep("keys");
      setStatusText("Generating AES-256-GCM encryption key...");
      await new Promise(r => setTimeout(r, 500)); // Visual feedback
      const key = await generateKey();
      const exportedKey = await exportKey(key);
      setProgress(10);

      // Step 2: Encrypt Metadata
      setCurrentStep("metadata");
      setStatusText("Encrypting file metadata...");
      const fileMetadata = files.map(f => ({
        name: f.name,
        type: f.type,
        size: f.size,
        fileId: generateUUID(),
        lastModified: f.lastModified
      }));
      const encryptedMetadata = await encryptMetadata(fileMetadata, key);
      setProgress(20);

      // Step 3: Create Vault
      setStatusText("Registering secure vault...");
      const filesPayload = files.map((f, index) => ({
        fileId: fileMetadata[index].fileId,
        chunks: Math.ceil(f.size / CHUNK_SIZE),
        size: f.size
      }));

      const vault = await createVault.mutateAsync({
        expiresIn: expiresIn[0],
        maxDownloads: maxDownloads[0],
        encryptedMetadata,
        files: filesPayload
      });
      setProgress(30);

      // Step 4: Encrypt & Upload Chunks
      setStage("uploading");
      setCurrentStep("chunks");
      const totalChunks = filesPayload.reduce((acc, f) => acc + f.chunks, 0);
      let processedChunks = 0;

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const fileId = fileMetadata[i].fileId;
        const totalFileChunks = Math.ceil(file.size / CHUNK_SIZE);

        for (let chunkIndex = 0; chunkIndex < totalFileChunks; chunkIndex++) {
          setStatusText(`Encrypting ${file.name} [${chunkIndex + 1}/${totalFileChunks}]`);
          setCurrentStep("chunks");

          const start = chunkIndex * CHUNK_SIZE;
          const end = Math.min(start + CHUNK_SIZE, file.size);
          const chunkBlob = file.slice(start, end);
          const chunkBuffer = await chunkBlob.arrayBuffer();

          // Encrypt
          const { iv, encryptedData } = await encryptData(chunkBuffer, key);
          const combinedBuffer = new Uint8Array(iv.byteLength + encryptedData.byteLength);
          combinedBuffer.set(iv, 0);
          combinedBuffer.set(new Uint8Array(encryptedData), iv.byteLength);

          // Get Upload URL
          setCurrentStep("upload");
          setStatusText(`Uploading ${file.name} [${chunkIndex + 1}/${totalFileChunks}]`);

          const { uploadUrl, storagePath } = await getChunkUrl.mutateAsync({
            vaultId: vault.id,
            fileId,
            chunkIndex,
            size: combinedBuffer.byteLength
          });

          // Upload
          await fetch(uploadUrl, { method: 'PUT', body: combinedBuffer });

          // Confirm
          await markUploaded.mutateAsync({
            vaultId: vault.id,
            fileId,
            chunkIndex,
            storagePath
          });

          processedChunks++;
          setProgress(30 + (processedChunks / totalChunks) * 65);
        }
      }

      // Step 5: Complete
      setCurrentStep("done");
      setProgress(100);
      setStatusText("Vault created successfully!");
      setStage("success");

      setTimeout(() => {
        setLocation(`/success/${vault.id}#key=${exportedKey}`);
      }, 800);

    } catch (err) {
      console.error(err);
      setStage("idle");
      toast({
        variant: "destructive",
        title: "Upload Failed",
        description: err instanceof Error ? err.message : "An error occurred",
      });
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 grid-bg opacity-50" />
      <div className="scanline" />

      {/* Ambient Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <header className="relative z-10 px-6 py-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center border border-primary/30 animate-pulse-glow">
              <Lock className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold font-mono tracking-tight">
                VAULT<span className="text-primary">BRIDGE</span>
              </h1>
              <p className="text-xs text-muted-foreground uppercase tracking-[0.2em]">
                Zero-Knowledge Transfer
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-mono text-primary uppercase">Encrypted</span>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 py-8">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Share files <span className="text-gradient">secretly</span>.
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            End-to-end encrypted. Ephemeral. Anonymous.
            Your files are encrypted before they leave your device.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* LEFT: Upload Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className={`glass-card p-8 ${isDragActive ? 'dropzone-glow active' : ''}`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                  <Upload className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Upload Files</h3>
                  <p className="text-sm text-muted-foreground">Create a secure vault</p>
                </div>
              </div>

              {/* Progress Overlay */}
              <AnimatePresence>
                {stage !== "idle" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-background/95 backdrop-blur-sm z-20 flex flex-col items-center justify-center p-8 rounded-2xl"
                  >
                    <EncryptionProgress
                      stage={stage}
                      step={currentStep}
                      progress={progress}
                      statusText={statusText}
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              <FileDropzone
                onFilesSelected={setFiles}
                disabled={stage !== "idle"}
                onDragStateChange={setIsDragActive}
              />

              {/* Settings */}
              <div className="mt-8 space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <label className="text-sm text-muted-foreground flex items-center gap-2">
                        <Timer className="w-4 h-4" />
                        Expires In
                      </label>
                      <span className="text-sm font-mono text-primary font-bold">{expiresIn[0]}h</span>
                    </div>
                    <Slider
                      value={expiresIn}
                      onValueChange={setExpiresIn}
                      min={1}
                      max={168}
                      step={1}
                    />
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <label className="text-sm text-muted-foreground flex items-center gap-2">
                        <Zap className="w-4 h-4" />
                        Max Downloads
                      </label>
                      <span className="text-sm font-mono text-primary font-bold">{maxDownloads[0]}</span>
                    </div>
                    <Slider
                      value={maxDownloads}
                      onValueChange={setMaxDownloads}
                      min={1}
                      max={100}
                      step={1}
                    />
                  </div>
                </div>

                <Button
                  onClick={handleUpload}
                  disabled={files.length === 0 || stage !== "idle"}
                  className="w-full h-14 cyber-btn text-base"
                >
                  <Shield className="w-5 h-5 mr-2" />
                  Encrypt & Upload
                </Button>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Access Code Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="glass-card p-8 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-zinc-800 border border-zinc-700">
                  <KeyRound className="w-5 h-5 text-zinc-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Access Vault</h3>
                  <p className="text-sm text-muted-foreground">Enter your 6-digit code</p>
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-center">
                <div className="space-y-6">
                  <Input
                    type="text"
                    value={accessCode}
                    onChange={(e) => setAccessCode(e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 6))}
                    placeholder="ABC123"
                    className="code-input h-20"
                    maxLength={6}
                  />

                  <Button
                    onClick={handleCodeSubmit}
                    disabled={accessCode.length !== 6 || isCodeLoading}
                    variant="secondary"
                    className="w-full h-14 font-mono uppercase tracking-wider font-bold"
                  >
                    {isCodeLoading ? (
                      <span className="animate-pulse">Unlocking...</span>
                    ) : (
                      <>
                        <Lock className="w-5 h-5 mr-2" />
                        Unlock Vault
                      </>
                    )}
                  </Button>
                </div>

                {/* Security Info */}
                <div className="mt-8 pt-8 border-t border-border/50">
                  <div className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Shield className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p>
                      Files are decrypted in your browser using the key in the link.
                      We never see your files or encryption key.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
        >
          {[
            {
              icon: Shield,
              title: "Client-Side Encryption",
              desc: "AES-256-GCM encryption happens entirely in your browser."
            },
            {
              icon: Timer,
              title: "Auto-Destruct",
              desc: "Vaults self-destruct after expiration or download limit."
            },
            {
              icon: Eye,
              title: "Zero Knowledge",
              desc: "We never see your files. Encryption keys stay with you."
            }
          ].map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="p-6 rounded-xl bg-card/50 border border-border/30 hover:border-primary/30 transition-all duration-300 group"
            >
              <feature.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-semibold mb-2">{feature.title}</h4>
              <p className="text-sm text-muted-foreground">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
}
