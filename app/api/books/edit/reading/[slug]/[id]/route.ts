import { NextRequest, NextResponse } from 'next/server';
import { postStartStopReading } from '../../../../../../../lib/putData';

interface BookReadingStatus {
  timestamp: string;
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string; slug: 'start' | 'stop' } }
) {
  const book: BookReadingStatus = await req.json();
  await postStartStopReading({ ...params, timestamp: book.timestamp });
}
