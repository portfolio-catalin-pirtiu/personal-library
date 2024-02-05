import { NextRequest, NextResponse } from 'next/server';

interface BookReadingStatus {
  timestamp: string;
}

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string; slug: 'start' | 'stop' } }
) {
  const book: BookReadingStatus = await req.json();
}
