import { NextRequest, NextResponse } from 'next/server';
import { IAuthor } from '../../../../../lib/definitions';
import { putAuthor } from '../../../../../lib/putData';

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const author: IAuthor = await req.json();

  try {
    await putAuthor(author, id);
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
