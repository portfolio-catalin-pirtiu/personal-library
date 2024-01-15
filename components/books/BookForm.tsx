import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FormikValues,
  FormikErrors,
} from 'formik';
import styled from 'styled-components';
import toast from 'react-hot-toast';
import { IDbBook } from '../../lib/definitions';
import { Book } from '../../lib/classes';
import useFetchAuthors from '../../lib/useFetchAuthors';
import { booksApiUrl, authorsApiUrl } from '../../lib/constants';
import RatingStars from '../../components/RatingStars';
import { useState } from 'react';

const StyledForm = styled(Form)``;

const Label = styled.label``;

const Input = styled(Field)``;

const ErrorMsg = styled(ErrorMessage)`
  color: red;
`;

const InputGroup = styled.div``;

const SubmitButton = styled.button<{ disabled: boolean }>`
  cursor: ${({ disabled }) => (disabled ? 'wait' : 'pointer')};
  opacity: ${({ disabled }) => disabled && '0.5'};
`;

const defaultInitialValues: IDbBook = {
  id: '',
  author_id: '',
  title: '',
  read: false,
  in_progress: false,
  rating: 0,
  publisher: '',
  edition: '',
  notes: '',
};

interface IBookForm {
  initialValues: IDbBook;
  action: 'newBook' | 'editBook';
  isEditing?: boolean;
  setIsEditing?: (isEditing: boolean) => void;
}

export default function BookForm({
  initialValues = defaultInitialValues,
  action = 'newBook',
  isEditing = false,
  setIsEditing = () => {},
}: IBookForm) {
  const { authors } = useFetchAuthors(authorsApiUrl);
  const [stars, setStars] = useState(0);
  const totalStars = 5;
  const buttonText = action === 'newBook' ? 'Add New Book' : 'Edit Book';
  const newBookUrl = booksApiUrl + '/new';
  return (
    <>
      <h1>{buttonText}</h1>
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
          setIsEditing(!isEditing);
          const newBook = new Book(values);

          try {
            const req = await fetch(`${booksApiUrl}/new`, {
              method: 'POST',
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
            <InputGroup>
              <Label htmlFor="author_id">
                Author
                <Input name="author_id" component="select">
                  <option value="">--Select Author--</option>
                  {authors.map((author) => (
                    <option
                      value={author.id}
                      key={author.id}
                    >{`${author.first_name} ${author.last_name}`}</option>
                  ))}
                </Input>
              </Label>

              <ErrorMsg name="author_id" component="div" />
            </InputGroup>

            <InputGroup>
              <Label htmlFor="title">
                Title
                <Input type="input" name="title" />
              </Label>

              <ErrorMsg name="title" component="div" />
            </InputGroup>

            <InputGroup>
              <Input type="hidden" name="read" />
            </InputGroup>

            <InputGroup>
              <Input type="hidden" name="in_progress" />
            </InputGroup>

            <InputGroup>
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
            </InputGroup>

            <InputGroup>
              <Label htmlFor="publisher">
                Publisher
                <Input type="input" name="publisher" />
              </Label>
            </InputGroup>

            <InputGroup>
              <Label htmlFor="edition">
                Edition
                <Input type="input" name="edition" />
              </Label>
            </InputGroup>

            <InputGroup>
              <Label htmlFor="notes">
                Notes
                <Input type="input" name="notes" component="textarea" />
              </Label>
            </InputGroup>

            <SubmitButton type="submit" disabled={isSubmitting}>
              {buttonText}
            </SubmitButton>
          </StyledForm>
        )}
      </Formik>
    </>
  );
}
