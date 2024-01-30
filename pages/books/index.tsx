import useFetchBooks from '../../lib/useFetchBooks';
import useFetchAuthors from '../../lib/useFetchAuthors';
import { booksApiUrl, authorsApiUrl } from '../../lib/constants';
import Book from '../../components/books/Book';
import styled from 'styled-components';
import { IDbAuthor, IDbBook } from '../../lib/definitions';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
`;

export default function Books() {
  const { books, setBooks } = useFetchBooks(booksApiUrl);
  const { authors } = useFetchAuthors(authorsApiUrl);

  function findAuthorDetails(authors: IDbAuthor[], updatedBook: IDbBook) {
    const [matchedAuthor] = authors.filter(
      (author) => author.author_id === updatedBook.author_id
    );
    const { first_name, last_name } = matchedAuthor;
    return [first_name, last_name];
  }

  function handleUpdateBooks(updatedBook: IDbBook) {
    const updatedBooks = books.map((book) => {
      if (book.book_id === updatedBook.book_id) {
        const [authorFirstName, authorLastName] = findAuthorDetails(
          authors,
          updatedBook
        );
        return {
          ...updatedBook,
          first_name: authorFirstName,
          last_name: authorLastName,
        };
      } else return book;
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
          last_name={book.last_name}
          edition={book.edition}
          publisher={book.publisher}
          notes={book.notes}
          in_progress={book.in_progress}
          read={book.read}
          rating={book.rating}
          start_reading={book.start_reading}
          stop_reading={book.stop_reading}
          handleUpdateBooks={handleUpdateBooks}
        />
      ))}
    </Wrapper>
  );
}
