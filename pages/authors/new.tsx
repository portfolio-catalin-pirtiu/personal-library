import { Formik, Form, FormikValues, FormikErrors } from 'formik';
import styled from 'styled-components';
import Button from '../../components/shared/Button';
import InputGroup from '../../components/shared/InputGroup';
import { IAuthor } from '../../lib/definitions';
import { Author } from '../../lib/classes';
import toast from 'react-hot-toast';

const StyledForm = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
            <InputGroup
              label="First Name"
              name="first_name"
              autoComplete="given-name"
            />

            <InputGroup
              label="Last Name"
              name="last_name"
              autoComplete="family-name"
            />

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
