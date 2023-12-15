import { sql } from '@vercel/postgres';
import { IAuthor } from './definitions';

export async function postAuthor(author: IAuthor) {
  const { first_name, last_name } = author;

  try {
    sql`INSERT INTO authors (first_name, last_name)
      VALUES (
        ${first_name}, ${last_name}
        );
      `;
  } catch (error) {
    const dbError = await error;
    if (dbError instanceof Error) throw dbError;
  }
}
