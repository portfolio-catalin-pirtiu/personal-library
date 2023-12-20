import styled from 'styled-components';
import { IAuthor } from '../../lib/definitions';
import { Heading1 } from '../../lib/text';
import Button from '../shared/Button';

const Wrapper = styled.div``;

const FirstAndLastName = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4vmin;
`;

const EditAndDelete = styled.div``;

const FirstName = styled(Heading1)``;

const LastName = styled(Heading1)``;

export default function Author({ first_name, last_name }: IAuthor) {
  function handleEditAuthor() {}
  return (
    <Wrapper>
      <FirstAndLastName>
        <FirstName>{first_name}</FirstName>
        <LastName>{last_name}</LastName>
      </FirstAndLastName>

      <EditAndDelete>
        <Button
          type="button"
          text="Edit"
          onClick={handleEditAuthor}
        />
      </EditAndDelete>
    </Wrapper>
  );
}
