import { IDbAuthor, IDbBook } from './definitions';

export default function findAuthorDetails(
  authors: IDbAuthor[],
  updatedBook: IDbBook
) {
  const [matchedAuthor] = authors.filter(
    (author) => author.author_id === updatedBook.author_id
  );
  const { first_name, last_name } = matchedAuthor;
  return [first_name, last_name];
}
