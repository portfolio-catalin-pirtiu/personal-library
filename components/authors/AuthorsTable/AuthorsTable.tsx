import styled from 'styled-components';
import Author from './Author';
import { IDbAuthor } from '../../../lib/definitions';
import { TableData, TableRow } from './shared/tableComponents';

const Table = styled.table`
  border-collapse: collapse;
  border: transparent;
  margin: auto;
  margin-top: 5rem;
`;
const TableHead = styled.thead``;
const TableBody = styled.tbody``;

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
