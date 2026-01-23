import { useState } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, ArrowRight, Shield, Zap } from "lucide-react";
import { FileDropzone } from "@/components/file-dropzone";
import { EncryptionBadge, ZeroKnowledgeBadge } from "@/components/encryption-badge";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/hooks/use-toast";
import { useCreateVault, useGetChunkUploadUrl, useMarkChunkUploaded } from "@/hooks/use-vaults";
import { generateKey, exportKey, encryptMetadata, encryptData, generateUUID } from "@/lib/crypto";

// 5MB Chunks
const CHUNK_SIZE = 5 * 1024 * 1024;

type UploadStage = "idle" | "encrypting" | "uploading" | "success";

export default function Home() {
  const [files, setFiles] = useState<File[]>([]);
  const [expiresIn, setExpiresIn] = useState([24]); // Hours
  const [maxDownloads, setMaxDownloads] = useState([5]);
  const [stage, setStage] = useState<UploadStage>("idle");
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("");
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const createVault = useCreateVault();
  const getChunkUrl = useGetChunkUploadUrl();
  const markUploaded = useMarkChunkUploaded();

  const handleUpload = async () => {
    if (files.length === 0) return;
    setStage("encrypting");

    try {
      // 1. Generate Encryption Key
      setStatusText("Generating AES-256-GCM Key...");
      const key = await generateKey();
      const exportedKey = await exportKey(key);

      // 2. Prepare Metadata
      setStatusText("Encrypting Metadata...");
      const fileMetadata = files.map(f => ({
        name: f.name,
        type: f.type,
        size: f.size,
        fileId: generateUUID(),
        lastModified: f.lastModified
      }));

      // 3. Encrypt Metadata
      const encryptedMetadata = await encryptMetadata(fileMetadata, key);

      // 4. Calculate chunks for backend reservation
      const filesPayload = files.map((f, index) => ({
        fileId: fileMetadata[index].fileId,
        chunks: Math.ceil(f.size / CHUNK_SIZE),
        size: f.size
      }));

      // 5. Create Vault on Server
      setStatusText("Registering Vault...");
      const vault = await createVault.mutateAsync({
        expiresIn: expiresIn[0],
        maxDownloads: maxDownloads[0],
        encryptedMetadata,
        files: filesPayload
      });

      // 6. Process & Upload Files
      setStage("uploading");
      let totalChunks = filesPayload.reduce((acc, f) => acc + f.chunks, 0);
      let processedChunks = 0;

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const fileId = fileMetadata[i].fileId;
        const totalFileChunks = Math.ceil(file.size / CHUNK_SIZE);

        for (let chunkIndex = 0; chunkIndex < totalFileChunks; chunkIndex++) {
          setStatusText(`Encrypting & Uploading ${file.name} (Chunk ${chunkIndex + 1}/${totalFileChunks})...`);

          const start = chunkIndex * CHUNK_SIZE;
          const end = Math.min(start + CHUNK_SIZE, file.size);
          const chunkBlob = file.slice(start, end);
          const chunkBuffer = await chunkBlob.arrayBuffer();

          // Encrypt Chunk
          const { iv, encryptedData } = await encryptData(chunkBuffer, key);

          // Combine IV + Encrypted Data for storage
          // Format: [IV (12 bytes)] + [Encrypted Data]
          const combinedBuffer = new Uint8Array(iv.byteLength + encryptedData.byteLength);
          combinedBuffer.set(iv, 0);
          combinedBuffer.set(new Uint8Array(encryptedData), iv.byteLength);

          // Get Upload URL
          const { uploadUrl, storagePath } = await getChunkUrl.mutateAsync({
            vaultId: vault.id,
            fileId,
            chunkIndex,
            size: combinedBuffer.byteLength
          });

          // Upload to Signed URL
          await fetch(uploadUrl, {
            method: 'PUT',
            body: combinedBuffer
          });

          // Confirm Upload
          await markUploaded.mutateAsync({
            vaultId: vault.id,
            fileId,
            chunkIndex,
            storagePath
          });

          processedChunks++;
          setProgress((processedChunks / totalChunks) * 100);
        }
      }

      // 7. Done! Redirect to success page with Key in URL hash
      setStage("success");
      setStatusText("Finalizing...");

      // CRITICAL: Key passed in URL fragment, server never sees it
      setTimeout(() => {
        setLocation(`/success/${vault.id}#key=${exportedKey}`);
      }, 500);

    } catch (err) {
      console.error(err);
      setStage("idle");
      toast({
        variant: "destructive",
        title: "Error",
        description: err instanceof Error ? err.message : "Upload failed",
      });
    }
  };

  return (
    <div className="min-h-screen relative flex flex-col">
      <div className="scanline" />
      <ZeroKnowledgeBadge />

      {/* Header */}
      <header className="p-6 flex items-center justify-between z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center border border-primary/50">
            <Lock className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-xl font-bold font-mono tracking-tighter">VAULT<span className="text-primary">BRIDGE</span></h1>
            <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em]">Secure File Transfer</p>
          </div>
        </div>

      </header>

      {/* Main Content */}
      <main className="flex-1 container max-w-3xl mx-auto px-4 py-12 z-10 flex flex-col items-center">

        <EncryptionBadge />

        <div className="text-center mb-10 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Share files <span className="text-primary">secretly</span>.
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            End-to-end encrypted. Ephemeral. Anonymous.
            We can't see your files, and neither can anyone else.
          </p>
        </div>

        <motion.div
          className="w-full bg-card/50 backdrop-blur-xl border border-border/50 rounded-2xl p-8 shadow-2xl relative overflow-hidden"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Progress Overlay */}
          <AnimatePresence>
            {stage !== 'idle' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-background/90 z-20 flex flex-col items-center justify-center p-12 text-center"
              >
                <div className="w-24 h-24 mb-6 relative">
                  <svg className="w-full h-full animate-spin text-primary/20" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center font-mono text-sm font-bold text-primary">
                    {Math.round(progress)}%
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 animate-pulse">{statusText}</h3>
                <p className="text-muted-foreground text-sm font-mono">
                  {stage === 'encrypting' ? 'Performing client-side encryption...' : 'Sending encrypted chunks...'}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <FileDropzone onFilesSelected={setFiles} disabled={stage !== 'idle'} />

          {/* Settings Section */}
          <div className="mt-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex justify-between">
                  <label className="text-sm font-medium text-muted-foreground">Expires In</label>
                  <span className="text-sm font-mono text-primary">{expiresIn[0]} Hours</span>
                </div>
                <Slider
                  value={expiresIn}
                  onValueChange={setExpiresIn}
                  min={1}
                  max={168}
                  step={1}
                  className="[&_.bg-primary]:bg-primary"
                />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <label className="text-sm font-medium text-muted-foreground">Max Downloads</label>
                  <span className="text-sm font-mono text-primary">{maxDownloads[0]} Downloads</span>
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
              disabled={files.length === 0 || stage !== 'idle'}
              className="w-full h-14 text-lg font-bold cyber-button bg-primary text-primary-foreground hover:bg-primary/90"
            >
              {stage === 'idle' ? (
                <>
                  <Lock className="w-5 h-5 mr-2" /> Encrypt & Upload
                </>
              ) : (
                "Processing..."
              )}
            </Button>
          </div>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 w-full">
          <div className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors">
            <Shield className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-bold mb-2">Client-Side Encryption</h3>
            <p className="text-sm text-muted-foreground">Files are encrypted in your browser before they ever leave your device.</p>
          </div>
          <div className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors">
            <Zap className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-bold mb-2">Ephemeral Storage</h3>
            <p className="text-sm text-muted-foreground">Vaults automatically self-destruct after expiration or download limit.</p>
          </div>

        </div>
      </main>
    </div>
  );
}
