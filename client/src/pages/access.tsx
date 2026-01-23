import { useState } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import {
    Lock, KeyRound, ArrowLeft, Shield, AlertTriangle, Download, Loader2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useCodeLookup, useGetChunkDownloadUrl, useTrackDownload } from "@/hooks/use-vaults";
import { unwrapFileKey, decryptMetadata, decryptData } from "@/lib/crypto";

type AccessStage = "input" | "fetching" | "decrypting" | "ready" | "downloading";

interface FileMetadata {
    name: string;
    type: string;
    size: number;
    fileId: string;
    lastModified: number;
}

export default function AccessPage() {
    const [accessCode, setAccessCode] = useState("");
    const [stage, setStage] = useState<AccessStage>("input");
    const [statusText, setStatusText] = useState("");
    const [fileMetadata, setFileMetadata] = useState<FileMetadata[]>([]);
    const [vaultData, setVaultData] = useState<any>(null);
    const [fileKey, setFileKey] = useState<CryptoKey | null>(null);

    const [, setLocation] = useLocation();
    const { toast } = useToast();
    const codeLookup = useCodeLookup();
    const getChunkUrl = useGetChunkDownloadUrl();
    const trackDownload = useTrackDownload();

    // Format the code as XXX-XXX
    const formatCodeDisplay = (code: string) => {
        if (code.length <= 3) return code;
        return `${code.slice(0, 3)}-${code.slice(3)}`;
    };

    const handleCodeSubmit = async () => {
        // Validate 6-digit numeric code
        const cleanCode = accessCode.replace(/\D/g, '');
        if (cleanCode.length !== 6) {
            toast({
                variant: "destructive",
                title: "Invalid Code",
                description: "Please enter a 6-digit numeric code."
            });
            return;
        }

        setStage("fetching");
        setStatusText("Looking up vault...");

        try {
            // Split the code into lookupId (first 3) and PIN (last 3)
            const lookupId = cleanCode.slice(0, 3);
            const pin = cleanCode.slice(3, 6);

            // Fetch vault data using only the lookupId
            // The server never sees the PIN!
            const vault = await codeLookup.mutateAsync(lookupId);
            setVaultData(vault);

            setStage("decrypting");
            setStatusText("Unwrapping encryption key with PIN...");

            // Unwrap the file key using the PIN
            const key = await unwrapFileKey(vault.wrappedKey, pin);
            setFileKey(key);

            setStatusText("Decrypting file metadata...");

            // Decrypt the metadata to show file names
            const metadata = await decryptMetadata(vault.encryptedMetadata, key);
            setFileMetadata(metadata);

            setStage("ready");
            setStatusText("Files ready for download!");

            toast({
                title: "Vault Unlocked!",
                description: `${metadata.length} file(s) ready for download.`,
            });

        } catch (err) {
            setStage("input");
            console.error("Access error:", err);

            let errorMessage = "Invalid or expired code. Please check and try again.";
            if (err instanceof Error) {
                if (err.message.includes("unwrap")) {
                    errorMessage = "Invalid PIN. The second half of your code is incorrect.";
                } else if (err.message.includes("expired")) {
                    errorMessage = "This vault has expired or reached its download limit.";
                }
            }

            toast({
                variant: "destructive",
                title: "Access Denied",
                description: errorMessage
            });
        }
    };

    const handleDownload = async () => {
        if (!vaultData || !fileKey || fileMetadata.length === 0) return;

        setStage("downloading");

        try {
            // Track the download
            await trackDownload.mutateAsync(vaultData.id);

            for (const file of fileMetadata) {
                setStatusText(`Downloading ${file.name}...`);

                const vaultFile = vaultData.files.find((f: any) => f.fileId === file.fileId);
                if (!vaultFile) continue;

                const chunks: ArrayBuffer[] = [];

                // Download and decrypt each chunk
                for (let i = 0; i < vaultFile.chunkCount; i++) {
                    setStatusText(`Decrypting ${file.name} [${i + 1}/${vaultFile.chunkCount}]...`);

                    const { downloadUrl } = await getChunkUrl.mutateAsync({
                        vaultId: vaultData.id,
                        fileId: file.fileId,
                        chunkIndex: i,
                    });

                    // Fetch the encrypted chunk
                    const response = await fetch(downloadUrl);
                    const encryptedChunk = await response.arrayBuffer();

                    // Extract IV (first 12 bytes) and encrypted data
                    const iv = new Uint8Array(encryptedChunk, 0, 12);
                    const encryptedData = new Uint8Array(encryptedChunk, 12);

                    // Decrypt the chunk
                    const decryptedChunk = await decryptData(encryptedData, iv, fileKey);
                    chunks.push(decryptedChunk);
                }

                // Combine all chunks and create blob
                const totalSize = chunks.reduce((acc, chunk) => acc + chunk.byteLength, 0);
                const combinedBuffer = new Uint8Array(totalSize);
                let offset = 0;
                for (const chunk of chunks) {
                    combinedBuffer.set(new Uint8Array(chunk), offset);
                    offset += chunk.byteLength;
                }

                const blob = new Blob([combinedBuffer], { type: file.type || 'application/octet-stream' });
                const url = URL.createObjectURL(blob);

                // Trigger download
                const a = document.createElement('a');
                a.href = url;
                a.download = file.name;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
            }

            setStage("ready");
            setStatusText("All files downloaded!");

            toast({
                title: "Download Complete!",
                description: `${fileMetadata.length} file(s) downloaded successfully.`,
            });

        } catch (err) {
            setStage("ready");
            console.error("Download error:", err);
            toast({
                variant: "destructive",
                title: "Download Failed",
                description: err instanceof Error ? err.message : "An error occurred during download.",
            });
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && accessCode.replace(/\D/g, '').length === 6 && stage === "input") {
            handleCodeSubmit();
        }
    };

    // Format input as XXX-XXX
    const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, '').slice(0, 6);
        setAccessCode(value);
    };

    return (
        <div className="min-h-screen relative overflow-hidden flex flex-col">
            {/* Background Effects */}
            <div className="fixed inset-0 grid-bg opacity-50" />
            <div className="scanline" />
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-zinc-500/5 rounded-full blur-[100px] pointer-events-none" />

            {/* Header */}
            <header className="relative z-10 px-6 py-8">
                <div className="max-w-4xl mx-auto flex items-center justify-between">
                    <Link href="/">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
                        >
                            <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center border border-primary/30">
                                <Lock className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <h1 className="text-xl font-bold font-mono tracking-tight">
                                    VAULT<span className="text-primary">BRIDGE</span>
                                </h1>
                            </div>
                        </motion.div>
                    </Link>

                    <Link href="/">
                        <Button variant="ghost" className="gap-2">
                            <ArrowLeft className="w-4 h-4" />
                            Back
                        </Button>
                    </Link>
                </div>
            </header>

            {/* Main Content */}
            <main className="relative z-10 flex-1 flex flex-col items-center justify-center max-w-lg mx-auto px-6 py-8">
                {/* Page Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-10"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="p-3 rounded-xl bg-zinc-800 border border-zinc-700">
                            <KeyRound className="w-8 h-8 text-zinc-400" />
                        </div>
                    </div>
                    <h2 className="text-3xl font-bold mb-2">Access Vault</h2>
                    <p className="text-muted-foreground">
                        Enter your 6-digit access code to unlock the vault
                    </p>
                </motion.div>

                {/* Access Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="glass-card p-8 w-full"
                >
                    {stage === "input" && (
                        <div className="space-y-6">
                            {/* Code Input */}
                            <div className="space-y-3">
                                <label className="text-sm text-muted-foreground uppercase tracking-wider font-mono">
                                    Access Code
                                </label>
                                <Input
                                    type="text"
                                    value={formatCodeDisplay(accessCode)}
                                    onChange={handleCodeChange}
                                    onKeyPress={handleKeyPress}
                                    placeholder="123-456"
                                    className="code-input h-20 text-center text-4xl tracking-[0.3em]"
                                    maxLength={7}
                                    autoFocus
                                />
                                <p className="text-xs text-muted-foreground text-center">
                                    Enter the 6-digit code you received
                                </p>
                            </div>

                            {/* Submit Button */}
                            <Button
                                onClick={handleCodeSubmit}
                                disabled={accessCode.replace(/\D/g, '').length !== 6}
                                variant="secondary"
                                className="w-full h-14 font-mono uppercase tracking-wider font-bold text-base"
                            >
                                <Lock className="w-5 h-5 mr-2" />
                                Unlock Vault
                            </Button>
                        </div>
                    )}

                    {(stage === "fetching" || stage === "decrypting") && (
                        <div className="text-center py-8">
                            <Loader2 className="w-12 h-12 text-primary animate-spin mx-auto mb-4" />
                            <p className="text-lg font-medium">{statusText}</p>
                            <p className="text-sm text-muted-foreground mt-2">
                                Decryption happens in your browser
                            </p>
                        </div>
                    )}

                    {stage === "ready" && (
                        <div className="space-y-6">
                            <div className="text-center">
                                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                                <h3 className="text-xl font-bold mb-2">Vault Unlocked!</h3>
                                <p className="text-sm text-muted-foreground">
                                    {fileMetadata.length} file(s) ready for download
                                </p>
                            </div>

                            {/* File List */}
                            <div className="space-y-2">
                                {fileMetadata.map((file, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-between p-3 bg-zinc-800/50 rounded-lg"
                                    >
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium truncate">{file.name}</p>
                                            <p className="text-xs text-muted-foreground">
                                                {(file.size / 1024 / 1024).toFixed(2)} MB
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Download Button */}
                            <Button
                                onClick={handleDownload}
                                className="w-full h-14 cyber-btn text-base"
                            >
                                <Download className="w-5 h-5 mr-2" />
                                Download All Files
                            </Button>

                            {/* Remaining Downloads */}
                            <p className="text-xs text-center text-muted-foreground">
                                {vaultData?.maxDownloads - vaultData?.downloadCount} downloads remaining
                            </p>
                        </div>
                    )}

                    {stage === "downloading" && (
                        <div className="text-center py-8">
                            <Loader2 className="w-12 h-12 text-primary animate-spin mx-auto mb-4" />
                            <p className="text-lg font-medium">{statusText}</p>
                            <p className="text-sm text-muted-foreground mt-2">
                                Files are being decrypted in your browser
                            </p>
                        </div>
                    )}

                    {/* Security Info */}
                    <div className="mt-8 pt-6 border-t border-border/50">
                        <div className="flex items-start gap-3 text-sm text-muted-foreground">
                            <Shield className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <p>
                                Files are decrypted in your browser using your PIN.
                                The server never sees your PIN or decryption key.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Or use direct link */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-8 text-center"
                >
                    <div className="p-4 bg-rose-500/10 border border-rose-500/20 rounded-xl">
                        <div className="flex items-start gap-3 text-left">
                            <AlertTriangle className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                            <div>
                                <p className="text-sm font-medium text-rose-400">Important</p>
                                <p className="text-xs text-rose-300/80 mt-1">
                                    Access codes expire. If your code doesn't work,
                                    the vault may have expired or reached its download limit.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </main>
        </div>
    );
}
