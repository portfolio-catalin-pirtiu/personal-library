const { db } = require('@vercel/postgres');

async function seedUsers(client) {
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

    return createTable;
  } catch (error) {
    throw error;
  }
}

async function seedAuthors(client) {
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
    throw error;
  }
}

async function seedBooks(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    const createTable = await client.sql`CREATE TABLE IF NOT EXISTS books (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      author_id UUID NOT NULL REFERENCES authors,
      title TEXT,
      read BOOLEAN NOT NULL,
      start_reading DATE NOT NULL,
      stop_reading DATE NOT NULL,
      in_progress BOOLEAN NOT NULL,
      rating SMALLINT NOT NULL CHECK (rating BETWEEN 0 AND 5)
      );
    `;

    return createTable;
  } catch (error) {
    throw error;
  }
}

async function changeBooks(client) {
  try {
    const changeTable = await client.sql`ALTER TABLE books
      ALTER COLUMN title SET NOT NULL,
      ALTER COLUMN start_reading DROP NOT NULL,
      ALTER COLUMN stop_reading DROP NOT NULL,
      ADD COLUMN publisher TEXT,
      ADD COLUMN edition TEXT,
      ADD COLUMN notes TEXT
      ;`;
  } catch (error) {
    throw error;
  }
}
async function main() {
  const client = await db.connect();

  await seedUsers(client);
  await seedAuthors(client);
  await seedBooks(client);
  await changeBooks(client);
}

main().catch((error) => {
  throw error;
});
