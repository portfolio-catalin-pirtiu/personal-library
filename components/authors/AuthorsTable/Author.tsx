import styled from 'styled-components';
import Button from '../../shared/Button';
import { IDbAuthor } from '../../../lib/definitions';
import { useState } from 'react';
import { TableData } from './shared/tableComponents';

const TableRow = styled.tr``;
const FirstAndLastName = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4vmin;
`;
const EditAndDelete = styled.div``;
const EditFirstName = styled.input``;
const EditLastName = styled.input``;

let counter = 0;

interface IAuthorProps {
  author: IDbAuthor;
  handleEditAuthor: (editedAuthor: IDbAuthor) => void;
  handleDeleteAuthor: (id: string) => void;
  handleEditAuthorDatabaseUpdate: (editedAuthor: IDbAuthor) => void;
  handleDeleteAuthorDatabaseUpdate: (id: string) => void;
}

export default function Author({
  author,
  handleEditAuthor,
  handleDeleteAuthor,
  handleEditAuthorDatabaseUpdate,
  handleDeleteAuthorDatabaseUpdate,
}: IAuthorProps) {
  const [isEditing, setIsEditing] = useState(false);

  function databaseUpdateLogic() {
    if (!counter && !isEditing) {
      counter++;
      return;
    } else if (isEditing) {
      handleEditAuthorDatabaseUpdate(author);
    }
  }

  const editAndDeleteButtons = (
    <EditAndDelete>
      <Button
        type="button"
        secondary={isEditing ? false : true}
        text={isEditing ? 'Save' : 'Edit'}
        onClick={() => {
          databaseUpdateLogic();
          setIsEditing(!isEditing);
        }}
      />

      <Button
        type="button"
        danger
        text="Delete"
        onClick={() => {
          handleDeleteAuthor(author.author_id);
          handleDeleteAuthorDatabaseUpdate(author.author_id);
        }}
      />
    </EditAndDelete>
  );

  return isEditing ? (
    <TableRow>
      <FirstAndLastName>
        <EditFirstName
          name="first_name"
          value={author.first_name}
          onChange={(e) =>
            handleEditAuthor({ ...author, first_name: e.target.value })
          }
        />
        <EditLastName
          name="last_name"
          value={author.last_name}
          onChange={(e) =>
            handleEditAuthor({ ...author, last_name: e.target.value })
          }
        />
      </FirstAndLastName>

      {editAndDeleteButtons}
    </TableRow>
  ) : (
    <TableRow>
      <TableData>{author.first_name}</TableData>
      <TableData>{author.last_name}</TableData>
      <TableData>{editAndDeleteButtons}</TableData>
    </TableRow>
  );
}
