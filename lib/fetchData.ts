import { sql } from '@vercel/postgres';

export async function getAuthors(search: string | null) {
  try {
    const { rows } = await sql`SELECT * FROM authors;`;
    return rows;
  } catch (error) {}
}
