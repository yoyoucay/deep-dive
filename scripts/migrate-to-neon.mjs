import { config } from 'dotenv';
import { neon } from '@neondatabase/serverless';
import sqlite from 'better-sqlite3';

config({ path: '.env.local' });

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  console.error('Please set DATABASE_URL environment variable');
  process.exit(1);
}

const sql = neon(DATABASE_URL);
const db = sqlite('data.db');

async function migrate() {
  try {
    console.log('Creating news table in NeonDB...');
    
    // Create the news table
    await sql`
      CREATE TABLE IF NOT EXISTS news (
        id SERIAL PRIMARY KEY,
        slug TEXT UNIQUE NOT NULL,
        title TEXT NOT NULL,
        content TEXT NOT NULL,
        date TEXT NOT NULL,
        image TEXT NOT NULL
      )
    `;

    console.log('Table created successfully!');

    // Get data from SQLite
    console.log('Reading data from SQLite...');
    const newsData = db.prepare('SELECT * FROM news').all();
    console.log(`Found ${newsData.length} news items`);

    // Insert data into NeonDB
    console.log('Inserting data into NeonDB...');
    for (const item of newsData) {
      await sql`
        INSERT INTO news (slug, title, content, date, image)
        VALUES (${item.slug}, ${item.title}, ${item.content}, ${item.date}, ${item.image})
        ON CONFLICT (slug) DO NOTHING
      `;
    }

    console.log('Migration completed successfully!');
    
    // Verify the data
    const count = await sql`SELECT COUNT(*) as count FROM news`;
    console.log(`Total records in NeonDB: ${count[0].count}`);
    
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  }
}

migrate();