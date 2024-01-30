import { NextRequest, NextResponse } from 'next/server';
import { putBook } from '../../../../../lib/putData';
import { IBook } from '../../../../../lib/definitions';

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const book: IBook = await req.json();
  try {
    await putBook(book, id);
    return NextResponse.json({ status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { name: error.name, message: error.message },
        { status: 500 }
      );
    }
  }
}
