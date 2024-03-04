import { putRating } from '../../../../../../lib/putData';
import { NextRequest, NextResponse } from 'next/server';

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const rating: number = await req.json();
  try {
    await putRating(params.id, rating);
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
