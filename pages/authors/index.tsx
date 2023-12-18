import styled from 'styled-components';
import { useState } from 'react';
import useFetchAuthors from '../../lib/useFetchAuthors';
import RenderAuthors from '../../components/authors/RenderAuthors';

let apiUrl = '/api/authors/';

const Wrapper = styled.div``;

export default function Authors() {
  const { authors } = useFetchAuthors(apiUrl);
  const [searchAuthor, setSearchAuthor] = useState('');

  if (searchAuthor !== '') {
    apiUrl = apiUrl + `?author=${searchAuthor}`;
  }

  return (
    <Wrapper>
      <h1>Authors Page</h1>
      <RenderAuthors authors={authors} />
    </Wrapper>
  );
}
