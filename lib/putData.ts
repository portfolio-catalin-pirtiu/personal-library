import { sql } from '@vercel/postgres';
import { IAuthor, IBook } from './definitions';

export async function putAuthor(author: IAuthor, id: string) {
  const { first_name, last_name } = author;
  try {
    await sql`UPDATE authors
      SET 
      first_name = ${first_name},
      last_name = ${last_name}
      WHERE
      id = ${id};`;
  } catch (error) {
    const dbError = await error;
    if (dbError instanceof Error) throw dbError;
  }
}

export async function putBook(book: IBook, id: string) {
  const { author_id, title, rating, publisher, edition, notes } = book;
  try {
    await sql`UPDATE books
      SET
      author_id = ${author_id}
      title = ${title}
      rating = ${rating}
      publisher = ${publisher}
      edition = ${edition}
      notes = ${notes}
      WHERE
      id = ${id}`;
  } catch (error) {
    const dbError = await error;
    if (dbError instanceof Error) throw dbError;
  }
}
