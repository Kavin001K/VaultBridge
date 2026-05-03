import React from 'react';
import { cn } from '@/lib/utils';

// Crypto-themed avatar icons with deterministic generation
const AVATAR_ICONS = [
  '🔐', // Ghost Key
  '💎', // Cipher Gem
  '🌑', // Dark Vault
  '⚡', // Zap Node
  '🛡️',  // Shield
  '🔮', // Hex Orb
] as const;

interface VaultAvatarProps {
  shortCode: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function VaultAvatar({ shortCode, className, size = 'md' }: VaultAvatarProps) {
  // Deterministic avatar selection based on short code
  const avatarIndex = parseInt(shortCode, 36) % AVATAR_ICONS.length;
  const icon = AVATAR_ICONS[avatarIndex];

  const sizeClasses = {
    sm: 'w-8 h-8 text-lg',
    md: 'w-12 h-12 text-2xl',
    lg: 'w-16 h-16 text-3xl',
  };

  return (
    <div
      className={cn(
        'flex items-center justify-center rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:border-primary/50',
        sizeClasses[size],
        className
      )}
      title={`Vault ${shortCode}`}
    >
      {icon}
    </div>
  );
}