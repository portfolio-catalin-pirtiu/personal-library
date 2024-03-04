import useFetchBooks from '../../lib/useFetchBooks';
import useFetchAuthors from '../../lib/useFetchAuthors';
import { booksApiUrl, authorsApiUrl } from '../../lib/constants';
import Book from '../../components/books/Book';
import styled from 'styled-components';
import { IDbBook } from '../../lib/definitions';
import toast from 'react-hot-toast';
import findAuthorDetails from '../../lib/findAuthorDetails';
import updateBookReadingStatusDatabase from '../../lib/updateBookReadingStatusDatabase';
import { IUpdateBookReadingStatusDatabase } from '../../lib/definitions';

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

  function handleDeleteBook(id: string) {
    deleteBookState(id);
    deleteBookDatabase(id);
  }

  function deleteBookState(id: string) {
    const remainingBooks = books.filter((book) => book.book_id !== id);
    setBooks(remainingBooks);
  }

  async function deleteBookDatabase(id: string) {
    const deleteBookUrl = `${booksApiUrl}/delete/${id}`;

    try {
      const res = await fetch(deleteBookUrl, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application-json',
        },
      });

      if (res.ok) toast.success('Delete Successful.');
      else throw new Error('An error occurred while deleting a book.');
    } catch (error) {
      if (error instanceof Error) toast.error(error.message);
    }
  }

  function handleStartReading(bookId: string = '') {
    if (!bookId) return;
    const startReadingBook: IUpdateBookReadingStatusDatabase = {
      id: bookId,
      status: 'start',
      timestamp: new Date().toISOString(),
    };
    startReadingUpdateState(bookId, startReadingBook.timestamp);
    updateBookReadingStatusDatabase(startReadingBook);
  }

  function startReadingUpdateState(
    bookId: string = '',
    timestamp: string = ''
  ) {
    if (!bookId && !timestamp) return;
    const updatedBooks = books.map((book) => {
      if (book.book_id === bookId) {
        return {
          ...book,
          start_reading: timestamp,
          stop_reading: undefined,
          in_progress: true,
        };
      } else return book;
    });
    setBooks(updatedBooks);
  }

  function handleStopReading(bookId: string = '') {
    if (!bookId) return;
    const stopReadingBook: IUpdateBookReadingStatusDatabase = {
      id: bookId,
      status: 'stop',
      timestamp: new Date().toISOString(),
    };
    stopReadingUpdateState(bookId, stopReadingBook.timestamp);
    updateBookReadingStatusDatabase(stopReadingBook);
  }

  function stopReadingUpdateState(bookId: string = '', timestamp: string = '') {
    if (!bookId && !timestamp) return;
    const updatedBooks = books.map((book) => {
      if (book.book_id === bookId) {
        return {
          ...book,
          stop_reading: timestamp,
          start_reading: undefined,
          in_progress: false,
        };
      } else return book;
    });
    setBooks(updatedBooks);
  }

  function handleUpdateRating(bookId: string = '', rating: number = 0) {
    // 1. update state
    // 1. update DB
    updateRatingState(bookId, rating);
  }

  function updateRatingState(bookId: string = '', rating: number = 0){
    const updatedBooks = books.map((book) => {
      if (book.book_id === bookId) {
        return {
          ...book,
          rating: rating,
        };
      } else {
        return book;
      }
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
          handleDeleteBook={handleDeleteBook}
          handleStartReading={handleStartReading}
          handleStopReading={handleStopReading}
          handleUpdateRating={handleUpdateRating}
        />
      ))}
    </Wrapper>
  );
}
