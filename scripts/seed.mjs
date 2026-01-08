import { config } from 'dotenv';
import { neon } from '@neondatabase/serverless';

config({ path: '.env.local' });

const sql = neon(process.env.DATABASE_URL);

const SEED_NEWS = [
  {
    slug: 'will-ai-replace-humans',
    title: 'Will AI Replace Humans?',
    image: 'ai-robot.jpg',
    date: '2021-07-01',
    content: 'Since late 2022 AI is on the rise and therefore many people worry whether AI will replace humans. The answer is not that simple. AI is a tool that can be used to automate tasks, but it can also be used to augment human capabilities. The future is not set in stone, but it is clear that AI will play a big role in the future. The question is how we will use it.',
  },
  {
    slug: 'beaver-plague',
    title: 'A Plague of Beavers',
    image: 'beaver.jpg',
    date: '2022-05-01',
    content: 'Beavers are taking over the world. They are building dams everywhere and flooding entire cities. What can we do to stop them?',
  },
  {
    slug: 'couple-cooking',
    title: 'Spend more time together!',
    image: 'couple-cooking.jpg',
    date: '2024-03-01',
    content: 'Cooking together is a great way to spend more time with your partner. It is fun and you get to eat something delicious afterwards. What are you waiting for? Get cooking!',
  },
  {
    slug: 'hiking',
    title: 'Hiking is the best!',
    image: 'hiking.jpg',
    date: '2024-01-01',
    content: 'Hiking is a great way to get some exercise and enjoy the great outdoors. It is also a great way to clear your mind and reduce stress. So what are you waiting for? Get out there and start hiking!',
  },
  {
    slug: 'landscape',
    title: 'The beauty of landscape',
    image: 'landscape.jpg',
    date: '2022-07-01',
    content: 'Landscape photography is a great way to capture the beauty of nature. It is also a great way to get outside and enjoy the great outdoors. So what are you waiting for? Get out there and start taking some pictures!',
  },
  {
    slug: 'quantum-computing-breakthrough',
    title: 'Quantum Computing Reaches New Milestone',
    image: 'ai-robot.jpg',
    date: '2025-11-15',
    content: 'Scientists have achieved a breakthrough in quantum computing that could revolutionize technology as we know it. The new quantum processor demonstrates unprecedented stability and computational power, bringing us closer to solving complex problems in medicine, climate science, and cryptography.',
  },
  {
    slug: 'sustainable-cities-2026',
    title: 'Building Sustainable Cities for Tomorrow',
    image: 'landscape.jpg',
    date: '2025-12-20',
    content: 'Urban planners worldwide are implementing innovative green technologies to create sustainable cities. From vertical farms to solar-powered infrastructure, these initiatives are transforming how we live and interact with our environment.',
  },
  {
    slug: 'ocean-cleanup-success',
    title: 'Ocean Cleanup Initiative Shows Promising Results',
    image: 'beaver.jpg',
    date: '2025-10-05',
    content: 'The global ocean cleanup project has successfully removed over 100,000 tons of plastic waste from the Pacific Ocean. This milestone marks a significant step forward in addressing marine pollution and protecting ocean ecosystems.',
  },
  {
    slug: 'space-tourism-accessible',
    title: 'Space Tourism Becomes More Accessible',
    image: 'hiking.jpg',
    date: '2025-09-12',
    content: 'Private space companies announce new affordable packages for space tourism, making trips to the edge of space accessible to more people than ever before. The democratization of space travel is finally becoming a reality.',
  },
  {
    slug: 'ai-healthcare-revolution',
    title: 'AI Transforms Healthcare Diagnosis',
    image: 'ai-robot.jpg',
    date: '2026-01-03',
    content: 'Artificial intelligence systems are now detecting diseases earlier and more accurately than traditional methods. Hospitals worldwide are adopting AI-powered diagnostic tools that are saving lives and reducing healthcare costs.',
  },
];

async function seed() {
  try {
    console.log('🌱 Starting database seeding...');
    
    // Clear existing data
    console.log('Clearing existing news data...');
    await sql`DELETE FROM news`;
    
    // Reset the sequence
    await sql`ALTER SEQUENCE news_id_seq RESTART WITH 1`;
    
    console.log('Inserting seed data...');
    for (const item of SEED_NEWS) {
      await sql`
        INSERT INTO news (slug, title, content, date, image)
        VALUES (${item.slug}, ${item.title}, ${item.content}, ${item.date}, ${item.image})
      `;
    }
    
    const count = await sql`SELECT COUNT(*) as count FROM news`;
    console.log(`✅ Successfully seeded ${count[0].count} news articles!`);
    
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  }
}

seed();