import { useState, useEffect } from 'react';
import { IDbBook, IBookWithAuthor } from './definitions';

interface DBResponse {
  books: IBookWithAuthor[];
}

async function fetchBooks(url: string) {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error('An error occurred while fetching the books.');
  }
  const { books }: DBResponse = await res.json();
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
