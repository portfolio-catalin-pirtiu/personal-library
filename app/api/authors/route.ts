import { getAuthors } from '../../../lib/fetchData';
import { NextResponse, NextRequest } from 'next/server';

export async function GET(res: NextRequest) {
  const searchAuthor = res.nextUrl.searchParams.get('author');

  try {
    const authors = await getAuthors(searchAuthor);
    return NextResponse.json({ authors: authors }, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { name: error.name, message: error.message },
        { status: 500 }
      );
    }
  }
}
