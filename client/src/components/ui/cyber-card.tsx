import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface CyberCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'accent' | 'destructive';
  glow?: boolean;
}

export const CyberCard = React.forwardRef<HTMLDivElement, CyberCardProps>(
  ({ className, children, variant = 'default', glow = true, ...props }, ref) => {
    const variants = {
      default: 'border-white/5 bg-white/[0.02] hover:border-white/10',
      primary: 'border-primary/20 bg-primary/[0.02] hover:border-primary/40',
      accent: 'border-accent/20 bg-accent/[0.02] hover:border-accent/40',
      destructive: 'border-destructive/20 bg-destructive/[0.02] hover:border-destructive/40',
    };

    const glowColors = {
      default: 'rgba(255, 255, 255, 0.05)',
      primary: 'rgba(16, 185, 129, 0.1)',
      accent: 'rgba(14, 165, 233, 0.1)',
      destructive: 'rgba(244, 63, 94, 0.1)',
    };

    return (
      <motion.div
        ref={ref}
        whileHover={glow ? { boxShadow: `0 0 40px ${glowColors[variant]}` } : {}}
        className={cn(
          'relative rounded-[2rem] border backdrop-blur-2xl transition-all duration-500 overflow-hidden',
          variants[variant],
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
        <div className="relative z-10">{children}</div>
      </motion.div>
    );
  }
);

CyberCard.displayName = 'CyberCard';
