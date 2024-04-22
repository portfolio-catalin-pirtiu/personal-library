import { IDbBook } from '../../lib/definitions';
import BookForm from '../../components/books/BookForm';
import { booksApiUrl } from '../../lib/constants';

const initialValues: IDbBook = {
  book_id: '',
  author_id: '',
  title: '',
  read: false,
  in_progress: false,
  rating: 0,
  publisher: '',
  edition: '',
  notes: '',
};

const newBookUrl = booksApiUrl + '/new';
export default function NewBook() {
  return (
    <BookForm initialValues={initialValues} url={newBookUrl} method="POST" />
  );
}
