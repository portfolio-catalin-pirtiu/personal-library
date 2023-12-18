import styled from 'styled-components';
import { useState } from 'react';
import useFetchAuthors from '../../lib/useFetchAuthors';
import Search from '../../components/shared/Search';
import RenderAuthors from '../../components/authors/RenderAuthors';

const Wrapper = styled.div``;

export default function Authors() {
  let apiUrl = '/api/authors/';
  const [searchAuthor, setSearchAuthor] = useState('');

  if (searchAuthor !== '') {
    apiUrl = apiUrl + `?author=${searchAuthor}`;
  }

  const { authors } = useFetchAuthors(apiUrl);
  return (
    <Wrapper>
      <h1>Authors Page</h1>
      <Search
        input={searchAuthor}
        setInput={setSearchAuthor}
        label="Author"
        placeholder="Search"
      />
      <RenderAuthors authors={authors} />
    </Wrapper>
  );
}
