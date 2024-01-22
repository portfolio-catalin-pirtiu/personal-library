import { sql } from '@vercel/postgres';
import { QueryResult } from '@vercel/postgres';
import { IBookWithAuthor } from './definitions';

export async function getAuthors(search: string | null) {
  if (!search) search = '';
  try {
    const { rows } = await sql`
      SELECT * FROM authors
      WHERE 
      first_name ILIKE ('%' || ${search} || '%') OR
      last_name ILIKE ('%' || ${search} || '%')
      `;
    return rows;
  } catch (error) {
    throw error;
  }
}

export async function getBooks(search: string | null) {
  if (!search) search = '';
  try {
    const { rows } = await sql<QueryResult<IBookWithAuthor>>`
      SELECT * FROM books
      INNER JOIN authors ON books.author_id = authors.author_id
      ;`;
    return rows;
  } catch (error) {
    throw error;
  }
}
