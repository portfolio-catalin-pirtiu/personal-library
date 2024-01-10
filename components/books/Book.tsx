import { IBookWithAuthor } from '../../lib/definitions';
import styled from 'styled-components';

const Wrapper = styled.div``;
const RestOfInfo = styled.div``;
const AuthorTitleAndStatus = styled.div``;
const Edition = styled.div``;
const Publisher = styled.div``;
const Notes = styled.div``;
const StartStopButtons = styled.div``;
const Title = styled.div``;
const Author = styled.div``;

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
  return (
    <Wrapper>
      <RestOfInfo>
        <Edition>{edition}</Edition>
        <Publisher>{publisher}</Publisher>
        <Notes>{notes}</Notes>
      </RestOfInfo>

      <StartStopButtons></StartStopButtons>

      <AuthorTitleAndStatus>
        <Author>{`${first_name} ${last_name}`}</Author>
        <Title>{title}</Title>
      </AuthorTitleAndStatus>
    </Wrapper>
  );
}
