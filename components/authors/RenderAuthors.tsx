import styled from 'styled-components';
import Author from './Author';
import { IDbAuthor } from '../../lib/definitions';

const Wrapper = styled.ul``;

interface IRenderAuthors {
  authors: IDbAuthor[];
  onEditAuthor: (editedAuthor: IDbAuthor) => void;
  onDeleteAuthor: (id: string) => void;
  onEditAuthorDatabaseUpdate: (editedAuthor: IDbAuthor) => void;
  onDeleteAuthorDatabaseUpdate: (id: string) => void;
}

export default function RenderAuthors({
  authors,
  onEditAuthor,
  onDeleteAuthor,
  onEditAuthorDatabaseUpdate,
  onDeleteAuthorDatabaseUpdate,
}: IRenderAuthors) {
  return (
    <Wrapper>
      {authors.map((author) => (
        <Author
          key={author.id}
          author={author}
          handleEditAuthor={onEditAuthor}
          handleDeleteAuthor={onDeleteAuthor}
          handleEditAuthorDatabaseUpdate={onEditAuthorDatabaseUpdate}
          handleDeleteAuthorDatabaseUpdate={onDeleteAuthorDatabaseUpdate}
        />
      ))}
    </Wrapper>
  );
}
