import {
  Formik,
  Field,
  ErrorMessage,
  FormikValues,
  FormikErrors,
} from 'formik';
import styled from 'styled-components';
import toast from 'react-hot-toast';
import InputGroup from '../shared/InputGroup';
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
} from '../shared/FormComponents';
import Button from '../shared/Button';

const Label = styled.label``;

const Input = styled(Field)``;

const ErrorMsg = styled(ErrorMessage)`
  color: red;
`;

const InputWrapper = styled.div``;

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
  const totalStars = 5;
  return (
    <FormWrapper>
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
              <Label htmlFor="author_id">
                Author
                <Input name="author_id" component="select">
                  <option value="">--Select Author--</option>
                  {authors.map((author) => (
                    <option
                      value={author.author_id}
                      key={author.author_id}
                    >{`${author.first_name} ${author.last_name}`}</option>
                  ))}
                </Input>
              </Label>

              <ErrorMsg name="author_id" component="div" />
            </InputWrapper>

            <InputGroup label="Title" name="title" />

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
