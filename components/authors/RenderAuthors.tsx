import styled from 'styled-components';
import Author from './Author';
import { IDbAuthor } from '../../lib/definitions';

const Wrapper = styled.ul``;

interface IRenderAuthors {
  authors: IDbAuthor[];
  onEditAuthor: (editedAuthor: IDbAuthor) => void;
}

export default function RenderAuthors({
  authors,
  onEditAuthor,
}: IRenderAuthors) {
  return (
    <Wrapper>
      {authors.map((author) => (
        <Author
          key={author.id}
          author={author}
          handleEditAuthor={onEditAuthor}
        />
      ))}
    </Wrapper>
  );
}
