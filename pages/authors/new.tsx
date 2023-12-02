import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FormikHelpers,
  FormikValues,
} from 'formik';
import styled from 'styled-components';

const StyledForm = styled(Form)``;

const Label = styled.label``;

const Input = styled(Field)``;

const ErrorMsg = styled(ErrorMessage)`
  color: red;
`;

const InputGroup = styled.div``;

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
        const errors = { name: '', surname: '' };
        if (!values.name) errors.name = 'Required';
        if (!values.surname) errors.surname = 'Required';
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log('new author values', values);
      }}
    >
      {({ isSubmitting }) => (
        <StyledForm>
          <InputGroup>
            <Label htmlFor="name">Author's Name</Label>
            <Input type="name" name="name" />
            <ErrorMsg name="name" component="div" />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="surname">Author's Surname</Label>
            <Input type="name" name="surname" />
            <ErrorMsg name="surname" component="div" />
          </InputGroup>
        </StyledForm>
      )}
    </Formik>
  );
}
