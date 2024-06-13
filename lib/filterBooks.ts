import { IDbBook, BookFilterOption } from './definitions';

export const bookFilters = {
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

export const bookFiltersNameAndValue: BookFilterOption[] = [
  { name: 'All Books', value: 'all' },
  { name: 'Read', value: 'read' },
  { name: 'Not Read', value: 'notRead' },
  { name: 'In Progress', value: 'inProgress' },
  { name: 'This Year', value: 'thisYear' },
  { name: 'Last Year', value: 'lastYear' },
];
