import { storage } from "./storage";
import { sendVaultEmail } from "./services/email";
import { logger } from "./logger";

export type JobPayload =
  | { type: "deleteVault"; vaultId: string }
  | { type: "sendVaultEmail"; payload: Parameters<typeof sendVaultEmail>[0] };

const queue: JobPayload[] = [];
let processing = false;

async function processQueue(): Promise<void> {
  if (processing) return;
  processing = true;

  while (queue.length > 0) {
    const job = queue.shift();
    if (!job) continue;

    try {
      switch (job.type) {
        case "deleteVault":
          logger.info({ job: "deleteVault", vaultId: job.vaultId }, "Processing vault deletion job");
          await storage.deleteVault(job.vaultId);
          logger.info({ job: "deleteVault", vaultId: job.vaultId }, "Vault deletion completed");
          break;
        case "sendVaultEmail":
          logger.info({ job: "sendVaultEmail", to: job.payload.to, vaultId: job.payload.vaultId }, "Processing queued vault email");
          await sendVaultEmail(job.payload);
          logger.info({ job: "sendVaultEmail", to: job.payload.to, vaultId: job.payload.vaultId }, "Queued vault email sent");
          break;
        default:
          logger.warn({ job }, "Unknown queued job type");
      }
    } catch (error) {
      logger.error({ err: error, job }, "Queued job failed");
    }
  }

  processing = false;
}

export function enqueueJob(job: JobPayload): void {
  queue.push(job);
  void processQueue();
}

export function getPendingJobCount(): number {
  return queue.length;
}
