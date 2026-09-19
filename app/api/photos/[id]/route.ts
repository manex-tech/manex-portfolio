import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
export async function GET() { return new NextResponse(null, { status: 404 }); }
export async function DELETE() { return NextResponse.json({ error: "Photo management requires a storage provider on this deployment." }, { status: 503 }); }
