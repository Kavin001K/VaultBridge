import { NodeSDK } from "@opentelemetry/sdk-node";
import { getNodeAutoInstrumentations } from "@opentelemetry/auto-instrumentations-node";
import { Resource } from "@opentelemetry/resources";
import { SemanticResourceAttributes } from "@opentelemetry/semantic-conventions";
import { diag, DiagConsoleLogger, DiagLogLevel } from "@opentelemetry/api";

const sdk = new NodeSDK({
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: "vaultbridge-server",
    [SemanticResourceAttributes.DEPLOYMENT_ENVIRONMENT]: process.env.NODE_ENV || "development",
  }),
  instrumentations: [getNodeAutoInstrumentations()],
});

export async function initializeTracing(): Promise<void> {
  if (process.env.NODE_ENV === "test") return;
  diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.ERROR);
  await sdk.start();
}

export async function shutdownTracing(): Promise<void> {
  await sdk.shutdown();
}
