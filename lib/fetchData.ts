import { sql } from "@vercel/postgres";

export async function getAuthors(search: string){
  try {
    const authors = await sql`SELECT * FROM authors`;
  } catch (error) {

  }
}