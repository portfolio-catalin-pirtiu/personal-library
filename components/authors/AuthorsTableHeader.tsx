import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;
const FirstName = styled.div``;
const LastName = styled.div``;
const Actions = styled.div``;

export default function AuthorsTableHeader() {
  return (
    <Wrapper>
      <FirstName>First Name</FirstName>
      <LastName>Last Name</LastName>
      <Actions>Actions</Actions>
    </Wrapper>
  )
}
