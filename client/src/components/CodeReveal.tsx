import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, KeyRound, ArrowRight, ShieldCheck } from 'lucide-react';

interface CodeRevealProps {
    value: string;
    onChange: (value: string) => void;
    onComplete?: (value: string) => void;
    disabled?: boolean;
    error?: boolean;
}

export const CodeReveal: React.FC<CodeRevealProps> = ({
    value,
    onChange,
    onComplete,
    disabled = false,
    error = false
}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [focused, setFocused] = useState(false);
    
    // The code is 8 chars: 3 for lookup, 5 for PIN
    const chars = value.split('').concat(Array(8 - value.length).fill(''));

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value.replace(/[^a-zA-Z0-9]/g, '').toUpperCase().slice(0, 8);
        onChange(val);
        if (val.length === 8 && onComplete) {
            onComplete(val);
        }
    };

    return (
        <div 
            className="relative flex flex-col items-center gap-6"
            onClick={() => inputRef.current?.focus()}
        >
            <input
                ref={inputRef}
                type="text"
                value={value}
                onChange={handleInput}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                className="absolute inset-0 opacity-0 cursor-default"
                disabled={disabled}
                autoFocus
            />

            <div className="flex items-center gap-2 sm:gap-3">
                {chars.map((char, i) => (
                    <React.Fragment key={i}>
                        {i === 3 && (
                            <div className="w-px h-10 bg-zinc-800 mx-1 sm:mx-2 self-center" />
                        )}
                        <motion.div
                            animate={{
                                scale: focused && value.length === i ? 1.1 : 1,
                                borderColor: error ? 'rgba(244, 63, 94, 0.5)' : (focused && value.length === i ? 'rgba(16, 185, 129, 0.5)' : 'rgba(39, 39, 42, 1)'),
                                backgroundColor: focused && value.length === i ? 'rgba(16, 185, 129, 0.05)' : 'rgba(9, 9, 11, 0.5)',
                            }}
                            className={`w-9 h-12 sm:w-12 sm:h-16 rounded-xl border-2 flex items-center justify-center text-xl sm:text-2xl font-mono font-bold transition-all ${char ? 'text-primary' : 'text-zinc-600'}`}
                        >
                            <AnimatePresence mode="wait">
                                {char ? (
                                    <motion.span
                                        key="char"
                                        initial={{ scale: 0, rotate: -20 }}
                                        animate={{ scale: 1, rotate: 0 }}
                                        exit={{ scale: 0 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                                    >
                                        {char}
                                    </motion.span>
                                ) : (
                                    <motion.div
                                        key="placeholder"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="w-1.5 h-1.5 rounded-full bg-zinc-800"
                                    />
                                )}
                            </AnimatePresence>
                            
                            {/* Cursor */}
                            {focused && value.length === i && (
                                <motion.div
                                    layoutId="cursor"
                                    className="absolute bottom-2 w-4 h-0.5 bg-primary"
                                    animate={{ opacity: [1, 0] }}
                                    transition={{ duration: 0.8, repeat: Infinity }}
                                />
                            )}
                        </motion.div>
                    </React.Fragment>
                ))}
            </div>

            <div className="flex items-center gap-8 text-[10px] uppercase tracking-[0.2em] font-bold">
                <div className={`flex items-center gap-2 ${value.length >= 3 ? 'text-primary' : 'text-zinc-600'}`}>
                    <ShieldCheck className="w-3 h-3" />
                    Lookup ID
                </div>
                <div className={`flex items-center gap-2 ${value.length === 8 ? 'text-cyan-400' : 'text-zinc-600'}`}>
                    <KeyRound className="w-3 h-3" />
                    Security PIN
                </div>
            </div>
        </div>
    );
};
