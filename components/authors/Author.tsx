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

interface IAuthorProps {
  author: IDbAuthor;
  handleEditAuthor: (editedAuthor: IDbAuthor) => void;
}

export default function Author({ author, handleEditAuthor }: IAuthorProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState(author.first_name);
  const [lastName, setLastName] = useState(author.last_name);

  const editAndDeleteContent = (
    <EditAndDelete>
      <Button
        type="button"
        secondary={isEditing ? false : true}
        text={isEditing ? 'Save' : 'Edit'}
        onClick={() => setIsEditing(!isEditing)}
      />
    </EditAndDelete>
  );

  return isEditing ? (
    <Wrapper>
      <FirstAndLastName>
        <EditFirstName
          name="first_name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <EditLastName
          name="last_name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </FirstAndLastName>

      {editAndDeleteContent}
    </Wrapper>
  ) : (
    <Wrapper>
      <FirstAndLastName>
        <FirstName>{firstName}</FirstName>
        <LastName>{lastName}</LastName>
      </FirstAndLastName>

      {editAndDeleteContent}
    </Wrapper>
  );
}
