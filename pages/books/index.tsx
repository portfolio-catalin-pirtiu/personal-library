import useFetchBooks from '../../lib/useFetchBooks';
import { booksApiUrl } from '../../lib/constants';
import Book from '../../components/books/Book';
import styled from 'styled-components';
import { IBookWithAuthor, IDbBook } from '../../lib/definitions';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
`;

export default function Books() {
  const { books, setBooks } = useFetchBooks(booksApiUrl);

  function findAuthorDetails(
    books: IBookWithAuthor[],
    updatedBook: IBookWithAuthor
  ) {
    const [matchedBook] = books.filter(
      (book) => book.author_id === updatedBook.author_id
    );
    const { first_name, last_name } = matchedBook;
    return [first_name, last_name];
  }

  function updateBooks(updatedBook: IDbBook) {
    const updatedBooks = books.map((book) => {
      if (book.book_id === updatedBook.book_id)
        return { ...updatedBook, first_name: 'generic', last_name: 'generic' };
      else return book;
    });
    setBooks(updatedBooks);
  }
  return (
    <Wrapper>
      {books.map((book) => (
        <Book
          key={book.book_id}
          book_id={book.book_id}
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
      ))}
    </Wrapper>
  );
}
