import { motion } from "framer-motion";
import { Key, FileText, Lock, Upload, CheckCircle, Loader2 } from "lucide-react";

type ProgressStep = "keys" | "metadata" | "transfer" | "done";
type UploadStage = "idle" | "encrypting" | "uploading" | "success" | "resuming";

interface EncryptionProgressProps {
    stage: UploadStage;
    step: ProgressStep;
    progress: number;
    statusText: string;
}

const steps = [
    { id: "keys", label: "Generating Keys", icon: Key },
    { id: "metadata", label: "Encrypting Metadata", icon: FileText },
    { id: "transfer", label: "Encrypting & Uploading", icon: Upload },
    { id: "done", label: "Complete", icon: CheckCircle },
];

export function EncryptionProgress({ stage, step, progress, statusText }: EncryptionProgressProps) {
    const currentStepIndex = steps.findIndex((s) => s.id === step);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-md mx-auto text-center px-4"
        >
            {/* Animated Lock Icon */}
            <motion.div
                animate={{
                    rotate: stage === "encrypting" ? [0, 10, -10, 0] : 0,
                    scale: stage === "success" ? [1, 1.2, 1] : 1
                }}
                transition={{
                    duration: 0.5,
                    repeat: stage === "encrypting" ? Infinity : 0,
                    repeatDelay: 1
                }}
                className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 relative"
            >
                <div className={`w-full h-full rounded-2xl flex items-center justify-center ${stage === "success"
                    ? 'bg-primary/20 border-2 border-primary'
                    : 'bg-zinc-800 border border-zinc-700'
                    }`}>
                    {stage === "success" ? (
                        <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                    ) : (
                        <Lock className="w-8 h-8 md:w-10 md:h-10 text-primary animate-pulse" />
                    )}
                </div>

                {/* Orbiting particles */}
                {stage !== "success" && (
                    <>
                        {[0, 1, 2].map((i) => (
                            <motion.div
                                key={i}
                                className="absolute w-2 h-2 bg-primary rounded-full"
                                animate={{
                                    x: [0, 40, 0, -40, 0],
                                    y: [-40, 0, 40, 0, -40],
                                    opacity: [0.3, 1, 0.3],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    delay: i * 1,
                                    ease: "easeInOut",
                                }}
                                style={{ top: "50%", left: "50%", marginLeft: -4, marginTop: -4 }}
                            />
                        ))}
                    </>
                )}
            </motion.div>

            {/* Status Text */}
            <motion.h3
                key={statusText}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-lg md:text-xl font-bold mb-2 font-mono break-words line-clamp-2 min-h-[3.5rem] flex items-center justify-center"
            >
                {statusText}
            </motion.h3>

            {/* Progress Bar */}
            <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden mb-6">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-primary via-emerald-400 to-primary rounded-full"
                    style={{
                        backgroundSize: "200% 100%",
                        animation: "shimmer 2s linear infinite",
                    }}
                />
            </div>

            {/* Progress Percentage */}
            <div className="text-3xl md:text-4xl font-mono font-bold text-primary mb-8">
                {Math.round(progress)}%
            </div>

            {/* Step Indicators */}
            <div className="space-y-2 text-left bg-zinc-900/50 p-4 rounded-xl">
                {steps.map((s, index) => {
                    const isActive = s.id === step;
                    const isCompleted = index < currentStepIndex;
                    const isPending = index > currentStepIndex;
                    const StepIcon = s.icon;

                    return (
                        <motion.div
                            key={s.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`progress-step ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''} ${isPending ? 'pending' : ''}`}
                        >
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${isCompleted ? 'bg-primary/20' : isActive ? 'bg-primary/10' : 'bg-zinc-800'
                                }`}>
                                {isCompleted ? (
                                    <CheckCircle className="w-4 h-4 text-primary" />
                                ) : isActive ? (
                                    <Loader2 className="w-4 h-4 text-primary animate-spin" />
                                ) : (
                                    <StepIcon className="w-3 h-3" />
                                )}
                            </div>
                            <span className="text-xs md:text-sm font-mono truncate">{s.label}</span>
                        </motion.div>
                    );
                })}
            </div>

            {/* Matrix-style decoration */}
            <div className="mt-8 font-mono text-[10px] text-primary/30 overflow-hidden">
                <motion.div
                    animate={{ y: [-20, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                    {Array.from({ length: 3 }, (_, i) => (
                        <div key={i} className="opacity-50">
                            {Array.from({ length: 40 }, () =>
                                String.fromCharCode(33 + Math.floor(Math.random() * 94))
                            ).join('')}
                        </div>
                    ))}
                </motion.div>
            </div>

            <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
        </motion.div>
    );
}
