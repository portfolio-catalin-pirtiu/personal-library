import { sql } from '@vercel/postgres';
import { IAuthor } from './definitions';

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
