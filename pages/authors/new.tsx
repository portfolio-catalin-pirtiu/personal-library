import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FormikValues,
  FormikErrors,
} from 'formik';
import styled from 'styled-components';

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

interface IAuthor {
  name: string;
  surname: string;
}

const initialValues: IAuthor = { name: '', surname: '' };

export default function NewAuthor() {
  return (
    <Formik
      initialValues={initialValues}
      validate={(values) => {
        const errors: FormikErrors<FormikValues> = {};

        if (!values.name) errors.name = 'Required';
        if (!values.surname) errors.surname = 'Required';
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <StyledForm>
          <InputGroup>
            <Label htmlFor="name">
              Author&apos;s Name
              <Input type="text" name="name" autoComplete="given-name" />
            </Label>

            <ErrorMsg name="name" component="div" />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="surname">
              Author&apos;s Surname
              <Input type="text" name="surname" autoComplete="family-name" />
            </Label>

            <ErrorMsg name="surname" component="div" />
          </InputGroup>

          <SubmitButton type="submit" disabled={isSubmitting}>
            Add New Author
          </SubmitButton>
        </StyledForm>
      )}
    </Formik>
  );
}
