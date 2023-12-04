import { db } from '@vercel/postgres';
import type { VercelPoolClient } from '@vercel/postgres';

async function seedUsers(client: VercelPoolClient) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    const createTable = await client.sql`CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      first_name VARCHAR(255) NOT NULL,
      last_name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
      );
    `;

    console.log(`Created "users" table`);

    return createTable;
  } catch (error) {
    console.error('Error creating users table -> error', error);
    throw error;
  }
}

async function seedAuthors(client: VercelPoolClient) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    const createTable = await client.sql`CREATE TABLE IF NOT EXISTS authors (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      first_name VARCHAR(255) NOT NULL,
      last_name VARCHAR(255) NOT NULL
      );
    `;
    return createTable;
  } catch (error) {
    console.error('Create authors table error: ', error);
    throw error;
  }
}

async function seedBooks(client: VercelPoolClient) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    const createTable = await client.sql`CREATE TABLE IF NOT EXISTS books (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      author_id UUID NOT NULL REFERENCES authors,
      title TEXT,
      read BOOLEAN NOT NULL,
      start_reading DATE NOT NULL,
      stop_reading DATE NOT NULL,
      in_progress BOOLEAN NOT NULL
      rating SMALLINT NOT NULL CHECK (rating BETWEEN 0 AND 5)
      );
    `;
  } catch (error) {
    console.error('Create books table error: ', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedUsers(client);
  await seedAuthors(client);
  await seedBooks(client);
}

main().catch((err) => {
  console.error('Database seeding error: ', err);
});
