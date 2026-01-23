import { motion } from "framer-motion";
import { Clock, Download, HardDrive } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

interface VaultCardProps {
  id: string;
  filesCount: number;
  totalSize: number;
  expiresAt: string;
  downloads: number;
  maxDownloads: number;
}

export function VaultCard({ filesCount, totalSize, expiresAt, downloads, maxDownloads }: VaultCardProps) {
  const timeLeft = formatDistanceToNow(new Date(expiresAt), { addSuffix: true });
  const isExpiringSoon = new Date(expiresAt).getTime() - Date.now() < 3600000; // 1 hour

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="cyber-card p-6 mb-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-full bg-secondary text-primary">
            <HardDrive className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground uppercase tracking-wider font-mono">Content</p>
            <p className="text-lg font-bold">{filesCount} Files</p>
            <p className="text-xs text-muted-foreground">{(totalSize / (1024 * 1024)).toFixed(2)} MB Total</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className={`p-3 rounded-full bg-secondary ${isExpiringSoon ? 'text-destructive' : 'text-primary'}`}>
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground uppercase tracking-wider font-mono">Expires</p>
            <p className={`text-lg font-bold ${isExpiringSoon ? 'text-destructive' : ''}`}>
              {timeLeft}
            </p>
            <p className="text-xs text-muted-foreground">Automatic deletion scheduled</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="p-3 rounded-full bg-secondary text-primary">
            <Download className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground uppercase tracking-wider font-mono">Downloads</p>
            <p className="text-lg font-bold">{downloads} / {maxDownloads}</p>
            <div className="w-full h-1.5 bg-secondary rounded-full mt-1 overflow-hidden">
              <div 
                className="h-full bg-primary transition-all duration-500" 
                style={{ width: `${(downloads / maxDownloads) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
