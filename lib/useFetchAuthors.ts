import { useState, useEffect } from 'react';
import { IAuthor } from './definitions';

async function fetchAuthors(url: string): Promise<IAuthor[]> {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('An error occurred while fetching the authors.');
  }
  return await res.json();
}

export default function useFetchAuthors(url: string) {
  const [authors, setAuthors] = useState<IAuthor[]>([]);

  useEffect(() => {
    (async () => {
      setAuthors(await fetchAuthors(url));
    })();
  });

  return {
    authors: authors,
    setAuthors: setAuthors,
  };
}
