import { NextRequest, NextResponse } from 'next/server';

interface BookReadingStatus {
  timestamp: string;
}

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string; slug: 'start' | 'stop' } }
) {
  console.log('POST start reading');
  const book: BookReadingStatus = await req.json();
  console.log('params', params);
  console.log('start stop book reading -> body', book.timestamp);
}
