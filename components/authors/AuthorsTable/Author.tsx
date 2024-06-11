import styled from 'styled-components';
import Button from '../../shared/Button';
import { IDbAuthor } from '../../../lib/definitions';
import { useState } from 'react';
import { TableData, TableRow } from './shared/tableComponents';
import { inputStyle } from '../../../lib/cssStrings';

const EditAndDelete = styled.div``;
const EditFirstName = styled.input`
  ${inputStyle}
`;
const EditLastName = styled.input`
  ${inputStyle}
`;

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
        secondary={isEditing ? true : false}
        plain
        text={isEditing ? 'Save' : '✏️'}
        onClick={() => {
          databaseUpdateLogic();
          setIsEditing(!isEditing);
        }}
      />

      <Button
        type="button"
        plain
        text="🗑️"
        onClick={() => {
          handleDeleteAuthor(author.author_id);
          handleDeleteAuthorDatabaseUpdate(author.author_id);
        }}
      />
    </EditAndDelete>
  );

  return isEditing ? (
    <TableRow>
      <TableData>
        <EditFirstName
          name="first_name"
          value={author.first_name}
          onChange={(e) =>
            handleEditAuthor({ ...author, first_name: e.target.value })
          }
        />
      </TableData>
      <TableData>
        <EditLastName
          name="last_name"
          value={author.last_name}
          onChange={(e) =>
            handleEditAuthor({ ...author, last_name: e.target.value })
          }
        />
      </TableData>
      <TableData>{editAndDeleteButtons}</TableData>
    </TableRow>
  ) : (
    <TableRow>
      <TableData>{author.first_name}</TableData>
      <TableData>{author.last_name}</TableData>
      <TableData>{editAndDeleteButtons}</TableData>
    </TableRow>
  );
}
