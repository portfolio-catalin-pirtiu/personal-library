import styled from 'styled-components';
import useFetchAuthors from '../../lib/useFetchAuthors';
import Author from './Author';

const Wrapper = styled.ul``;

interface IRenderAuthors {
  url: string;
}

export default function RenderAuthors({ url }: IRenderAuthors) {
  const { authors } = useFetchAuthors(url);

  return (
    <Wrapper>
      {authors.map((author) => (
        <Author
          key={author.id}
          first_name={author.first_name}
          last_name={author.last_name}
        />
      ))}
    </Wrapper>
  );
}
