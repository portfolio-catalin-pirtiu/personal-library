import { IBookWithAuthor } from '../../lib/definitions';
import styled from 'styled-components';
import Button from '../shared/Button';
import { colors } from '../../lib/colors';
import { FaRegEdit } from 'react-icons/fa';

const Wrapper = styled.div`
  border: 0.1rem solid ${colors.gray};
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  width: 20rem;
  height: 10rem;
  &:hover {
    background: ${colors.gray};
  }
  box-shadow: 0.1rem 0.1rem 0.3rem 0.2rem ${colors.gray};
`;
const RestOfInfo = styled.div``;
const AuthorTitleAndStatus = styled.div``;
const Edition = styled.div``;
const Publisher = styled.div``;
const Notes = styled.div``;
const StartStopButtons = styled.div``;
const Title = styled.div``;
const Author = styled.div``;
const EditIcon = styled.div``;

export default function Book({
  id,
  author_id,
  title,
  first_name,
  last_name,
  edition,
  publisher,
  notes,
  in_progress,
  read,
  rating,
  start_reading,
  stop_reading,
}: IBookWithAuthor) {
  function handleStartReading() {}
  function handleStopReading() {}
  return (
    <Wrapper>
      <EditIcon>
        <FaRegEdit />
      </EditIcon>
      <RestOfInfo>
        <Edition>{edition}</Edition>
        <Publisher>{publisher}</Publisher>
        <Notes>{notes}</Notes>
      </RestOfInfo>

      <StartStopButtons>
        <Button
          type="button"
          text="Start Reading"
          primaryColor={colors.blue}
          onClick={handleStartReading}
        />

        <Button
          type="button"
          text="Stop Reading"
          primaryColor={colors.green}
          onClick={handleStopReading}
        />
      </StartStopButtons>

      <AuthorTitleAndStatus>
        <Author>{`${first_name} ${last_name}`}</Author>
        <Title>{title}</Title>
      </AuthorTitleAndStatus>
    </Wrapper>
  );
}
