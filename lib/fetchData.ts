import { sql } from '@vercel/postgres';

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
    const { rows } = await sql`
      SELECT * FROM books
      INNER JOIN authors ON books.author_id = authors.id
      ;`;
    return rows;
  } catch (error) {
    throw error;
  }
}
