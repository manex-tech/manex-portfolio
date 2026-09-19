import { NextRequest, NextResponse } from "next/server";
import { env } from "cloudflare:workers";
import { getChatGPTUser } from "@/app/chatgpt-auth";
import { getDb } from "@/db";
import { photos } from "@/db/schema";

export const dynamic = "force-dynamic";
type Bindings = { ADMIN_EMAIL?: string; BUCKET?: R2Bucket };
async function isAdmin() { const user = await getChatGPTUser(); const email = (env as unknown as Bindings).ADMIN_EMAIL?.toLowerCase(); return Boolean(user && email && user.email.toLowerCase() === email); }
export async function POST(request: NextRequest) {
  if (!(await isAdmin())) return NextResponse.json({ error: "Not authorised." }, { status: 403 });
  const bucket = (env as unknown as Bindings).BUCKET; if (!bucket) return NextResponse.json({ error: "Photo storage is unavailable." }, { status: 503 });
  const form = await request.formData(); const file = form.get("image"); const caption = String(form.get("caption") || "").trim(); const alt = String(form.get("alt") || "").trim(); const year = String(form.get("year") || "").trim();
  if (!(file instanceof File) || !["image/jpeg","image/png","image/webp"].includes(file.type) || file.size > 8_000_000) return NextResponse.json({ error: "Choose a JPEG, PNG or WebP smaller than 8 MB." }, { status: 400 });
  if (!caption || !alt || !/^\d{4}$/.test(year)) return NextResponse.json({ error: "Complete the caption, alternative text and year." }, { status: 400 });
  const id = crypto.randomUUID(); const ext = file.type === "image/png" ? "png" : file.type === "image/webp" ? "webp" : "jpg"; const objectKey = `journal/${id}.${ext}`;
  await bucket.put(objectKey, await file.arrayBuffer(), { httpMetadata: { contentType: file.type, cacheControl: "public, max-age=31536000, immutable" } });
  try { await getDb().insert(photos).values({ id, objectKey, alt, caption, year, contentType: file.type, createdAt: new Date() }); }
  catch { await bucket.delete(objectKey); return NextResponse.json({ error: "The photograph could not be saved." }, { status: 500 }); }
  return NextResponse.json({ photo: { id, alt, caption, year } }, { status: 201 });
}
