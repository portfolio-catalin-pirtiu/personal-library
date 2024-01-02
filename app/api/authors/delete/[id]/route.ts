import { sql } from '@vercel/postgres';
import { IAuthor } from '../../../../../lib/definitions';
import { NextResponse, NextRequest } from 'next/server';

export async function DELETE(
  res: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  try {
    await sql`DELETE FROM authors WHERE id = ${id}`;
    return NextResponse.json({status: 200});
  } catch (error) {
    const dbError = await error;
    if(dbError instanceof Error) {
      return NextResponse.json({
        name: dbError.name
      })
    }
  }
}
