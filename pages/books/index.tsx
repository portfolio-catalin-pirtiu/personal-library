import useFetchBooks from '../../lib/useFetchBooks';
import { booksApiUrl } from '../../lib/constants';
import Book from '../../components/books/Book';

export default function Books() {
  const { books } = useFetchBooks(booksApiUrl);
  return books.map((book) => (
    <Book
      key={book.id}
      id={book.id}
      author_id={book.author_id}
      title={book.title}
      first_name={book.first_name}
      last_name={book.first_name}
      edition={book.edition}
      publisher={book.publisher}
      notes={book.notes}
      in_progress={book.in_progress}
      read={book.read}
      rating={book.rating}
      start_reading={book.start_reading}
      stop_reading={book.stop_reading}
    />
  ));
}
