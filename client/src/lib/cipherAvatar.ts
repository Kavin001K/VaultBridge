/**
 * Deterministic Identity Avatars for VaultBridge V2
 * Converts a vault's shortCode or ID into a stable, high-fidelity identity.
 */

export const IDENTITIES = [
  { name: "Nebula", color: "from-purple-500 to-indigo-600", icon: "🌌" },
  { name: "Cypher", color: "from-cyan-400 to-blue-600", icon: "🛡️" },
  { name: "Phoenix", color: "from-orange-500 to-rose-600", icon: "🔥" },
  { name: "Titan", color: "from-zinc-400 to-zinc-600", icon: "🏗️" },
  { name: "Aegis", color: "from-emerald-400 to-teal-600", icon: "⚔️" },
  { name: "Solaris", color: "from-amber-400 to-orange-500", icon: "☀️" },
  { name: "Ghost", color: "from-slate-300 to-slate-500", icon: "👻" },
  { name: "Nova", color: "from-rose-400 to-fuchsia-600", icon: "✨" },
];

/**
 * Returns a deterministic identity based on the vault's shortCode.
 * This ensures the same vault always has the same "visual name" and style.
 */
export function getVaultIdentity(shortCode: string) {
  if (!shortCode) return IDENTITIES[0];
  
  // Convert alphanumeric short code to a stable numeric index
  // Use a simple rolling sum for reliability
  let hash = 0;
  for (let i = 0; i < shortCode.length; i++) {
    hash = (hash << 5) - hash + shortCode.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }
  
  const index = Math.abs(hash) % IDENTITIES.length;
  return IDENTITIES[index];
}
