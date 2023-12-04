import { sql } from '@vercel/postgres';
import { IUser, IAuthor, IBook } from './definitions';

export async function postAuthor(author: IAuthor) {
  const { first_name, last_name } = author;

  try {
    const newAuthor = sql`INSERT INTO authors (first_name last_name)
      VALUES (
        ${first_name}, ${last_name}
        );
      `;
    console.log('newAuthor result: ', newAuthor);
  } catch (error) {
    console.error('Add new author error: ', error);
  }
}
