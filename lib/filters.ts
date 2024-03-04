import { IDbBook } from './definitions';

export const filters = {
  all: () => true,
  read: (book: IDbBook) => book.read,
  notRead: (book: IDbBook) => !book.read,
  inProgress: (book: IDbBook) => book.in_progress,
  thisYear: (book: IDbBook) => {
    if (book.stop_reading) {
      return (
        new Date(book.stop_reading).getFullYear() === new Date().getFullYear()
      );
    } else {
      return false;
    }
  },
  lastYear: (book: IDbBook) => {
    const lastYear = new Date().getFullYear() - 1;
    if (book.stop_reading) {
      return new Date(book.stop_reading).getFullYear() === lastYear;
    } else {
      return false;
    }
  },
};
