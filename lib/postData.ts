import { sql } from '@vercel/postgres';
import { IAuthor, IBook } from './definitions';

export async function postAuthor(author: IAuthor) {
  const { first_name, last_name } = author;

  try {
    await sql`INSERT INTO authors (first_name, last_name)
      VALUES (
        ${first_name}, ${last_name}
        );
      `;
  } catch (error) {
    const dbError = await error;
    if (dbError instanceof Error) throw dbError;
  }
}

export async function postBook(book: IBook) {
  const {
    author_id,
    title,
    read,
    in_progress,
    rating,
    publisher,
    edition,
    notes,
  } = book;

  try {
    await sql`INSERT INTO books
    (author_id, title, read, in_progress, rating, publisher, edition, notes)
    VALUES (
      ${author_id}, ${title}, ${read}, ${in_progress}, ${rating}, ${publisher},
      ${edition}, ${notes}
    )
    `;
  } catch (error) {
    const dbError = await error;
    if (dbError instanceof Error) throw dbError;
  }
}
