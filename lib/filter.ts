import { IDbBook, IOption } from './definitions';

export const filter = {
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

export const options: IOption[] = [
  { name: 'All Books', value: 'all' },
  { name: 'Read Books', value: 'read' },
  { name: 'Not Read Books', value: 'notRead' },
  { name: 'In Progress Books', value: 'inProgress' },
  { name: 'Read This Year', value: 'thisYear' },
  { name: 'Read Last Year', value: 'lastYear' },
];
