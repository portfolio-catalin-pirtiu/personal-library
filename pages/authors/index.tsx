import { useState } from 'react';
import styled from 'styled-components';
import RenderAuthors from '../../components/authors/RenderAuthors';

let apiUrl = '/api/authors/';

const Wrapper = styled.div``;

export default function Authors() {
  const [searchAuthor, setSearchAuthor] = useState('');

  if (searchAuthor !== '') {
    apiUrl = apiUrl + `?author=${searchAuthor}`;
  }

  return (
    <Wrapper>
      <h1>Authors Page</h1>;
      <RenderAuthors url={apiUrl} />
    </Wrapper>
  );
}
