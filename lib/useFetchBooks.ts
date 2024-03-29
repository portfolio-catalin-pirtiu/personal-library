import { useState, useEffect } from 'react';
import { IBookWithAuthor } from './definitions';

interface DBResponse {
  books: IBookWithAuthor[];
}

async function fetchBooks(url: string) {
  const res = await fetch(url, {
    cache: 'reload',
  });

  if (!res.ok) {
    throw new Error('An error occurred while fetching the books.');
  }
  const { books }: DBResponse = await res.json();
  return books;
}

export default function useFetchBooks(url: string) {
  const [books, setBooks] = useState<IBookWithAuthor[]>([]);

  useEffect(() => {
    (async () => {
      setBooks(await fetchBooks(url));
    })();
  }, [url]);

  return {
    books,
    setBooks,
  };
}
