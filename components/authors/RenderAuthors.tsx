import styled from 'styled-components';
import Author from './Author';
import { IDbAuthor } from '../../lib/definitions';

const Wrapper = styled.ul``;

interface IRenderAuthors {
  authors: IDbAuthor[];
}

export default function RenderAuthors({ authors }: IRenderAuthors) {
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
