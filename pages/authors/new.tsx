import { Formik, FormikValues, FormikErrors } from 'formik';
import Button from '../../components/shared/Button';
import InputGroup from '../../components/shared/InputGroup/InputGroup';
import { IAuthor } from '../../lib/definitions';
import { Author } from '../../lib/classes';
import toast from 'react-hot-toast';
import workingRobotImage from '../../assets/add-new-author-page-image.png';
import {
  FormWrapper,
  ImageAndText,
  StyledImage,
  Text,
  StyledForm,
} from '../../components/shared/FormComponents';

const initialValues: IAuthor = { first_name: '', last_name: '' };

export default function NewAuthor() {
  return (
    <FormWrapper>
      <ImageAndText>
        <StyledImage
          alt="white robot with blue googles working at a drawing desk"
          src={workingRobotImage}
          sizes="600vw"
          style={{ width: '100%', height: 'auto' }}
        />
        <Text>
          <p>Ready to introduce your authors? </p>
          <p>{`Just drop in their first and last names, and we're good to go!`}</p>
          <p>{`Let's get those brilliant minds acknowledged.`}</p>
        </Text>
      </ImageAndText>
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
              required
            />

            <InputGroup
              label="Last Name"
              name="last_name"
              autoComplete="family-name"
              required
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
    </FormWrapper>
  );
}
