import { NextRequest, NextResponse } from 'next/server';
import { getBooks } from '../../../lib/fetchData';

export async function GET(req: NextRequest) {
  const search = req.nextUrl.searchParams.get('book-or-author');

  try {
    const books = await getBooks(search);
    return NextResponse.json({ books: books }, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { name: error.name, message: error.message },
        { status: 500 }
      );
    }
  }
}
