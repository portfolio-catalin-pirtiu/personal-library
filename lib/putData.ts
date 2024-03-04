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
      author_id = ${author_id},
      title = ${title},
      rating = ${rating},
      publisher = ${publisher},
      edition = ${edition},
      notes = ${notes}
      WHERE
      book_id = ${id};`;
  } catch (error) {
    const dbError = await error;
    if (dbError instanceof Error) throw dbError;
  }
}

export async function postStartStopReading({
  id = '',
  slug = 'start',
  timestamp = '',
}: {
  id: string;
  slug: 'start' | 'stop';
  timestamp: string;
}) {
  if (slug === 'start') {
    try {
      await sql`UPDATE books
      SET 
      start_reading = ${timestamp},
      stop_reading = ${null},
      in_progress = ${true},
      read = ${false}
      WHERE
      book_id = ${id};`;
    } catch (error) {
      throw error;
    }
  } else {
    try {
      await sql`UPDATE books
        SET
        stop_reading = ${timestamp},
        start_reading = ${null},
        in_progress = ${false},
        read = ${true}
        WHERE
        book_id = ${id};
      `;
    } catch (error) {
      throw error;
    }
  }
}
