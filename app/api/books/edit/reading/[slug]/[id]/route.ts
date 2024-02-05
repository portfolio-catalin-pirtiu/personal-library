import { NextRequest, NextResponse } from 'next/server';
import { IUpdateBookReadingStatusDatabase } from '../../../../../../../lib/definitions';

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const bookId = params.id;
  const book: IUpdateBookReadingStatusDatabase = await req.json();
  console.log('start stop book reading -> body', book);
}
