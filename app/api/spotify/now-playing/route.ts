import { getNowPlaying } from '@/lib/spotify';
import { NextResponse } from 'next/server';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  const response = await getNowPlaying();

  if (!response.isPlaying) {
    return NextResponse.json({ isPlaying: false }, { status: 200 });
  }

  return NextResponse.json(response, { status: 200 });
}
