import styled from 'styled-components';
import Author from './Author';
import { IDbAuthor } from '../../lib/definitions';

const Wrapper = styled.ul``;

interface IRenderAuthors {
  authors: IDbAuthor[];
  onEditAuthor: (editedAuthor: IDbAuthor) => void;
  onDeleteAuthor: (id: string) => void;
}

export default function RenderAuthors({
  authors,
  onEditAuthor,
  onDeleteAuthor,
}: IRenderAuthors) {
  return (
    <Wrapper>
      {authors.map((author) => (
        <Author
          key={author.id}
          author={author}
          handleEditAuthor={onEditAuthor}
          handleDeleteAuthor={onDeleteAuthor}
        />
      ))}
    </Wrapper>
  );
}
