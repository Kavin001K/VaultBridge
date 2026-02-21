import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Clipboard, RefreshCw, Share2, FileText, FileType, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";
import { useUpdateClipboard, useClipboardSync } from "@/hooks/use-vaults";
import { decryptClipboardText, encryptClipboardText } from "@/lib/crypto";
import { cn } from "@/lib/utils";
import { jsPDF } from "jspdf";

interface LiveClipboardProps {
    lookupId: string;
    fileKey: CryptoKey;
    wrappedKey: string;
    initialContent: string | null;
    size?: "default" | "large";
}

export function LiveClipboard({ lookupId, fileKey, wrappedKey, initialContent, size = "default" }: LiveClipboardProps) {
    const { toast } = useToast();
    const [clipboardContent, setClipboardContent] = useState<string | null>(initialContent);
    const [isEditing, setIsEditing] = useState(false);
    const [lastSaved, setLastSaved] = useState<Date | null>(null);

    // Sync Hook
    const { data: syncData, refetch, isRefetching } = useClipboardSync(lookupId, !!lookupId);
    const updateClipboard = useUpdateClipboard();

    // FIX: Use ref to track current content — prevents this effect from running on every keystroke.
    // The root bug was: clipboardContent in deps → user types → content changes → effect re-runs →
    // decrypt runs again unnecessarily (and could overwrite a concurrent edit).
    const clipboardContentRef = useRef(clipboardContent);
    clipboardContentRef.current = clipboardContent;

    // Sync Effect — only reruns when server data, key, or editing state changes
    useEffect(() => {
        if (syncData?.encryptedClipboardText && fileKey && !isEditing) {
            const decryptSync = async () => {
                try {
                    const decrypted = await decryptClipboardText(syncData.encryptedClipboardText!, fileKey);
                    // Compare via ref, not state dependency
                    if (decrypted !== clipboardContentRef.current) {
                        setClipboardContent(decrypted);
                        if (syncData.updatedAt) {
                            setLastSaved(new Date(syncData.updatedAt));
                        }
                    }
                } catch (e) {
                    console.error("Sync decryption failed", e);
                }
            };
            decryptSync();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [syncData, fileKey, isEditing]);

    const handleSaveClipboard = async (text: string) => {
        if (!fileKey) return;
        try {
            const encrypted = await encryptClipboardText(text, fileKey);
            await updateClipboard.mutateAsync({
                lookupId,
                encryptedClipboardText: encrypted,
                wrappedKey
            });
            setLastSaved(new Date());
        } catch (e) {
            toast({ variant: "destructive", title: "Failed to save" });
        }
    };

    const handleExport = (format: 'txt' | 'pdf' | 'doc') => {
        if (!clipboardContent) return;

        switch (format) {
            case 'txt':
                const blob = new Blob([clipboardContent], { type: 'text/plain' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `clipboard-${lookupId}.txt`;
                a.click();
                URL.revokeObjectURL(url);
                break;
            case 'pdf':
                const doc = new jsPDF();
                const splitText = doc.splitTextToSize(clipboardContent, 180);
                doc.text(splitText, 10, 10);
                doc.save(`clipboard-${lookupId}.pdf`);
                break;
            case 'doc':
                const html = `<html><body><pre>${clipboardContent}</pre></body></html>`;
                const docBlob = new Blob([html], { type: 'application/msword' });
                const docUrl = URL.createObjectURL(docBlob);
                const docA = document.createElement('a');
                docA.href = docUrl;
                docA.download = `clipboard-${lookupId}.doc`;
                docA.click();
                URL.revokeObjectURL(docUrl);
                break;
        }
        toast({ title: `Exported as ${format.toUpperCase()}` });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn(
                "mb-6 bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden shadow-sm flex flex-col",
                size === "large" ? "h-[360px] sm:h-[460px] lg:h-[520px]" : "h-[260px] sm:h-[320px]"
            )}
        >
            {/* Header */}
            <div className="flex items-center justify-between p-3 border-b border-zinc-800 bg-zinc-900/80">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center shadow-lg shadow-cyan-900/20">
                        <Clipboard className="w-4 h-4 text-white" />
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <p className="text-sm font-bold text-cyan-100">Live Clipboard</p>
                            {(updateClipboard.isPending || isRefetching) && (
                                <RefreshCw className="w-3 h-3 text-cyan-400 animate-spin" />
                            )}
                        </div>
                        <p className="text-[10px] text-cyan-400/60 font-mono">
                            {lastSaved ? `Synced ${lastSaved.toLocaleTimeString()}` : 'Ready to sync'}
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    {/* Refresh Button */}
                    <Button
                        size="sm"
                        variant="ghost"
                        className="h-8 w-8 p-0 text-zinc-400 hover:text-cyan-400"
                        onClick={() => refetch()}
                        title="Force Sync"
                    >
                        <RefreshCw className={`w-4 h-4 ${isRefetching ? "animate-spin" : ""}`} />
                    </Button>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-zinc-400 hover:text-white">
                                <Share2 className="w-4 h-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="bg-zinc-900 border-zinc-800">
                            <DropdownMenuItem onClick={() => handleExport('txt')} className="text-zinc-300 focus:bg-zinc-800 focus:text-white cursor-pointer">
                                <FileText className="w-4 h-4 mr-2" /> Export to TXT
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleExport('pdf')} className="text-zinc-300 focus:bg-zinc-800 focus:text-white cursor-pointer">
                                <FileType className="w-4 h-4 mr-2" /> Export to PDF
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleExport('doc')} className="text-zinc-300 focus:bg-zinc-800 focus:text-white cursor-pointer">
                                <FileText className="w-4 h-4 mr-2" /> Export to DOC
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <Button
                        size="sm"
                        variant="ghost"
                        className="h-8 text-zinc-400 hover:text-cyan-400"
                        onClick={async () => {
                            await navigator.clipboard.writeText(clipboardContent || "");
                            toast({ title: "Copied!" });
                        }}
                    >
                        <Copy className="w-4 h-4" />
                    </Button>
                </div>
            </div>

            {/* Live Editor */}
            <div className="relative flex-1 min-h-0">
                <Textarea
                    value={clipboardContent || ""}
                    onChange={(e) => {
                        setClipboardContent(e.target.value);
                        setIsEditing(true);
                    }}
                    onBlur={() => {
                        setIsEditing(false);
                        if (clipboardContent) handleSaveClipboard(clipboardContent);
                    }}
                    className="h-full min-h-0 overflow-y-auto overscroll-contain bg-transparent border-0 resize-none focus-visible:ring-0 text-zinc-300 font-mono text-sm leading-relaxed p-4 custom-scrollbar"
                    placeholder="Type shared content here..."
                />
                {isEditing && (
                    <div className="absolute bottom-2 right-2 flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2">
                        <span className="text-[10px] text-zinc-500 font-mono bg-black/50 px-2 py-1 rounded-full border border-zinc-800">
                            Editing...
                        </span>
                    </div>
                )}
            </div>
        </motion.div>
    );
}
