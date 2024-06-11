import { screen, render } from '@testing-library/react';
import BooksFilter from '../BooksFilter';
import { bookFiltersNameAndValue } from '../../../../lib/filterBooks';
import { useState } from 'react';
import { ISelection } from '../../../../lib/definitions';

test('if the buttons in the BooksFilter component are on the page', () => {
  const [filter, setFilter] = useState<ISelection>('all');
  render(
    <BooksFilter
      bookFiltersNameAndValue={bookFiltersNameAndValue}
      filter={filter}
      setFilter={setFilter}
    />
  );
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
