import { getTopTracks } from '@/lib/spotify';
import { NextResponse } from 'next/server';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  const tracks = await getTopTracks();
  return NextResponse.json(tracks, { status: 200 });
}
