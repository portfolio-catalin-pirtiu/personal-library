import { postAuthor } from '../../../../lib/postData';
import { NextRequest, NextResponse } from 'next/server';

function GET(req: NextRequest, res: NextResponse) {
  NextResponse.json({ data: 'hello' });
  console.log('api GET');
}
