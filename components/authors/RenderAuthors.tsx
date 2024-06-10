import styled from 'styled-components';
import Author from './Author';
import { IDbAuthor } from '../../lib/definitions';
import AuthorsTableHeader from './AuthorsTableHeader';

const Wrapper = styled.div`
  margin-top: 5rem;
`;

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
      <AuthorsTableHeader />
      <hr />
      {authors.map((author) => (
        <>
          <Author
            key={author.author_id}
            author={author}
            handleEditAuthor={onEditAuthor}
            handleDeleteAuthor={onDeleteAuthor}
            handleEditAuthorDatabaseUpdate={onEditAuthorDatabaseUpdate}
            handleDeleteAuthorDatabaseUpdate={onDeleteAuthorDatabaseUpdate}
          />
          <hr />
        </>
      ))}
    </Wrapper>
  );
}
