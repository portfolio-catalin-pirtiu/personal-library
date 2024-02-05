import { booksApiUrl } from './constants';
import toast from 'react-hot-toast';

export default async function updateBookReadingStatusDatabase(
  id: string = '',
  status: 'start' | 'stop' = 'start',
  timestamp: Date = new Date()
) {
  const url = `${booksApiUrl}/edit/reading/${status}/${id}`;
  const readingStatus = {
    [status]: timestamp,
  };
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(readingStatus),
    });
  } catch (error) {
    if (error instanceof Error) toast.error('Something went wrong');
  }
}
