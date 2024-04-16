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
import bookRobot from '../../assets/add-new-book-page-image.png';
import { colors } from '../../lib/colors';

const Label = styled.label``;

const Input = styled(Field)`
  appearance: none;
  background-color: transparent;
  border: none;
  padding: 0 1em 0 0;
  margin: 0;
  width: 100%;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;
  outline: none;
`;

const ErrorMsg = styled(ErrorMessage)`
  color: red;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;
`;

const Select = styled.div`
  display: grid;
  border: 0.15em solid ${colors.gray};
  border-radius: 7px;
  padding: 0.25em 0.5em;
  cursor: pointer;
  line-height: 1.1;
  grid-template-areas: 'select';
  align-items: center;
  text-align: center;
  &:after {
    content: '';
    width: 0.8em;
    height: 0.5em;
    background-color: black;
    clip-path: polygon(0% 0%, 100% 0%, 50% 100%);
    grid-area: select;
    justify-self: end;
  }
`;
const Option = styled.option``;

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
      <ImageAndText>
        <StyledImage
          alt="white robot with blue googles holding books in his hands and surrounded by 2 stacks of books on each side"
          src={bookRobot}
          sizes="600vW"
          style={{ width: '100%', height: 'auto' }}
        />
        <Text>
          <p>Hey bookworm!</p>
          <p>Ready to expand your literary universe?</p>
          <p>{`It's time to showcase your favourite reads!`}</p>
          <p>Add your books one by one and watch your library grow.</p>
          <p>{`Let's build something extraordinary together!`}</p>
          <p>{`See you among the shelves!`}</p>
        </Text>
      </ImageAndText>
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
              <Label htmlFor="author_id">Author</Label>
              <Select>
                <Input name="author_id" component="select">
                  <Option value="">--Select Author--</Option>
                  {authors.map((author) => (
                    <Option
                      value={author.author_id}
                      key={author.author_id}
                    >{`${author.first_name} ${author.last_name}`}</Option>
                  ))}
                </Input>
              </Select>
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
