import { z } from "zod"

export const CommonConfigSchema = z.object({
  BASE_URL: z.string().url(),
  DEV_MODE: z
    .string()
    .optional()
    .transform((value) => value === "true"),
  isClient: z.boolean(),
  appVersion: z.string(),
})

export const ServerConfigSchema = z.object({
  // ... any server-specific properties
})
