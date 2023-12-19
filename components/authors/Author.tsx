import styled from 'styled-components';
import { IAuthor } from '../../lib/definitions';
import { Heading1 } from '../../lib/text';

const FirstAndLastName = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4vmin;
`;

const FirstName = styled(Heading1)``;

const LastName = styled(Heading1)``;

export default function Author({ first_name, last_name }: IAuthor) {
  return (
    <FirstAndLastName>
      <FirstName>{first_name}</FirstName>
      <LastName>{last_name}</LastName>
    </FirstAndLastName>
  );
}
