import { IBookWithAuthor, IDbBook } from '../../lib/definitions';
import styled from 'styled-components';
import Button from '../shared/Button';
import { colors } from '../../lib/colors';
import { FaRegEdit } from 'react-icons/fa';
import { useState } from 'react';
import BookForm from './BookForm';
import { booksApiUrl } from '../../lib/constants';
import RatingStars from '../RatingStars';
import Bubble from '../shared/Bubble';

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
const EditIcon = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const AuthorAndRating = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
const Rating = styled.div``;

const InfoAndEditDeleteButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;
const EditAndDeleteButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
`;

const Bubbles = styled.div`
  display: flex;
  gap: 0.5rem;
`;

interface IBookProps extends IBookWithAuthor {
  handleUpdateBooks: (updatedBook: IDbBook) => void;
  handleDeleteBook: (id: string) => void;
}

export default function Book({
  book_id,
  author_id,
  title,
  first_name,
  last_name,
  edition,
  publisher,
  notes,
  in_progress,
  read,
  rating = 0,
  start_reading,
  stop_reading,
  handleUpdateBooks,
  handleDeleteBook,
}: IBookProps) {
  const [isEditing, setIsEditing] = useState(false);
  const editBookInitialValues: IDbBook = {
    book_id: book_id,
    author_id: author_id,
    title: title,
    read: read,
    in_progress: in_progress,
    rating: rating,
    publisher: publisher,
    edition: edition,
    notes: notes,
  };
  function handleStartReading() {}
  function handleStopReading() {}
  function handleIsEditing() {
    setIsEditing(!isEditing);
  }
  const editBookUrl = `${booksApiUrl}/edit/${book_id}`;

  return isEditing ? (
    <BookForm
      initialValues={editBookInitialValues}
      url={editBookUrl}
      method="PUT"
      handleIsEditing={handleIsEditing}
      handleUpdateBooks={handleUpdateBooks}
    />
  ) : (
    <Wrapper>
      <InfoAndEditDeleteButtons>
        <RestOfInfo>
          <Edition>{edition}</Edition>
          <Publisher>{publisher}</Publisher>
          <Notes>{notes}</Notes>
        </RestOfInfo>

        <EditAndDeleteButtons>
          <EditIcon>
            <FaRegEdit onClick={handleIsEditing} />
          </EditIcon>

          <Button
            type="button"
            text="Delete"
            primaryColor={colors.red}
            onClick={() => handleDeleteBook(book_id)}
          />
        </EditAndDeleteButtons>
      </InfoAndEditDeleteButtons>

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

      <AuthorAndRating>
        <AuthorTitleAndStatus>
          <Author>{`${first_name} ${last_name}`}</Author>
          <Title>{title}</Title>
        </AuthorTitleAndStatus>

        <Rating>
          <RatingStars rating={rating} />
        </Rating>
      </AuthorAndRating>

      <Bubbles>
        <Bubble text="read" backgroundColor="green" />
        <Bubble text="not read" backgroundColor="blue" />#
      </Bubbles>
    </Wrapper>
  );
}
