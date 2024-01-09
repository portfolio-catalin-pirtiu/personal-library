import { useState, useEffect } from 'react';
import { IDbBook } from './definitions';

interface DbResponse {
  books: IDbBook[];
}

async function fetchBooks(url: string) {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error('An error occurred while fetching the books.');
  }
  const { books }: DbResponse = await res.json();
  return books;
}

export default function useFetchBooks(url: string) {
  const [books, setBooks] = useState<IDbBook[]>([]);

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
