import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';
import { IAuthor } from '../../../../../lib/definitions';

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const author: IAuthor = await req.json();
}
