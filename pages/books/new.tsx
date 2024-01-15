import { IBook } from '../../lib/definitions';
import BookForm from '../../components/books/BookForm';

const initialValues: IBook = {
  author_id: '',
  title: '',
  read: false,
  in_progress: false,
  rating: 0,
  publisher: '',
  edition: '',
  notes: '',
};

const formPurpose = 'newBook';

export default function NewBook() {
  return <BookForm initialValues={initialValues} action={formPurpose} />;
}
