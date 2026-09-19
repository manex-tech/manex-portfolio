import { NextRequest, NextResponse } from "next/server";
import { env } from "cloudflare:workers";
import { eq } from "drizzle-orm";
import { getChatGPTUser } from "@/app/chatgpt-auth";
import { getDb } from "@/db";
import { photos } from "@/db/schema";
export const dynamic = "force-dynamic";
type Bindings = { ADMIN_EMAIL?: string; BUCKET?: R2Bucket };
export async function GET(_: NextRequest, { params }: { params: Promise<{ id: string }> }) { const { id } = await params; const [photo] = await getDb().select().from(photos).where(eq(photos.id,id)).limit(1); if (!photo) return new NextResponse(null,{status:404}); const object = await (env as unknown as Bindings).BUCKET?.get(photo.objectKey); if (!object) return new NextResponse(null,{status:404}); return new NextResponse(object.body,{headers:{"content-type":photo.contentType,"cache-control":"public, max-age=31536000, immutable"}}); }
export async function DELETE(_: NextRequest, { params }: { params: Promise<{ id: string }> }) { const user=await getChatGPTUser(); const admin=(env as unknown as Bindings).ADMIN_EMAIL?.toLowerCase(); if(!user||!admin||user.email.toLowerCase()!==admin) return NextResponse.json({error:"Not authorised."},{status:403}); const {id}=await params; const [photo]=await getDb().select().from(photos).where(eq(photos.id,id)).limit(1); if(!photo) return NextResponse.json({error:"Not found."},{status:404}); await (env as unknown as Bindings).BUCKET?.delete(photo.objectKey); await getDb().delete(photos).where(eq(photos.id,id)); return NextResponse.json({ok:true}); }
