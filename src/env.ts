import "dotenv/config";
import z from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]),
});

export type Env = z.infer<typeof envSchema>;

export const env = envSchema.parse(process.env);
