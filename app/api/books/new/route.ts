import { NextRequest, NextResponse } from 'next/server';
import { IBook } from '../../../../lib/definitions';
import { postBook } from '../../../../lib/postData';

export async function POST(req: NextRequest) {
  const book: IBook = await req.json();

  try {
    await postBook(book);
    return NextResponse.json({ status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          name: error.name,
          message: error.message,
        },
        { status: 500 }
      );
    }
  }
}
