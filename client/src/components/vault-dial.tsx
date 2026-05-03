import React from 'react';

interface VaultDialProps {
  className?: string;
  size?: number;
}

export function VaultDial({ className = '', size = 200 }: VaultDialProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={`vault-dial ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer ring */}
      <circle
        cx="100"
        cy="100"
        r="90"
        fill="none"
        stroke="url(#dialGradient)"
        strokeWidth="4"
        className="animate-spin"
        style={{ animationDuration: '20s' }}
      />

      {/* Inner dial face */}
      <circle
        cx="100"
        cy="100"
        r="70"
        fill="url(#faceGradient)"
        stroke="#1f2937"
        strokeWidth="2"
      />

      {/* Vault handle */}
      <g className="animate-pulse">
        <rect
          x="95"
          y="30"
          width="10"
          height="40"
          rx="5"
          fill="url(#handleGradient)"
          className="origin-bottom animate-bounce"
          style={{ animationDuration: '3s' }}
        />
        <circle
          cx="100"
          cy="25"
          r="8"
          fill="#fbbf24"
          className="animate-ping"
          style={{ animationDuration: '2s' }}
        />
      </g>

      {/* Dial markings */}
      {Array.from({ length: 12 }, (_, i) => {
        const angle = (i * 30) - 90;
        const rad = angle * (Math.PI / 180);
        const x1 = 100 + 50 * Math.cos(rad);
        const y1 = 100 + 50 * Math.sin(rad);
        const x2 = 100 + 60 * Math.cos(rad);
        const y2 = 100 + 60 * Math.sin(rad);

        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#374151"
            strokeWidth="2"
            className={i % 3 === 0 ? 'stroke-primary' : ''}
          />
        );
      })}

      {/* Center lock */}
      <g className="animate-pulse">
        <rect
          x="85"
          y="85"
          width="30"
          height="20"
          rx="15"
          fill="url(#lockGradient)"
        />
        <rect
          x="92"
          y="92"
          width="16"
          height="10"
          rx="8"
          fill="#1f2937"
        />
        <circle
          cx="100"
          cy="97"
          r="3"
          fill="#fbbf24"
        />
      </g>

      {/* Gradients */}
      <defs>
        <radialGradient id="dialGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="50%" stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#1f2937" />
        </radialGradient>

        <radialGradient id="faceGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#111827" />
          <stop offset="100%" stopColor="#374151" />
        </radialGradient>

        <linearGradient id="handleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="50%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>

        <linearGradient id="lockGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6b7280" />
          <stop offset="50%" stopColor="#4b5563" />
          <stop offset="100%" stopColor="#374151" />
        </linearGradient>
      </defs>
    </svg>
  );
}