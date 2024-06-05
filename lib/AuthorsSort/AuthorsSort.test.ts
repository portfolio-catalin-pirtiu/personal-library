import { AuthorsSorter } from './AuthorsSort';
import { IDbAuthor } from '../definitions';

const authors: IDbAuthor[] = [
  { author_id: '20', first_name: 'Black', last_name: 'Stud' },
  { author_id: '21', first_name: 'Alpha', last_name: 'Star' },
  { author_id: '22', first_name: 'Clock', last_name: 'Still' },
];

test('if the authors are sorted ascending on first name', () => {
  const authorsSorter = new AuthorsSorter(authors);
  authors.sort(authorsSorter.ascending);

  expect(authors).toStrictEqual([
    { author_id: '21', first_name: 'Alpha', last_name: 'Star' },
    { author_id: '20', first_name: 'Black', last_name: 'Stud' },
    { author_id: '22', first_name: 'Clock', last_name: 'Still' },
  ]);
});

test('if the authors are sorted ascending on first name', () => {
  const authorsSorter = new AuthorsSorter(authors);
  authors.sort(authorsSorter.descending);

  expect(authors).toStrictEqual([
    { author_id: '22', first_name: 'Clock', last_name: 'Still' },
    { author_id: '20', first_name: 'Black', last_name: 'Stud' },
    { author_id: '21', first_name: 'Alpha', last_name: 'Star' },
  ]);
});
