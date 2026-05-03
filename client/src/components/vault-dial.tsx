import React from 'react';
import { motion } from 'framer-motion';

export const VaultDial: React.FC = () => {
  const hexValues = ['00', '1F', '3E', '5D', '7C', '9B', 'BA', 'D9', 'F8', '17', '36', '55'];
  
  return (
    <div className="relative w-[400px] h-[400px] flex items-center justify-center opacity-40">
      {/* Outer Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-3xl shadow-[0_0_50px_rgba(16,185,129,0.1)]"
      />
      
      {/* Middle Ring with Hex Values */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
        className="absolute w-[85%] h-[85%] rounded-full border border-white/10"
      >
        {hexValues.map((hex, i) => (
          <div
            key={i}
            className="absolute top-0 left-1/2 -translate-x-1/2 h-full py-4 flex flex-col items-center justify-start"
            style={{ transform: `rotate(${i * (360 / hexValues.length)}deg)` }}
          >
            <span className="text-[10px] font-mono text-primary/40 font-bold">{hex}</span>
            <div className="w-[1px] h-2 bg-primary/20 mt-1" />
          </div>
        ))}
      </motion.div>
      
      {/* Inner Dial */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute w-[60%] h-[60%] rounded-full border-2 border-primary/30 flex items-center justify-center bg-zinc-900/50"
      >
        <div className="w-1 h-1/2 bg-gradient-to-b from-primary to-transparent absolute top-0 rounded-full" />
        
        {/* The "Knob" */}
        <div className="w-16 h-16 rounded-full bg-zinc-800 border border-white/10 shadow-inner flex items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/40 animate-pulse" />
        </div>
      </motion.div>
      
      {/* Decorative Ticks on the Outer Edge */}
      <div className="absolute inset-[-20px] rounded-full border border-white/5" />
    </div>
  );
};