import '../../styles/authors.new.module.css';
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FormikValues,
  FormikErrors,
} from 'formik';
import styled from 'styled-components';
import Button from '../../components/shared/Button';
import { IAuthor } from '../../lib/definitions';
import { Author } from '../../lib/classes';
import toast from 'react-hot-toast';
import { color } from '../../lib/color';

const StyledForm = styled(Form)``;

const Label = styled.label`
  margin-bottom: 0.3em;
`;

const Input = styled(Field)`
  margin-bottom: 0.5em;
  border-radius: 7px;
  border: 0.15em solid ${color.silver};
  padding: 0.5em;
`;

const ErrorMsg = styled(ErrorMessage)`
  color: red;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
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
        onSubmit={async (values, { setSubmitting, resetForm }) => {
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
              resetForm();
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
              <Label htmlFor="first_name">First Name</Label>
              <Input type="input" name="first_name" autoComplete="given-name" />

              <ErrorMsg name="name" component="div" />
            </InputGroup>

            <InputGroup>
              <Label htmlFor="last_name">Last Name</Label>
              <Input type="input" name="last_name" autoComplete="family-name" />

              <ErrorMsg name="surname" component="div" />
            </InputGroup>
            <Button
              type="submit"
              text="Add New Author"
              onClick={() => {}}
              disabled={isSubmitting}
            ></Button>
          </StyledForm>
        )}
      </Formik>
    </>
  );
}
