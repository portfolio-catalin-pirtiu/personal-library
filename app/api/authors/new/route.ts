import { postAuthor } from '../../../../lib/postData';
import { NextRequest, NextResponse } from 'next/server';
import { IAuthor } from '../../../../lib/definitions';

export async function POST(req: NextRequest) {
  const newAuthor: IAuthor = await req.json();

  try {
    await postAuthor(newAuthor);
    return NextResponse.json({ status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(error);
    }
  }
}
