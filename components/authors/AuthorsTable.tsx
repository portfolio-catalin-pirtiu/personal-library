import styled from 'styled-components';
import Author from './Author';
import { IDbAuthor } from '../../lib/definitions';

const Table = styled.table`
  border-collapse: collapse;
  margin: auto;
  margin-top: 5rem;
`;
const TableHead = styled.thead``;
const TableBody = styled.tbody``;
const TableRow = styled.tr`
  border-bottom: 1px solid black;
`;
const TableData = styled.td`
`;

interface IRenderAuthors {
  authors: IDbAuthor[];
  onEditAuthor: (editedAuthor: IDbAuthor) => void;
  onDeleteAuthor: (id: string) => void;
  onEditAuthorDatabaseUpdate: (editedAuthor: IDbAuthor) => void;
  onDeleteAuthorDatabaseUpdate: (id: string) => void;
}

export default function AuthorsTable({
  authors,
  onEditAuthor,
  onDeleteAuthor,
  onEditAuthorDatabaseUpdate,
  onDeleteAuthorDatabaseUpdate,
}: IRenderAuthors) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableData>First Name</TableData>
          <TableData>Last Name</TableData>
          <TableData>Actions</TableData>
        </TableRow>
      </TableHead>

      <TableBody>
        {authors.map((author) => (
          <Author
            key={author.author_id}
            author={author}
            handleEditAuthor={onEditAuthor}
            handleDeleteAuthor={onDeleteAuthor}
            handleEditAuthorDatabaseUpdate={onEditAuthorDatabaseUpdate}
            handleDeleteAuthorDatabaseUpdate={onDeleteAuthorDatabaseUpdate}
          />
        ))}
      </TableBody>
    </Table>
  );
}
