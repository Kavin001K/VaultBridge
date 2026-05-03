import pino from "pino";
import pinoHttp from "pino-http";

const isProduction = process.env.NODE_ENV === "production";

export const logger = pino({
  level: process.env.LOG_LEVEL || (isProduction ? "info" : "debug"),
  base: {
    service: "vaultbridge-server",
    env: process.env.NODE_ENV || "development",
  },
  timestamp: pino.stdTimeFunctions.isoTime,
});

export const httpLogger = pinoHttp({
  logger,
  autoLogging: {
    ignore: (req, res) => req.path.startsWith("/health"),
  },
  customLogLevel: (res, err) => {
    if (res.statusCode >= 500 || err) return "error";
    if (res.statusCode >= 400) return "warn";
    return "info";
  },
});

export function log(message: string, source = "app") {
  logger.info({ source }, message);
}
