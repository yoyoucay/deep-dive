import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL);

export async function getAllNews() {
  const news = await sql`SELECT * FROM news ORDER BY date DESC`;
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return news;
}

export async function getNewsItem(slug) {
  const newsItem = await sql`SELECT * FROM news WHERE slug = ${slug}`;
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return newsItem[0];
}

export async function getLatestNews() {
  const latestNews = await sql`SELECT * FROM news ORDER BY date DESC LIMIT 3`;
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return latestNews;
}

export async function getAvailableNewsYears() {
  const years = await sql`
    SELECT DISTINCT EXTRACT(YEAR FROM date::date) as year 
    FROM news 
    ORDER BY year DESC
  `;
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return years.map((year) => year.year.toString());
}

export async function getAvailableNewsMonths(year) {
  const months = await sql`
    SELECT DISTINCT EXTRACT(MONTH FROM date::date) as month 
    FROM news 
    WHERE EXTRACT(YEAR FROM date::date) = ${year}
    ORDER BY month
  `;
  return months.map((month) => month.month.toString().padStart(2, '0'));
}

export async function getNewsForYear(year) {
  const news = await sql`
    SELECT * FROM news 
    WHERE EXTRACT(YEAR FROM date::date) = ${year}
    ORDER BY date DESC
  `;
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return news;
}

export async function getNewsForYearAndMonth(year, month) {
  const news = await sql`
    SELECT * FROM news 
    WHERE EXTRACT(YEAR FROM date::date) = ${year}
    AND EXTRACT(MONTH FROM date::date) = ${month}
    ORDER BY date DESC
  `;
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return news;
}