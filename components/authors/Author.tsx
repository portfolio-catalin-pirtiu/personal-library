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

interface IAuthorProps {
  author: IDbAuthor;
  handleEditAuthor: (editedAuthor: IDbAuthor) => void;
}

export default function Author({ author, handleEditAuthor }: IAuthorProps) {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <Wrapper>
      <FirstAndLastName>
        <FirstName>{author.first_name}</FirstName>
        <LastName>{author.last_name}</LastName>
      </FirstAndLastName>

      <EditAndDelete>
        <Button
          type="button"
          secondary={isEditing ? false : true}
          text={isEditing ? 'Save' : 'Edit'}
          onClick={() => setIsEditing(!isEditing)}
        />
      </EditAndDelete>
    </Wrapper>
  );
}
