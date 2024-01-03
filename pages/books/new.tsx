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

          if (!values.author_id) errors.author_id = 'Required';
          if (!values.title) errors.title = 'Required';
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(false);

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
        {({ isSubmitting, values }) => (
          <StyledForm>
            <InputGroup>
              <Label htmlFor="author_id">
                Author
                <Input as="select" name="author_id">
                  {authors.map((author) => (
                    <option
                      value={author.id}
                    >{`${author.first_name} ${author.last_name}`}</option>
                  ))}
                </Input>
              </Label>

              <ErrorMsg name="author_id" component="div" />
            </InputGroup>

            <InputGroup>
              <Label htmlFor="last_name">
                Last Name
                <Input
                  type="input"
                  name="last_name"
                  autoComplete="family-name"
                />
              </Label>

              <ErrorMsg name="surname" component="div" />
            </InputGroup>

            <SubmitButton type="submit" disabled={isSubmitting}>
              Add New Author
            </SubmitButton>
          </StyledForm>
        )}
      </Formik>
    </>
  );
}
