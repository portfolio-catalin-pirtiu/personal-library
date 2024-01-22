import { NextRequest, NextResponse } from 'next/server';

export default function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
}
