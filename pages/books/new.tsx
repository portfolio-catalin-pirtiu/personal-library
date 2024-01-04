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
import { IBook } from '../../lib/definitions';
import { Book } from '../../lib/classes';
import useFetchAuthors from '../../lib/useFetchAuthors';
import { booksApiUrl, authorsApiUrl } from '../../lib/constants';

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

const initialValues: IBook = {
  author_id: '',
  title: '',
  read: false,
  in_progress: false,
  rating: 0,
};

export default function NewBook() {
  const { authors } = useFetchAuthors(authorsApiUrl);
  return (
    <>
      <Formik
        initialValues={initialValues}
        validate={(values) => {
          const errors: FormikErrors<FormikValues> = {};
          console.log('validate values', values);

          if (!values.author_id) errors.author_id = 'Required';
          if (!values.title) errors.title = 'Required';
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(false);
          console.log('new book values', values);

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
        {({ isSubmitting }) => (
          <StyledForm>
            <InputGroup>
              <Label htmlFor="author_id">
                Author
                <Input name="author_id" component="select">
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

            <SubmitButton type="submit" disabled={isSubmitting}>
              Add New Book
            </SubmitButton>
          </StyledForm>
        )}
      </Formik>
    </>
  );
}
