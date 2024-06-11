import { Formik, ErrorMessage, FormikValues, FormikErrors } from 'formik';
import styled from 'styled-components';
import toast from 'react-hot-toast';
import InputGroup from '../shared/InputGroup/InputGroup';
import { IDbBook } from '../../lib/definitions';
import { Book } from '../../lib/classes';
import useFetchAuthors from '../../lib/useFetchAuthors';
import { authorsApiUrl } from '../../lib/constants';
import RatingStars from '../../components/RatingStars';
import { useState } from 'react';
import {
  FormWrapper,
  ImageAndText,
  StyledImage,
  Text,
  StyledForm,
  Input,
} from '../shared/FormComponents';
import Button from '../shared/Button';
import SelectAuthor from './AuthorSelector';
import bookRobot from '../../assets/add-new-book-page-image.png';
import { styleConstants } from '../../lib/constants';

const Label = styled.label``;

const ErrorMsg = styled(ErrorMessage)`
  color: red;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${styleConstants.lowGap};
`;

const defaultInitialValues: IDbBook = {
  book_id: '',
  author_id: '',
  title: '',
  read: false,
  in_progress: false,
  rating: 0,
  stop_reading: '',
  start_reading: '',
  publisher: '',
  edition: '',
  notes: '',
};

interface IBookForm {
  initialValues: IDbBook;
  url: string;
  method: 'POST' | 'PUT';
  handleIsEditing?: () => void;
  handleUpdateBooks?: (updatedBook: IDbBook) => void;
}

export default function BookForm({
  initialValues = defaultInitialValues,
  url = '',
  method = 'PUT',
  handleIsEditing = () => {},
  handleUpdateBooks = () => {},
}: IBookForm) {
  const { authors } = useFetchAuthors(authorsApiUrl);
  const [stars, setStars] = useState(
    initialValues.rating ? initialValues.rating : 0
  );
  const [selectedAuthor, setSelectedAuthor] = useState(initialValues.author_id);
  const totalStars = 5;

  return (
    <FormWrapper>
      <ImageAndText>
        <StyledImage
          alt="white robot with blue googles holding books in his hands and surrounded by 2 stacks of books on each side"
          src={bookRobot}
          sizes="600vW"
          style={{ width: '100%', height: 'auto' }}
        />
        <Text>
          <p>Hey bookworm!</p>
          <p>Ready to expand your literary universe?</p>
          <p>{`It's time to showcase your favourite reads!`}</p>
          <p>Add your books one by one and watch your library grow.</p>
          <p>{`Let's build something extraordinary together!`}</p>
          <p>{`See you among the shelves!`}</p>
        </Text>
      </ImageAndText>
      <Formik
        initialValues={initialValues}
        validate={(values) => {
          const errors: FormikErrors<FormikValues> = {};

          if (!values.author_id) errors.author_id = 'Required';
          if (!values.title) errors.title = 'Required';
          return errors;
        }}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          setSubmitting(false);
          handleIsEditing();
          handleUpdateBooks(values);
          const newBook = new Book(values);

          try {
            const req = await fetch(url, {
              method: method,
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(newBook),
            });

            if (req.ok) {
              toast.success('Added successfully.');
              resetForm();
            } else {
              throw new Error('Something went wrong.');
            }
          } catch (error) {
            if (error instanceof Error) {
              toast.error(error.message);
            }
          }
        }}
      >
        {({ isSubmitting, setFieldValue }) => (
          <StyledForm>
            <InputWrapper>
              <InputGroup
                label="Author"
                name="author_id"
                required
                hidden
                value={selectedAuthor}
              />
              <SelectAuthor
                authors={authors}
                handleSelectedAuthor={(authorID: string) =>
                  setSelectedAuthor(authorID)
                }
              />
              <ErrorMsg name="author_id" component="div" />
            </InputWrapper>

            <InputGroup label="Title" name="title" required />

            <InputWrapper>
              <Label htmlFor="rating">
                Rating
                <Input type="hidden" name="rating" value={stars} />
                <RatingStars
                  totalStars={totalStars}
                  rating={stars}
                  onChangeRatingValue={setFieldValue}
                  onChangeRatingStars={setStars}
                />
              </Label>
            </InputWrapper>

            <InputGroup label="Publisher" name="publisher" />

            <InputGroup label="Edition" name="edition" />

            <InputGroup label="Notes" name="notes" textarea />

            <Button
              type="submit"
              text={method === 'PUT' ? 'Save' : 'Add New Book'}
              onClick={() => {}}
              disabled={isSubmitting}
            ></Button>
          </StyledForm>
        )}
      </Formik>
    </FormWrapper>
  );
}
