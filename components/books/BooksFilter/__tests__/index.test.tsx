import { screen, render } from '@testing-library/react';
import BooksFilter from '../BooksFilter';

test('if the buttons in the BooksFilter component are on the page', () => {
  render(<BooksFilter />);
  const booksFilterValues = [
    'all',
    'read',
    'notRead',
    'inProgress',
    'thisYear',
    'lastYear',
  ];
  const allBooksFilterButtons = screen.getAllByRole(
    'button'
  ) as HTMLButtonElement[];
  const booksFilterValuesSet = new Set(booksFilterValues);
  console.log('booksFilterValuesSet', booksFilterValuesSet);

  const areAllBooksFilterButtonsOnThePage = allBooksFilterButtons.every(
    (button) => {
      if (booksFilterValuesSet.has(button.value)) {
        return true;
      }
      return false;
    }
  );

  expect(areAllBooksFilterButtonsOnThePage).toBe(true);
});
