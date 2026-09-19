import { env } from "cloudflare:workers";
import { desc } from "drizzle-orm";
import { getDb } from "@/db";
import { photos } from "@/db/schema";
export type PublicPhoto = { id: string; alt: string; caption: string; year: string };
export async function getPhotos(): Promise<PublicPhoto[]> {
  try {
    if (!(env as unknown as { DB?: unknown }).DB) return [];
    return await getDb().select({ id: photos.id, alt: photos.alt, caption: photos.caption, year: photos.year }).from(photos).orderBy(desc(photos.createdAt));
  } catch { return []; }
}
