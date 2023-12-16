import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FormikValues,
  FormikErrors,
} from 'formik';
import styled from 'styled-components';
import { IAuthor } from '../../lib/definitions';
import { Author } from '../../lib/classes';
import toast from 'react-hot-toast';

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

const initialValues: IAuthor = { first_name: '', last_name: '' };

export default function NewAuthor() {
  return (
    <>
      <Formik
        initialValues={initialValues}
        validate={(values) => {
          const errors: FormikErrors<FormikValues> = {};

          if (!values.first_name) errors.first_name = 'Required';
          if (!values.last_name) errors.last_name = 'Required';
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(false);

          const newAuthor = new Author(values);

          try {
            const req = await fetch('/api/authors/new', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(newAuthor),
            });

            if (req.ok) {
              toast.success(`${newAuthor.first_name} added successfully.`);
            } else {
              throw new Error();
            }
          } catch (error) {
            if (error instanceof Error) {
              toast.error('Something went wrong.');
            }
          }
        }}
      >
        {({ isSubmitting }) => (
          <StyledForm>
            <InputGroup>
              <Label htmlFor="first_name">
                First Name
                <Input
                  type="input"
                  name="first_name"
                  autoComplete="given-name"
                />
              </Label>

              <ErrorMsg name="name" component="div" />
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
