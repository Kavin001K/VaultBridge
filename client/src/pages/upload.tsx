import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Binary,
  CheckCircle2,
  ChevronRight,
  Clock,
  Cloud,
  Cpu,
  Database,
  Flame,
  Gauge,
  HardDrive,
  KeyRound,
  Layers,
  Loader2,
  Lock,
  Network,
  PauseCircle,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  Trash2,
  UploadCloud,
  Zap,
} from "lucide-react";
import { FileDropzone } from "@/components/file-dropzone";
import { EncryptionProgress } from "@/components/encryption-progress";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/hooks/use-toast";
import { useSounds } from "@/hooks/useSounds";
import { useCreateVault, useGetChunkUploadUrl, useMarkChunkUploaded, useUpdateVault } from "@/hooks/use-vaults";
import { generateKey, exportKey, encryptMetadata, generateUUID, generateSplitCode, wrapFileKey } from "@/lib/crypto";
import { getUploadConfig, formatBytes } from "@/lib/uploadConfig";
import { saveUploadSettings, loadUploadSettings, clearStoredFiles } from "@/lib/fileStorage";
import { ParallelUploadQueue, type ChunkTask } from "@/lib/parallelUpload";
import { workerPool } from "@/lib/workerManager";
import { getOptimalChunkConfig } from "@/lib/adaptiveChunk";
import { ByteProgressTracker, type UploadProgressSnapshot } from "@/lib/uploadProgress";
import {
  cleanupStaleUploads,
  createUploadSession,
  deleteUploadSession,
  getPendingUploads,
  markChunkUploaded,
  type UploadProgress,
} from "@/lib/resumableUpload";
import { UploadOverlay } from "@/components/UploadOverlay";
import { measureConnectionSpeed, type ConnectionInfo } from "@/lib/connectionSpeed";
import { estimateTransfer, getDeviceProfile, getTransferSummary, type TransferEstimate, type DeviceProfile } from "@/lib/transferEstimator";

type UploadStage = "idle" | "encrypting" | "uploading" | "success";
type ProgressStep = "keys" | "metadata" | "transfer" | "done";

type PreparedFile = {
  file: File;
  fileId: string;
  chunkSize: number;
  chunks: number;
  uploadId?: string;
};

const spring = { type: "spring" as const, stiffness: 360, damping: 30 };

const formatDuration = (seconds: number) => {
  if (!seconds || seconds < 1 || !Number.isFinite(seconds)) return "estimating";
  if (seconds < 60) return `${seconds}s`;
  const minutes = Math.floor(seconds / 60);
  const rest = seconds % 60;
  return rest ? `${minutes}m ${rest}s` : `${minutes}m`;
};

const formatExpiry = (hours: number) => {
  if (hours < 24) return `${hours}h`;
  const days = Math.floor(hours / 24);
  const remainingHours = hours % 24;
  return remainingHours ? `${days}d ${remainingHours}h` : `${days}d`;
};

const formatCode = (code?: string) => {
  if (!code) return "";
  const clean = code.replace(/[^A-Za-z0-9]/g, "").toUpperCase();
  return clean.length > 3 ? `${clean.slice(0, 3)}-${clean.slice(3)}` : clean;
};

export default function UploadPage() {
  const [files, setFiles] = useState<File[]>([]);
  const [expiresIn, setExpiresIn] = useState([1]);
  const [maxDownloads, setMaxDownloads] = useState([5]);
  const [stage, setStage] = useState<UploadStage>("idle");
  const [currentStep, setCurrentStep] = useState<ProgressStep>("keys");
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("Drop files to start preparing");
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [uploadStats, setUploadStats] = useState<{ speed: number; eta: number }>({ speed: 0, eta: 0 });
  const [progressSnapshot, setProgressSnapshot] = useState<UploadProgressSnapshot | null>(null);
  const [pendingUploads, setPendingUploads] = useState<UploadProgress[]>([]);
  const [providerTrail, setProviderTrail] = useState<string[]>([]);
  const [preparedCount, setPreparedCount] = useState(0);
  const [activeCode, setActiveCode] = useState<string | undefined>();
  const [masterKeyString, setMasterKeyString] = useState<string | undefined>();
  const [connectionInfo, setConnectionInfo] = useState<ConnectionInfo | null>(null);
  const [transferEstimate, setTransferEstimate] = useState<TransferEstimate | null>(null);
  const [deviceProfile] = useState<DeviceProfile>(getDeviceProfile);

  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const { play: playSound } = useSounds();

  const createVault = useCreateVault();
  const getChunkUrl = useGetChunkUploadUrl();
  const markUploaded = useMarkChunkUploaded();
  const updateVault = useUpdateVault();

  const vaultRef = useRef<any>(null);
  const splitCodeRef = useRef<any>(null);
  const wrappedKeyRef = useRef<string | undefined>();
  const keyRef = useRef<CryptoKey | null>(null);
  const queueRef = useRef<ParallelUploadQueue | null>(null);
  const preparedRef = useRef<PreparedFile[]>([]);
  const trackerRef = useRef<ByteProgressTracker | null>(null);
  const isPreparingRef = useRef(false);
  const stageRef = useRef<UploadStage>("idle");

  const totalSize = useMemo(() => files.reduce((sum, file) => sum + file.size, 0), [files]);
  const totalChunks = useMemo(() => preparedRef.current.reduce((sum, item) => sum + item.chunks, 0), [preparedCount]);
  const isPrepared = Boolean(vaultRef.current && queueRef.current);

  useEffect(() => {
    stageRef.current = stage;
  }, [stage]);

  useEffect(() => {
    loadUploadSettings().then((settings) => {
      if (!settings) return;
      setExpiresIn([settings.expiresIn]);
      setMaxDownloads([settings.maxDownloads]);
    });
    refreshPendingUploads();
  }, []);

  useEffect(() => {
    saveUploadSettings(expiresIn[0], maxDownloads[0]);
  }, [expiresIn, maxDownloads]);

  // Measure connection on mount
  useEffect(() => {
    measureConnectionSpeed().then(setConnectionInfo).catch(() => {});
  }, []);

  // Update transfer estimate when files or connection changes
  useEffect(() => {
    if (totalSize > 0 && connectionInfo) {
      setTransferEstimate(estimateTransfer(totalSize, connectionInfo.speedMbps, deviceProfile));
    } else {
      setTransferEstimate(null);
    }
  }, [totalSize, connectionInfo, deviceProfile]);

  const refreshPendingUploads = async () => {
    await cleanupStaleUploads();
    setPendingUploads(await getPendingUploads());
  };

  const resetPreparedUpload = () => {
    vaultRef.current = null;
    splitCodeRef.current = null;
    wrappedKeyRef.current = undefined;
    keyRef.current = null;
    queueRef.current?.abort();
    queueRef.current = null;
    preparedRef.current = [];
    trackerRef.current = null;
    isPreparingRef.current = false;
    setPreparedCount(0);
    setActiveCode(undefined);
    setMasterKeyString(undefined);
    setProviderTrail([]);
    setProgress(0);
    setProgressSnapshot(null);
  };

  const handleFilesSelected = (nextFiles: File[]) => {
    setUploadError(null);
    resetPreparedUpload();

    if (nextFiles.length === 0) {
      setFiles([]);
      return;
    }

    const config = getUploadConfig(nextFiles);
    if (!config.isValid) {
      playSound("error");
      setUploadError(config.errorMessage || "Invalid files");
      toast({ variant: "destructive", title: "Upload blocked", description: config.errorMessage });
      return;
    }

    playSound("drop");
    setFiles(nextFiles);
    setStatusText("Preparing encrypted transfer");
  };

  const removeFile = (index: number) => {
    const nextFiles = files.filter((_, itemIndex) => itemIndex !== index);
    resetPreparedUpload();
    setFiles(nextFiles);
  };

  useEffect(() => {
    if (files.length === 0 || isPreparingRef.current || vaultRef.current) return;

    const prepare = async () => {
      isPreparingRef.current = true;
      setCurrentStep("keys");
      setStatusText("Allocating keys and transfer plan");

      try {
        const key = await generateKey();
        keyRef.current = key;
        const exported = await exportKey(key);
        setMasterKeyString(exported);

        const preparedFiles: PreparedFile[] = [];
        for (const file of files) {
          const chunkConfig = await getOptimalChunkConfig(file.size);
          preparedFiles.push({
            file,
            fileId: generateUUID(),
            chunkSize: Math.max(1, chunkConfig.chunkSize),
            chunks: Math.max(1, chunkConfig.estimatedChunks),
          });
        }

        const metadata = preparedFiles.map((item) => ({
          name: item.file.name,
          type: item.file.type || "application/octet-stream",
          size: item.file.size,
          fileId: item.fileId,
          lastModified: item.file.lastModified,
        }));

        setCurrentStep("metadata");
        const encryptedMetadata = await encryptMetadata(metadata, key);
        const filesPayload = preparedFiles.map((item) => ({
          fileId: item.fileId,
          chunks: item.chunks,
          size: item.file.size,
          isCompressed: false,
          originalSize: item.file.size,
        }));

        let vaultResult: any = null;
        let splitCodeResult: any = null;
        let wrappedKeyForVault: string | undefined;

        for (let attempt = 0; attempt < 5; attempt++) {
          const splitCode = generateSplitCode();
          const { wrappedKey, salt } = await wrapFileKey(key, splitCode.pin);
          try {
            vaultResult = await createVault.mutateAsync({
              expiresIn: expiresIn[0],
              maxDownloads: maxDownloads[0],
              encryptedMetadata,
              lookupId: splitCode.lookupId,
              wrappedKey,
              pinSalt: salt,
              files: filesPayload,
            });
            splitCodeResult = splitCode;
            wrappedKeyForVault = wrappedKey;
            break;
          } catch (err: any) {
            if (err.status !== 409) throw err;
          }
        }

        if (!vaultResult || !splitCodeResult || !wrappedKeyForVault) {
          throw new Error("Could not allocate a vault code");
        }

        for (const item of preparedFiles) {
          item.uploadId = await createUploadSession({
            vaultId: vaultResult.id,
            fileId: item.fileId,
            fileName: item.file.name,
            fileSize: item.file.size,
            fileType: item.file.type || "application/octet-stream",
            totalChunks: item.chunks,
            chunkSize: item.chunkSize,
            cryptoKeyExported: exported,
            isCompressed: false,
            vaultConfig: {
              expiresIn: expiresIn[0],
              maxDownloads: maxDownloads[0],
              lookupId: splitCodeResult.lookupId,
            },
          });
        }

        vaultRef.current = vaultResult;
        splitCodeRef.current = splitCodeResult;
        wrappedKeyRef.current = wrappedKeyForVault;
        preparedRef.current = preparedFiles;
        trackerRef.current = new ByteProgressTracker(Math.max(1, totalSize));
        setActiveCode(splitCodeResult.fullCode);
        setPreparedCount(preparedFiles.length);

        const queue = new ParallelUploadQueue({
          concurrency: Math.min(6, Math.max(2, navigator.hardwareConcurrency || 4)),
          maxRetries: 8,
          onProgress: () => {
            const snapshot = trackerRef.current?.snapshot();
            if (!snapshot || stageRef.current !== "uploading") return;
            setProgress(8 + snapshot.progress * 0.9);
            setUploadStats({ speed: snapshot.speed, eta: snapshot.eta });
            setProgressSnapshot(snapshot);
          },
          onError: (err) => {
            setUploadError(err.message);
            setStage("idle");
            setStatusText("Transfer paused after repeated failures");
          },
        });

        for (const item of preparedFiles) {
          for (let chunkIndex = 0; chunkIndex < item.chunks; chunkIndex++) {
            queue.add({
              file: item.file,
              chunkIndex,
              totalChunks: item.chunks,
              start: chunkIndex * item.chunkSize,
              end: Math.min((chunkIndex + 1) * item.chunkSize, item.file.size),
              fileId: item.fileId,
              displayName: item.file.name,
              uploadId: item.uploadId,
            });
          }
        }

        queueRef.current = queue;
        setStatusText("Ready. Upload can start instantly");
        await refreshPendingUploads();
      } catch (err) {
        console.error("[Upload prepare failed]", err);
        setUploadError(err instanceof Error ? err.message : "Upload preparation failed");
        isPreparingRef.current = false;
      }
    };

    prepare();
  }, [files]);

  const finalizeUpload = async (vaultId: string, fullCode: string) => {
    for (const item of preparedRef.current) {
      if (item.uploadId) await deleteUploadSession(item.uploadId).catch(() => undefined);
    }
    await clearStoredFiles().catch(() => undefined);
    await refreshPendingUploads();
    playSound("success");
    setCurrentStep("done");
    setProgress(100);
    setStatusText("Transfer sealed");
    setStage("success");
    setTimeout(() => {
      const speedParam = uploadStats.speed > 0 ? `&speed=${Math.round(uploadStats.speed)}` : "";
      setLocation(`/success/${vaultId}#code=${fullCode}${speedParam}`);
    }, 900);
  };

  const uploadTask = async (task: ChunkTask) => {
    if (!keyRef.current || !vaultRef.current) throw new Error("Transfer is not prepared");

    const originalBytes = Math.max(1, task.end - task.start);
    const chunkBuffer = await task.file.slice(task.start, task.end).arrayBuffer();
    const encrypted = await workerPool.encrypt(chunkBuffer, keyRef.current);
    const iv = encrypted.iv instanceof Uint8Array ? encrypted.iv : new Uint8Array(encrypted.iv);
    const encryptedBytes = new Uint8Array(encrypted.encryptedData);
    const combined = new Uint8Array(iv.byteLength + encryptedBytes.byteLength);
    combined.set(iv, 0);
    combined.set(encryptedBytes, iv.byteLength);

    trackerRef.current?.addEncrypted(originalBytes);
    setProgressSnapshot(trackerRef.current?.snapshot() || null);

    const { uploadUrl, storagePath, provider } = await getChunkUrl.mutateAsync({
      vaultId: vaultRef.current.id,
      fileId: task.fileId,
      chunkIndex: task.chunkIndex,
      size: combined.byteLength,
    });

    setProviderTrail((current) => {
      const next = [...current, provider.toUpperCase()];
      return next.slice(-6);
    });

    const response = await fetch(uploadUrl, {
      method: "PUT",
      body: combined,
      headers: { "Content-Type": "application/octet-stream" },
    });

    if (!response.ok) throw new Error(`Storage upload failed with HTTP ${response.status}`);

    trackerRef.current?.addUploaded(originalBytes);
    await markUploaded.mutateAsync({
      vaultId: vaultRef.current.id,
      fileId: task.fileId,
      chunkIndex: task.chunkIndex,
      storagePath,
    });
    if (task.uploadId) await markChunkUploaded(task.uploadId, task.chunkIndex).catch(() => undefined);
    trackerRef.current?.addConfirmed(originalBytes);

    const snapshot = trackerRef.current?.snapshot();
    if (snapshot) {
      setProgress(8 + snapshot.progress * 0.9);
      setUploadStats({ speed: snapshot.speed, eta: snapshot.eta });
      setProgressSnapshot(snapshot);
    }
  };

  const handleUpload = async () => {
    if (files.length === 0) return;

    if (!vaultRef.current || !queueRef.current) {
      setStage("encrypting");
      setStatusText("Finishing transfer preparation");
      for (let i = 0; i < 60 && (!vaultRef.current || !queueRef.current); i++) {
        await new Promise((resolve) => setTimeout(resolve, 100));
      }
      if (!vaultRef.current || !queueRef.current) {
        setStage("idle");
        toast({ title: "Still preparing", description: "The transfer plan is almost ready. Try again in a moment." });
        return;
      }
    }

    setUploadError(null);
    setStage("uploading");
    setCurrentStep("transfer");
    setStatusText("Encrypting and uploading binary chunks");
    setProgress(8);

    if (wrappedKeyRef.current) {
      updateVault.mutate({
        id: vaultRef.current.id,
        expiresIn: expiresIn[0],
        maxDownloads: maxDownloads[0],
        vaultKey: wrappedKeyRef.current,
      });
    }

    try {
      await queueRef.current.start(uploadTask);
      await finalizeUpload(vaultRef.current.id, splitCodeRef.current.fullCode);
    } catch (err) {
      setStage("idle");
      setUploadError(err instanceof Error ? err.message : "Upload failed");
      await refreshPendingUploads();
    }
  };

  const clearPending = async () => {
    for (const upload of pendingUploads) {
      await deleteUploadSession(upload.uploadId).catch(() => undefined);
    }
    await refreshPendingUploads();
  };

  return (
    <div className="min-h-screen bg-[#020604] text-zinc-100 relative">
      {/* Background effects */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] radial-backlight rounded-full opacity-50 pointer-events-none" />

      <header className="sticky top-0 z-50 border-b border-white/[0.03] bg-[#020604]/80 backdrop-blur-2xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer select-none">
              <div className="relative w-9 h-9 flex items-center justify-center">
                <svg className="w-full h-full text-[#10b981]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="44" stroke="#10b981" strokeOpacity="0.1" strokeWidth="1.5" strokeDasharray="8 6" />
                  <circle cx="50" cy="50" r="38" stroke="#10b981" strokeOpacity="0.3" strokeWidth="2" />
                  <path d="M50 18C66 18 73 23 73 23C73 45 62 66 50 80C38 66 27 45 27 23C27 23 34 18 50 18Z" fill="#10b981" fillOpacity="0.08" stroke="#10b981" strokeWidth="2.5" />
                  <circle cx="50" cy="50" r="11" fill="#022c22" stroke="#10b981" strokeWidth="1.5" />
                  <path d="M50 39V43" stroke="#10b981" strokeWidth="2" />
                  <path d="M50 57V61" stroke="#10b981" strokeWidth="2" />
                  <path d="M39 50H43" stroke="#10b981" strokeWidth="2" />
                  <path d="M57 50H61" stroke="#10b981" strokeWidth="2" />
                </svg>
              </div>
              <div>
                <span className="text-base font-bold tracking-tight text-white font-['Geist',system-ui,sans-serif] block leading-none">
                  Vault<span className="text-[#10b981]">Bridge</span>
                </span>
                <span className="text-[10px] text-zinc-500 font-bold tracking-wider mt-1 block">TRANSFER CONSOLE</span>
              </div>
            </div>
          </Link>
          <Link href="/">
            <Button variant="ghost" size="sm" className="rounded-full text-zinc-400 hover:text-white px-4 text-xs font-semibold gap-2 border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-800 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Return home
            </Button>
          </Link>
        </div>
      </header>

      <main className="mx-auto grid w-full max-w-7xl gap-6 px-5 py-8 lg:grid-cols-[minmax(0,1.2fr)_380px]">
        <section className="space-y-6">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={spring}>
            <p className="mb-3 flex items-center gap-2 text-xs font-medium text-primary">
              <Zap className="h-4 w-4" />
              Instant encrypted upload
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-6xl">
              Send files through a fast private transfer lane.
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground">
              Files are encrypted in your browser, split into smart chunks, routed to storage, and removed after expiry or download limits.
            </p>
          </motion.div>

          {pendingUploads.length > 0 && (
            <div className="transfer-panel flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <PauseCircle className="h-5 w-5 text-amber-300" />
                <div>
                  <p className="text-sm font-medium text-white">{pendingUploads.length} pending transfer session{pendingUploads.length > 1 ? "s" : ""}</p>
                  <p className="text-xs text-muted-foreground">Selected files can be restored by the browser cache when available.</p>
                </div>
              </div>
              <Button variant="outline" size="sm" onClick={clearPending} className="rounded-lg">
                <RotateCcw className="mr-2 h-4 w-4" />
                Clear pending
              </Button>
            </div>
          )}

          <div className="transfer-panel overflow-hidden">
            <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_340px]">
              <div className="border-b border-white/[0.06] p-5 lg:border-b-0 lg:border-r">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-white">Drop dock</p>
                    <p className="text-xs text-muted-foreground">Files begin preparation as soon as they land.</p>
                  </div>
                  {isPrepared ? (
                    <span className="flex items-center gap-2 rounded-md border border-primary/20 bg-primary/10 px-2.5 py-1 text-xs text-primary">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      Ready
                    </span>
                  ) : files.length > 0 ? (
                    <span className="flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-muted-foreground">
                      <Loader2 className="h-3.5 w-3.5 animate-spin" />
                      Preparing
                    </span>
                  ) : null}
                </div>
                <FileDropzone onFilesSelected={handleFilesSelected} disabled={stage !== "idle"} />
              </div>

              <aside className="p-5">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-white">Manifest</p>
                    <p className="text-xs text-muted-foreground">{files.length ? `${files.length} file${files.length > 1 ? "s" : ""}` : "No payload selected"}</p>
                  </div>
                  <p className="font-mono text-xs text-primary">{formatBytes(totalSize)}</p>
                </div>

                <div className="max-h-[360px] space-y-2 overflow-y-auto pr-1">
                  {files.length === 0 ? (
                    <div className="flex h-52 flex-col items-center justify-center rounded-xl border border-dashed border-white/10 text-center">
                      <HardDrive className="mb-3 h-8 w-8 text-muted-foreground" />
                      <p className="text-sm text-white">Waiting for files</p>
                      <p className="mt-1 text-xs text-muted-foreground">Drag files or folders into the dock.</p>
                    </div>
                  ) : (
                    files.map((file, index) => (
                      <div key={`${file.name}-${file.lastModified}-${index}`} className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.025] p-3">
                        <div className="min-w-0">
                          <p className="truncate text-sm font-medium text-white">{file.name}</p>
                          <p className="mt-1 text-xs text-muted-foreground">{formatBytes(file.size)} / {file.type || "binary"}</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="ml-3 rounded-lg p-2 text-muted-foreground transition hover:bg-red-500/10 hover:text-red-300"
                          aria-label={`Remove ${file.name}`}
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    ))
                  )}
                </div>
              </aside>
            </div>
          </div>
        </section>

        <aside className="space-y-6">
          <div className="transfer-panel p-5">
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-lg border border-white/10 bg-white/[0.03] p-2">
                <Gauge className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">Transfer plan</p>
                <p className="text-xs text-muted-foreground">
                  {transferEstimate
                    ? `${transferEstimate.quality} · ${transferEstimate.speedLabel}`
                    : "Measuring connection..."}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Metric icon={Layers} label="Chunks" value={totalChunks > 0 ? String(totalChunks) : "auto"} />
              <Metric icon={Network} label="Speed" value={connectionInfo ? `${connectionInfo.speedMbps.toFixed(0)} Mbps` : "measuring"} />
              <Metric icon={Cpu} label="Device" value={`${deviceProfile.cores} cores`} />
              <Metric icon={Clock} label="Est. time" value={transferEstimate?.etaLabel ?? "add files"} />
            </div>

            {transferEstimate && (
              <div className="mt-4 rounded-xl border border-white/[0.06] bg-black/20 p-4">
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {getTransferSummary(transferEstimate)}
                </p>
              </div>
            )}

            {progressSnapshot && (
              <div className="mt-5 space-y-3 rounded-xl border border-white/[0.06] bg-black/20 p-4">
                <ByteRow label="encrypted" value={progressSnapshot.encryptedBytes} total={progressSnapshot.totalBytes} />
                <ByteRow label="uploaded" value={progressSnapshot.uploadedBytes} total={progressSnapshot.totalBytes} />
                <ByteRow label="confirmed" value={progressSnapshot.confirmedBytes} total={progressSnapshot.totalBytes} />
              </div>
            )}
          </div>

          <div className="transfer-panel p-5">
            <div className="mb-5 flex items-center gap-3">
              <KeyRound className="h-5 w-5 text-primary" />
              <p className="text-sm font-medium text-white">Access rules</p>
            </div>

            <ControlSlider
              icon={Clock}
              label="Expiry"
              value={formatExpiry(expiresIn[0])}
              sliderValue={expiresIn}
              onChange={setExpiresIn}
              min={1}
              max={168}
            />
            <ControlSlider
              icon={Lock}
              label="Downloads"
              value={`${maxDownloads[0]} max`}
              sliderValue={maxDownloads}
              onChange={setMaxDownloads}
              min={1}
              max={100}
            />

            <button
              type="button"
              onClick={() => setMaxDownloads(maxDownloads[0] === 1 ? [5] : [1])}
              className={`mt-4 flex w-full items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm transition ${
                maxDownloads[0] === 1
                  ? "border-red-400/20 bg-red-400/10 text-red-200"
                  : "border-white/[0.08] bg-white/[0.03] text-muted-foreground hover:text-white"
              }`}
            >
              <Flame className="h-4 w-4" />
              {maxDownloads[0] === 1 ? "Burn after first download" : "Switch to burn-after-read"}
            </button>
          </div>

          <div className="transfer-panel p-5">
            <AnimatePresence mode="wait">
              {stage !== "idle" ? (
                <motion.div key="progress" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <EncryptionProgress
                    stage={stage}
                    step={currentStep}
                    progress={progress}
                    statusText={statusText}
                    speed={uploadStats.speed}
                    eta={uploadStats.eta}
                    accessCode={activeCode}
                    masterKey={masterKeyString}
                  />
                </motion.div>
              ) : (
                <motion.div key="launch" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
                  {activeCode && (
                    <div className="rounded-xl border border-primary/20 bg-primary/10 p-4">
                      <p className="mb-2 flex items-center gap-2 text-xs text-primary">
                        <ShieldCheck className="h-4 w-4" />
                        Code reserved
                      </p>
                      <button 
                        onClick={() => {
                          const clean = activeCode.replace(/[^A-Za-z0-9]/g, "").toUpperCase();
                          navigator.clipboard.writeText(clean);
                          toast({ title: "Code copied", description: "Vault code saved to clipboard" });
                        }}
                        className="w-full text-left font-mono text-3xl font-semibold tracking-wide text-white hover:text-primary transition-colors cursor-pointer select-all active:scale-[0.98]"
                      >
                        {formatCode(activeCode)}
                      </button>
                    </div>
                  )}

                  {uploadError && (
                    <div className="rounded-xl border border-red-400/20 bg-red-400/10 p-3 text-sm text-red-200">
                      {uploadError}
                    </div>
                  )}

                  <Button
                    onClick={handleUpload}
                    disabled={files.length === 0}
                    className="h-14 w-full rounded-xl text-base"
                  >
                    {files.length === 0 ? (
                      "Select files"
                    ) : isPrepared ? (
                      <>
                        Start transfer <ChevronRight className="ml-2 h-5 w-5" />
                      </>
                    ) : (
                      <>
                        Preparing <Loader2 className="ml-2 h-5 w-5 animate-spin" />
                      </>
                    )}
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">{statusText}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </aside>
      </main>

      {/* Prominent Upload Overlay */}
      <UploadOverlay
        show={stage !== "idle"}
        stage={stage}
        progress={progress}
        statusText={statusText}
        speed={uploadStats.speed}
        eta={uploadStats.eta}
        accessCode={activeCode}
        masterKey={masterKeyString}
        fileCount={files.length}
        totalSize={totalSize}
        chunkCount={totalChunks}
        providerTrail={providerTrail}
        encryptedBytes={progressSnapshot?.encryptedBytes ?? 0}
        uploadedBytes={progressSnapshot?.uploadedBytes ?? 0}
        confirmedBytes={progressSnapshot?.confirmedBytes ?? 0}
        onCancel={() => window.location.reload()}
      />
    </div>
  );
}

function Metric({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-3">
      <div className="mb-2 flex items-center gap-2 text-xs text-muted-foreground">
        <Icon className="h-3.5 w-3.5" />
        {label}
      </div>
      <p className="truncate font-mono text-sm text-white">{value}</p>
    </div>
  );
}

function ByteRow({ label, value, total }: { label: string; value: number; total: number }) {
  const percent = total > 0 ? Math.min(100, (value / total) * 100) : 0;
  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-[11px]">
        <span className="text-muted-foreground">{label}</span>
        <span className="font-mono text-white">{formatBytes(value)}</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
        <div className="h-full rounded-full bg-primary" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}

function ControlSlider({
  icon: Icon,
  label,
  value,
  sliderValue,
  onChange,
  min,
  max,
}: {
  icon: any;
  label: string;
  value: string;
  sliderValue: number[];
  onChange: (value: number[]) => void;
  min: number;
  max: number;
}) {
  return (
    <div className="mb-5">
      <div className="mb-3 flex items-center justify-between">
        <span className="flex items-center gap-2 text-sm text-muted-foreground">
          <Icon className="h-4 w-4 text-primary" />
          {label}
        </span>
        <span className="font-mono text-sm text-white">{value}</span>
      </div>
      <Slider value={sliderValue} onValueChange={onChange} min={min} max={max} step={1} />
    </div>
  );
}
