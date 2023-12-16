import { useState } from 'react';

let apiUrl = '/api/authors/';

export default function Authors() {
  const [searchAuthor, setSearchAuthor] = useState('');

  if (searchAuthor !== '') {
    apiUrl = apiUrl + `?author=${searchAuthor}`;
  }

  return <h1>Authors Page</h1>;
}
