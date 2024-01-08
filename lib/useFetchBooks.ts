import { useState, useEffect } from 'react';
import { IDbBook } from './definitions';

async function fetchBooks(url: string) {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error('An error occurred while fetching the books.');
  }
  
}

export default function useFetchBooks(url: string) {
  const [books, setBooks] = useState<IDbBook[]>([]);
}
