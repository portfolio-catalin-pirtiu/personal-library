import styled from 'styled-components';
import { Heading1 } from '../../lib/text';
import Button from '../shared/Button';
import { IDbAuthor } from '../../lib/definitions';
import { useState } from 'react';

const Wrapper = styled.div``;

const FirstAndLastName = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4vmin;
`;

const EditAndDelete = styled.div``;

const FirstName = styled(Heading1)``;

const LastName = styled(Heading1)``;

const EditFirstName = styled.input``;

const EditLastName = styled.input``;

let counter = 0;

interface IAuthorProps {
  author: IDbAuthor;
  handleEditAuthor: (editedAuthor: IDbAuthor) => void;
  handleDeleteAuthor: (id: string) => void;
  handleEditAuthorDatabaseUpdate: (editedAuthor: IDbAuthor) => void;
}

export default function Author({
  author,
  handleEditAuthor,
  handleDeleteAuthor,
  handleEditAuthorDatabaseUpdate,
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

  const editAndDeleteContent = (
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
        onClick={() => handleDeleteAuthor(author.id)}
      />
    </EditAndDelete>
  );

  return isEditing ? (
    <Wrapper>
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

      {editAndDeleteContent}
    </Wrapper>
  ) : (
    <Wrapper>
      <FirstAndLastName>
        <FirstName>{author.first_name}</FirstName>
        <LastName>{author.last_name}</LastName>
      </FirstAndLastName>

      {editAndDeleteContent}
    </Wrapper>
  );
}
