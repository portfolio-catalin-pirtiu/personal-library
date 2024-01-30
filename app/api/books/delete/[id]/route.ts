import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await sql`DELETE FROM books WHERE book_id = ${params.id}`;
    return NextResponse.json({ status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { name: error.name, message: error.message },
        { status: 500 }
      );
    }
    return NextResponse.json({ status: 500 });
  }
}
