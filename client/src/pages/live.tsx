import { useState, useEffect, useRef } from "react";
import { useLocation, useRoute } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
    Zap, Upload, Copy, Check, ArrowRight, Shield, AlertTriangle,
    FileText, Download, Users, Radio, ArrowLeft, Wifi, WifiOff,
    Share2, Link as LinkIcon, Eye, Sparkles, CheckCircle2, X, RefreshCw,
    Lock, Globe, Send
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { P2PClient } from "@/lib/webrtc";

const generateCode = () => Math.floor(100000 + Math.random() * 900000).toString();

type PageMode = 'landing' | 'sender' | 'receiver';

export default function LivePage() {
    const [match, params] = useRoute("/live/:code");
    const hasCodeInUrl = match && params?.code;

    const [mode, setMode] = useState<PageMode>(hasCodeInUrl ? 'receiver' : 'landing');
    const [roomId, setRoomId] = useState<string>(hasCodeInUrl ? params.code : "");
    const [codeDigits, setCodeDigits] = useState<string[]>(["", "", "", "", "", ""]);
    const [files, setFiles] = useState<File[]>([]);
    const [status, setStatus] = useState<string>("");
    const [isConnected, setIsConnected] = useState(false);
    const [isFailed, setIsFailed] = useState(false);
    const [progress, setProgress] = useState(0);
    const [receivedFiles, setReceivedFiles] = useState<any[]>([]);
    const [copied, setCopied] = useState(false);
    const [isDragOver, setIsDragOver] = useState(false);
    const [isSending, setIsSending] = useState(false);

    const clientRef = useRef<P2PClient | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
    const { toast } = useToast();
    const [, setLocation] = useLocation();

    const incomingBufferRef = useRef<ArrayBuffer[]>([]);
    const currentMetaRef = useRef<any>(null);

    useEffect(() => {
        if (hasCodeInUrl && params?.code) {
            setMode('receiver');
            setRoomId(params.code);
            connectP2P(params.code, false);
        }
        return () => { clientRef.current?.close(); };
    }, [hasCodeInUrl, params?.code]);

    const startSenderSession = () => {
        const newId = generateCode();
        setRoomId(newId);
        setMode('sender');
        setStatus("Waiting for peer...");
        connectP2P(newId, true);
    };

    const joinReceiverSession = () => {
        const code = codeDigits.join("");
        if (code.length !== 6) {
            toast({ title: "Invalid Code", description: "Enter all 6 digits.", variant: "destructive" });
            return;
        }
        setRoomId(code);
        setMode('receiver');
        setStatus("Connecting...");
        setLocation(`/live/${code}`);
        connectP2P(code, false);
    };

    const connectP2P = (id: string, initiator: boolean) => {
        if (clientRef.current) clientRef.current.close();
        const client = new P2PClient(id, initiator);
        clientRef.current = client;

        client.on('status', (msg: string) => { if (!isConnected) setStatus(msg); });
        client.on('connected', (connected: boolean) => {
            if (connected) {
                setIsConnected(true);
                setStatus(initiator ? "Connected! Ready to send." : "Connected! Awaiting files...");
                toast({ title: "🔐 Secure Tunnel Active", description: "E2E encrypted.", className: "bg-emerald-900/90 border-emerald-500" });
            }
        });
        client.on('data', (data: any) => handleReceivedData(data));
        client.on('failed', () => { setIsFailed(true); setStatus("Connection failed."); });
        client.connect();
    };

    const sendFiles = async () => {
        if (!clientRef.current || !files.length) return;
        setIsSending(true);
        setStatus(`Sending ${files.length} file(s)...`);

        for (const file of files) {
            clientRef.current.sendData(JSON.stringify({ type: 'meta', name: file.name, size: file.size, mime: file.type }));
            await new Promise(r => setTimeout(r, 100));

            const buffer = await file.arrayBuffer();
            const CHUNK_SIZE = 16 * 1024;
            const chunks = Math.ceil(buffer.byteLength / CHUNK_SIZE);

            for (let i = 0; i < chunks; i++) {
                clientRef.current.sendData(buffer.slice(i * CHUNK_SIZE, Math.min((i + 1) * CHUNK_SIZE, buffer.byteLength)));
                if (i % 100 === 0) await new Promise(r => setTimeout(r, 10));
                setProgress(Math.round(((i + 1) / chunks) * 100));
            }
            clientRef.current.sendData(JSON.stringify({ type: 'eof', name: file.name }));
        }
        setIsSending(false);
        setStatus("Transfer complete!");
        setProgress(100);
    };

    const handleReceivedData = (data: any) => {
        if (typeof data === 'string') {
            try {
                const msg = JSON.parse(data);
                if (msg.type === 'meta') {
                    currentMetaRef.current = msg;
                    incomingBufferRef.current = [];
                    setStatus(`Receiving: ${msg.name}`);
                } else if (msg.type === 'eof') {
                    const blob = new Blob(incomingBufferRef.current, { type: currentMetaRef.current?.mime });
                    setReceivedFiles(prev => [...prev, { ...currentMetaRef.current, url: URL.createObjectURL(blob) }]);
                    setStatus("File received!");
                    currentMetaRef.current = null;
                    incomingBufferRef.current = [];
                }
            } catch { }
        } else if (currentMetaRef.current) {
            incomingBufferRef.current.push(data);
        }
    };

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) setFiles(Array.from(e.target.files));
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragOver(false);
        if (e.dataTransfer.files) setFiles(Array.from(e.dataTransfer.files));
    };

    const formatFileSize = (bytes: number) => {
        if (bytes < 1024) return `${bytes} B`;
        if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
        return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
    };

    const copyToClipboard = async (text: string) => {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        toast({ title: "Copied!" });
        setTimeout(() => setCopied(false), 2000);
    };

    const handleDigitChange = (index: number, value: string) => {
        if (!/^\d*$/.test(value)) return;
        if (value.length > 1) {
            const pasted = value.replace(/\D/g, "").slice(0, 6).split("");
            const newDigits = [...codeDigits];
            pasted.forEach((d, i) => { if (index + i < 6) newDigits[index + i] = d; });
            setCodeDigits(newDigits);
            inputRefs.current[Math.min(index + pasted.length, 5)]?.focus();
            return;
        }
        const newDigits = [...codeDigits];
        newDigits[index] = value;
        setCodeDigits(newDigits);
        if (value && index < 5) inputRefs.current[index + 1]?.focus();
    };

    const handleDigitKeyDown = (index: number, e: React.KeyboardEvent) => {
        if (e.key === 'Backspace' && !codeDigits[index] && index > 0) inputRefs.current[index - 1]?.focus();
        if (e.key === 'Enter' && codeDigits.join("").length === 6) joinReceiverSession();
    };

    const handleDigitPaste = (e: React.ClipboardEvent) => {
        e.preventDefault();
        const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
        if (pasted) {
            setCodeDigits(pasted.split("").concat(Array(6 - pasted.length).fill("")).slice(0, 6));
            inputRefs.current[Math.min(pasted.length, 5)]?.focus();
        }
    };

    const downloadFile = (file: { url: string; name: string }) => {
        const link = document.createElement('a');
        link.href = file.url;
        link.download = file.name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const resetToLanding = () => {
        clientRef.current?.close();
        clientRef.current = null;
        setMode('landing');
        setRoomId("");
        setCodeDigits(["", "", "", "", "", ""]);
        setIsConnected(false);
        setIsFailed(false);
        setStatus("");
        setFiles([]);
        setReceivedFiles([]);
        setProgress(0);
        setIsSending(false);
        setLocation('/live');
    };

    const isCodeComplete = codeDigits.every(d => d !== "");

    return (
        <div className="min-h-screen relative flex flex-col bg-[#0a0a0f] text-zinc-100 overflow-hidden">
            {/* Background */}
            <div className="fixed inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/15 via-transparent to-transparent" />
                <div className="absolute inset-0 grid-bg opacity-20" />
            </div>
            <motion.div animate={{ x: [0, 30, 0], y: [0, -20, 0] }} transition={{ duration: 12, repeat: Infinity }} className="fixed top-20 right-20 w-72 h-72 bg-amber-500/8 rounded-full blur-[120px]" />
            <motion.div animate={{ x: [0, -20, 0], y: [0, 20, 0] }} transition={{ duration: 15, repeat: Infinity }} className="fixed bottom-20 left-20 w-56 h-56 bg-emerald-500/8 rounded-full blur-[100px]" />

            {/* Header */}
            <header className="relative z-10 px-6 py-5 flex items-center justify-between border-b border-white/5">
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} onClick={() => mode === 'landing' ? setLocation('/') : resetToLanding()} className="flex items-center gap-3 cursor-pointer group">
                    {mode !== 'landing' && (
                        <motion.div whileHover={{ x: -2 }} className="p-2 rounded-lg bg-zinc-800/80 border border-zinc-700/50 hover:border-amber-500/30 transition-colors">
                            <ArrowLeft className="w-4 h-4 text-zinc-400" />
                        </motion.div>
                    )}
                    <div className="relative">
                        <div className="p-2.5 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-600/10 border border-amber-500/30">
                            <Zap className="w-5 h-5 text-amber-400" />
                        </div>
                        <motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, repeat: Infinity }} className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-amber-500 rounded-full border-2 border-[#0a0a0f]" />
                    </div>
                    <div>
                        <span className="font-mono font-bold tracking-tight">LIVE<span className="text-amber-400">LINK</span></span>
                        <p className="text-[10px] text-zinc-600 tracking-widest">PEER-TO-PEER</p>
                    </div>
                </motion.div>

                <AnimatePresence>
                    {mode !== 'landing' && (
                        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className={`flex items-center gap-2.5 px-4 py-2 rounded-full border backdrop-blur-sm ${isConnected ? 'bg-emerald-500/10 border-emerald-500/30' : isFailed ? 'bg-red-500/10 border-red-500/30' : 'bg-amber-500/10 border-amber-500/30'}`}>
                            <motion.div animate={!isConnected && !isFailed ? { scale: [1, 1.4, 1] } : {}} transition={{ duration: 1, repeat: Infinity }} className={`w-2 h-2 rounded-full ${isConnected ? 'bg-emerald-400' : isFailed ? 'bg-red-400' : 'bg-amber-400'}`} />
                            <span className={`text-xs font-medium ${isConnected ? 'text-emerald-400' : isFailed ? 'text-red-400' : 'text-amber-400'}`}>{isConnected ? 'SECURE' : isFailed ? 'FAILED' : 'LINKING'}</span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

            <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-8">
                <AnimatePresence mode="wait">

                    {/* LANDING */}
                    {mode === 'landing' && (
                        <motion.div key="landing" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.4 }} className="w-full max-w-3xl">
                            {/* Hero */}
                            <div className="text-center mb-10">
                                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.1 }} className="inline-block mb-5">
                                    <div className="relative">
                                        <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-600/10 border border-amber-500/20 shadow-2xl shadow-amber-500/10">
                                            <Zap className="w-12 h-12 text-amber-400" />
                                        </div>
                                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute -inset-3 border border-dashed border-amber-500/20 rounded-[1.5rem]" />
                                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3 }} className="absolute -top-1 -right-1 p-1 bg-emerald-500 rounded-full border-2 border-[#0a0a0f]">
                                            <Sparkles className="w-2.5 h-2.5 text-white" />
                                        </motion.div>
                                    </div>
                                </motion.div>

                                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
                                    Live <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">P2P</span> Transfer
                                </motion.h1>
                                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-zinc-400 max-w-md mx-auto">
                                    Transfer files directly between devices with end-to-end encryption. No server storage.
                                </motion.p>
                            </div>

                            {/* Cards */}
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="grid md:grid-cols-2 gap-5 mb-10">
                                {/* Start Session */}
                                <motion.div whileHover={{ y: -6, scale: 1.01 }} whileTap={{ scale: 0.99 }} onClick={startSenderSession} className="group cursor-pointer h-full">
                                    <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-amber-950/50 to-amber-950/20 border border-amber-500/20 hover:border-amber-500/40 transition-all relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                        <div className="relative flex flex-col h-full">
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="p-3 rounded-xl bg-gradient-to-br from-amber-500/25 to-amber-600/15 border border-amber-500/30">
                                                    <Radio className="w-6 h-6 text-amber-400" />
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-bold">Start Session</h3>
                                                    <p className="text-xs text-amber-400/70">Create a new live link</p>
                                                </div>
                                            </div>

                                            <p className="text-sm text-zinc-400 leading-relaxed flex-1 mb-5">
                                                Generate a unique 6-digit code and share it with your recipient to start instant file transfer.
                                            </p>

                                            <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm">
                                                <span>Create Session</span>
                                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Join Session */}
                                <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-emerald-950/50 to-emerald-950/20 border border-emerald-500/20 relative overflow-hidden">
                                    <div className="flex flex-col h-full">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500/25 to-emerald-600/15 border border-emerald-500/30">
                                                <Users className="w-6 h-6 text-emerald-400" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold">Join Session</h3>
                                                <p className="text-xs text-emerald-400/70">Enter session code</p>
                                            </div>
                                        </div>

                                        <p className="text-sm text-zinc-400 mb-4">Enter the 6-digit code to connect:</p>

                                        {/* Code Input - Optimized */}
                                        <div className="flex gap-2 mb-4">
                                            {codeDigits.map((digit, idx) => (
                                                <motion.input
                                                    key={idx}
                                                    ref={el => inputRefs.current[idx] = el}
                                                    type="text"
                                                    inputMode="numeric"
                                                    maxLength={1}
                                                    value={digit}
                                                    onChange={e => handleDigitChange(idx, e.target.value)}
                                                    onKeyDown={e => handleDigitKeyDown(idx, e)}
                                                    onPaste={handleDigitPaste}
                                                    whileFocus={{ scale: 1.08 }}
                                                    className={`w-full aspect-square text-center text-xl font-mono font-bold rounded-lg border-2 bg-zinc-950/80 outline-none transition-all ${digit ? 'border-emerald-500 text-emerald-400 shadow-lg shadow-emerald-500/20' : 'border-zinc-700 focus:border-emerald-500/60'
                                                        }`}
                                                />
                                            ))}
                                        </div>

                                        <Button onClick={joinReceiverSession} disabled={!isCodeComplete} className={`w-full h-11 font-bold rounded-xl transition-all ${isCodeComplete ? 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white shadow-lg shadow-emerald-500/20' : 'bg-zinc-800 text-zinc-500'}`}>
                                            <Wifi className="w-4 h-4 mr-2" /> Connect
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Features */}
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="flex flex-wrap justify-center gap-6 text-sm text-zinc-500">
                                {[{ icon: Shield, label: "E2E Encrypted", color: "text-emerald-400" }, { icon: Zap, label: "Zero Latency", color: "text-amber-400" }, { icon: Globe, label: "No Storage", color: "text-blue-400" }].map((f, i) => (
                                    <motion.div key={f.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 + i * 0.1 }} className="flex items-center gap-2">
                                        <f.icon className={`w-4 h-4 ${f.color}`} />
                                        <span>{f.label}</span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    )}

                    {/* SENDER */}
                    {mode === 'sender' && (
                        <motion.div key="sender" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} className="w-full max-w-lg">
                            {!isConnected ? (
                                <div className="text-center space-y-6">
                                    <div>
                                        <h1 className="text-2xl font-bold mb-2">Share This Code</h1>
                                        <p className="text-zinc-400 text-sm">Send this code to your recipient</p>
                                    </div>

                                    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="p-8 rounded-2xl bg-zinc-900/80 border border-zinc-800 backdrop-blur-sm">
                                        <span className="text-xs font-mono text-zinc-500 tracking-widest block mb-5">SESSION CODE</span>

                                        <div className="flex justify-center gap-2 mb-6">
                                            {roomId.split("").map((digit, idx) => (
                                                <motion.div key={idx} initial={{ scale: 0, rotateY: 180 }} animate={{ scale: 1, rotateY: 0 }} transition={{ delay: idx * 0.06, type: "spring" }} className="w-12 h-14 flex items-center justify-center text-2xl font-mono font-bold text-amber-400 bg-amber-500/10 border-2 border-amber-500/30 rounded-xl">
                                                    {digit}
                                                </motion.div>
                                            ))}
                                        </div>

                                        <div className="flex gap-2 justify-center mb-6">
                                            <Button onClick={() => copyToClipboard(roomId)} variant="outline" size="sm" className="gap-2 border-zinc-700 hover:border-amber-500/50">
                                                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                                                {copied ? 'Copied' : 'Copy'}
                                            </Button>
                                            <Button onClick={() => copyToClipboard(`${window.location.origin}/live/${roomId}`)} variant="outline" size="sm" className="gap-2 border-zinc-700 hover:border-amber-500/50">
                                                <LinkIcon className="w-3.5 h-3.5" /> Link
                                            </Button>
                                        </div>

                                        <div className="flex items-center justify-center gap-2 pt-4 border-t border-zinc-800">
                                            <motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-2 h-2 rounded-full bg-amber-500" />
                                            <span className="text-sm text-zinc-400">{status}</span>
                                        </div>
                                    </motion.div>
                                </div>
                            ) : (
                                <div className="space-y-5">
                                    <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="p-4 bg-emerald-500/10 border border-emerald-500/25 rounded-xl flex items-center gap-3">
                                        <div className="p-2 bg-emerald-500/20 rounded-lg"><CheckCircle2 className="w-5 h-5 text-emerald-400" /></div>
                                        <div>
                                            <h3 className="font-bold text-emerald-400 text-sm">Connected</h3>
                                            <p className="text-xs text-emerald-300/60">Secure tunnel active</p>
                                        </div>
                                    </motion.div>

                                    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} onDragOver={e => { e.preventDefault(); setIsDragOver(true); }} onDragLeave={() => setIsDragOver(false)} onDrop={handleDrop} onClick={() => fileInputRef.current?.click()} className={`border-2 border-dashed rounded-xl p-10 text-center cursor-pointer transition-all ${isDragOver ? 'border-amber-500 bg-amber-500/10' : 'border-zinc-700 hover:border-amber-500/50 hover:bg-zinc-900/50'}`}>
                                        <input type="file" ref={fileInputRef} className="hidden" multiple onChange={handleFileSelect} />
                                        <motion.div animate={isDragOver ? { scale: 1.1 } : {}}>
                                            <Upload className={`w-10 h-10 mx-auto mb-3 transition-colors ${isDragOver ? 'text-amber-400' : 'text-zinc-500'}`} />
                                        </motion.div>
                                        <p className="font-semibold mb-1">Drop files or click to browse</p>
                                        <p className="text-xs text-zinc-500">Direct transfer to peer</p>
                                    </motion.div>

                                    <AnimatePresence>
                                        {files.length > 0 && (
                                            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="space-y-3">
                                                {files.map((f, i) => (
                                                    <motion.div key={f.name} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} className="flex items-center justify-between p-3 bg-zinc-900/80 rounded-lg border border-zinc-800">
                                                        <div className="flex items-center gap-3">
                                                            <div className="p-2 bg-amber-500/10 rounded-lg"><FileText className="w-4 h-4 text-amber-400" /></div>
                                                            <div>
                                                                <p className="text-sm font-medium truncate max-w-[180px]">{f.name}</p>
                                                                <p className="text-xs text-zinc-500">{formatFileSize(f.size)}</p>
                                                            </div>
                                                        </div>
                                                        <button onClick={(e) => { e.stopPropagation(); setFiles(files.filter((_, idx) => idx !== i)); }} className="p-1.5 hover:bg-red-500/10 rounded-lg"><X className="w-4 h-4 text-zinc-500 hover:text-red-400" /></button>
                                                    </motion.div>
                                                ))}

                                                {isSending && (
                                                    <div className="space-y-2">
                                                        <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                                                            <motion.div initial={{ width: 0 }} animate={{ width: `${progress}%` }} className="h-full bg-gradient-to-r from-amber-500 to-orange-500" />
                                                        </div>
                                                        <p className="text-center text-xs text-zinc-400">{progress}%</p>
                                                    </div>
                                                )}

                                                <Button onClick={sendFiles} disabled={isSending} className="w-full h-12 font-bold bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white rounded-xl shadow-lg shadow-amber-500/20">
                                                    {isSending ? <><RefreshCw className="w-4 h-4 mr-2 animate-spin" /> Sending...</> : <><Send className="w-4 h-4 mr-2" /> Send</>}
                                                </Button>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            )}

                            <AnimatePresence>
                                {isFailed && (
                                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-5 p-5 bg-red-500/5 border border-red-500/20 rounded-xl text-center space-y-3">
                                        <div className="flex items-center justify-center gap-2 text-red-400"><AlertTriangle className="w-4 h-4" /><span className="font-bold text-sm">Connection Failed</span></div>
                                        <p className="text-xs text-zinc-400">Firewall may be blocking P2P.</p>
                                        <div className="flex gap-2 justify-center">
                                            <Button onClick={() => { setIsFailed(false); connectP2P(roomId, true); }} variant="outline" size="sm" className="border-zinc-700"><RefreshCw className="w-3.5 h-3.5 mr-1" /> Retry</Button>
                                            <Button onClick={() => setLocation('/upload')} size="sm" className="bg-zinc-800">Use Vault</Button>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    )}

                    {/* RECEIVER */}
                    {mode === 'receiver' && (
                        <motion.div key="receiver" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} className="w-full max-w-lg">
                            <div className="text-center mb-6">
                                <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="inline-block p-4 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 border border-emerald-500/20 mb-3">
                                    <Download className="w-8 h-8 text-emerald-400" />
                                </motion.div>
                                <h1 className="text-2xl font-bold mb-1">Receiving Files</h1>
                                <p className="text-emerald-400 font-mono text-sm">{status || `Session: ${roomId}`}</p>
                            </div>

                            {!isConnected && !isFailed && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-8 bg-zinc-900/80 border border-zinc-800 rounded-xl text-center">
                                    <div className="flex justify-center gap-1.5 mb-3">
                                        {[0, 1, 2].map(i => (<motion.div key={i} animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }} className="w-2 h-2 rounded-full bg-amber-500" />))}
                                    </div>
                                    <p className="text-zinc-400 text-sm">Connecting to sender...</p>
                                </motion.div>
                            )}

                            {isConnected && receivedFiles.length === 0 && (
                                <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="p-8 bg-emerald-500/5 border border-emerald-500/20 rounded-xl text-center">
                                    <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
                                    <p className="font-bold text-emerald-400 mb-1">Connected!</p>
                                    <p className="text-sm text-zinc-400">Waiting for files...</p>
                                </motion.div>
                            )}

                            {receivedFiles.length > 0 && (
                                <div className="space-y-3">
                                    <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />Received ({receivedFiles.length})</h3>
                                    {receivedFiles.map((file, i) => (
                                        <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="p-4 bg-zinc-900/80 border border-zinc-800 rounded-xl flex items-center justify-between hover:border-emerald-500/30 transition-colors">
                                            <div className="flex items-center gap-3">
                                                <div className="p-2.5 bg-emerald-500/10 rounded-lg"><FileText className="w-5 h-5 text-emerald-400" /></div>
                                                <div>
                                                    <p className="font-bold text-sm">{file.name}</p>
                                                    <p className="text-xs text-zinc-500">{formatFileSize(file.size)}</p>
                                                </div>
                                            </div>
                                            <Button onClick={() => downloadFile(file)} size="sm" className="bg-gradient-to-r from-emerald-500 to-teal-500 shadow-lg shadow-emerald-500/20">
                                                <Download className="w-4 h-4 mr-1.5" /> Download
                                            </Button>
                                        </motion.div>
                                    ))}
                                </div>
                            )}

                            {isFailed && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 bg-red-500/5 border border-red-500/20 rounded-xl text-center space-y-3">
                                    <WifiOff className="w-6 h-6 text-red-400 mx-auto" />
                                    <p className="font-bold text-red-400 text-sm">Connection Failed</p>
                                    <p className="text-xs text-zinc-400">Sender may have closed session.</p>
                                    <Button onClick={resetToLanding} variant="outline" size="sm" className="border-zinc-700">Try Again</Button>
                                </motion.div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>

            <footer className="relative z-10 py-5 text-center border-t border-white/5">
                <p className="text-xs text-zinc-600 flex items-center justify-center gap-2"><Lock className="w-3 h-3" />End-to-end encrypted via WebRTC</p>
            </footer>
        </div>
    );
}
