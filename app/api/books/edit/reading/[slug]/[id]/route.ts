import { NextRequest, NextResponse } from 'next/server';

export function POST(req: NextRequest, { params }: { params: { id: string } }) {
  const bookId = params.id;
}
