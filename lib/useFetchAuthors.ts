import { useState, useEffect } from 'react';
import { IDbAuthor } from './definitions';

interface DbResponse {
  authors: IDbAuthor[];
}

async function fetchAuthors(url: string): Promise<IDbAuthor[]> {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('An error occurred while fetching the authors.');
  }
  const { authors }: DbResponse = await res.json();
  return authors;
}

export default function useFetchAuthors(url: string) {
  const [authors, setAuthors] = useState<IDbAuthor[]>([]);

  useEffect(() => {
    (async () => {
      setAuthors(await fetchAuthors(url));
    })();
  }, [url]);

  return {
    authors: authors,
    setAuthors: setAuthors,
  };
}
