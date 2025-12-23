// Load environment variables first, before any other imports
// This ensures DATABASE_URL is available when this module is imported
import { config } from "dotenv";
import { resolve } from "node:path";
import { existsSync } from "node:fs";

// Load .env.local first (highest priority), then .env as fallback
const envLocalPath = resolve(process.cwd(), ".env.local");
const envPath = resolve(process.cwd(), ".env");

// Load .env.local if it exists
if (existsSync(envLocalPath)) {
  config({ path: envLocalPath, override: false });
}
// Always try .env as fallback (won't override .env.local values)
if (existsSync(envPath)) {
  config({ path: envPath, override: false });
}
// Also try default locations
config({ override: false });

import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "@shared/schema";

if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL must be set. Did you forget to provision a database?",
  );
}

// Use Neon HTTP driver for optimal serverless compatibility
// Works seamlessly on Vercel and locally
const sql = neon(process.env.DATABASE_URL);
export const db = drizzle(sql, { schema });
