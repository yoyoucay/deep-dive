#  News Deep Dive - Next.js News Platform

A modern, premium news website built with Next.js 14, featuring NeonDB (PostgreSQL) integration, Prisma ORM, and a luxurious gold-themed design.

##  Features

- **Next.js 14** with App Router
- **NeonDB** (PostgreSQL) on Vercel for scalable database
- **Prisma ORM** for type-safe database queries
- **Modern UI** with gold accents and dark theme
- **News Archive** with year/month filtering
- **Image Modals** with route interception
- **Parallel Routes** for advanced layouts
- **Server Components** for optimal performance
- **Responsive Design** for all devices

##  Quick Start

### Prerequisites

- Node.js 18+ installed
- A NeonDB account (free tier available on Vercel)

### 1. Clone and Install

```bash
# Clone the repository
git clone <your-repo-url>
cd deep-dive

# Install dependencies
npm install
```

### 2. Database Setup

#### Option A: Using Vercel + NeonDB (Recommended)

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Navigate to **Storage**  **Create Database**  **Neon Postgres**
3. Name your database: `news`
4. Copy your connection string

#### Option B: Using Local Neon

```bash
npx create-db
```

### 3. Environment Configuration

Create a `.env.local` file in the root directory:

```env
# NeonDB Connection
DATABASE_URL="postgresql://username:password@host/news?sslmode=require"
```

**Example:**
```env
DATABASE_URL="postgresql://neondb_owner:npg_xxxxx@ep-xxx.aws.neon.tech/news?sslmode=require"
```

### 4. Database Migration & Seeding

```bash
# Generate Prisma Client
npx prisma generate

# Create the news table and migrate data (if migrating from SQLite)
npm run migrate

# OR Seed fresh data using Prisma
npm run seed
```

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

##  Available Scripts

### Development

```bash
npm run dev          # Start development server on http://localhost:3000
npm run build        # Build production application
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Database

```bash
npm run seed               # Seed database with dummy news data (Prisma)
npm run migrate            # Migrate from SQLite to NeonDB
npm run prisma:generate    # Generate Prisma Client
npm run prisma:studio      # Open Prisma Studio (Database GUI)
```

### Prisma Commands

```bash
npx prisma db seed         # Run Prisma seed
npx prisma studio          # Open database GUI
npx prisma db pull         # Introspect database
npx prisma migrate dev     # Create and apply migrations
npx prisma generate        # Generate Prisma Client
```

##  Project Structure

```
deep-dive/
 app/
    (content)/          # News content routes
       archive/        # Archive with filters
          @archive/   # Parallel route for archive list
          @latest/    # Parallel route for latest news
       news/           # News articles
           [slug]/     # Dynamic news pages
               @modal/ # Route interception for modals
    (marketing)/        # Marketing pages
    api/                # API routes
    globals.css         # Global styles
 components/
    main-header.js      # Header component
    modal-backdrop.js   # Modal backdrop
    nav-link.js         # Navigation links
    news-list.js        # News list component
 lib/
    news.js             # News data functions
    utils.js            # Utility functions
 prisma/
    schema.prisma       # Database schema
    seed.js             # Prisma seed script
 public/
    images/news/        # News images
 scripts/
    migrate-to-neon.mjs # Migration script
    seed.mjs            # Alternative seed script
 middleware.js           # Next.js middleware
```

##  Database Schema

```prisma
model News {
  id      Int    @id @default(autoincrement())
  slug    String @unique
  title   String
  content String
  date    String
  image   String

  @@map("news")
}
```

##  Design Features

- **Premium Gold Theme**: Luxurious gold (#d4af37) accents on dark background
- **Glass Morphism**: Modern backdrop blur effects
- **Smooth Animations**: Hover effects, transitions, and loading states
- **Custom Fonts**: Playfair Display for headings, Merriweather for body
- **Responsive Grid**: Auto-fill card layout
- **Custom Scrollbar**: Styled with gold gradient

##  Seeding Data

The project includes 10 dummy news articles:

1. Will AI Replace Humans? (2021-07-01)
2. A Plague of Beavers (2022-05-01)
3. The beauty of landscape (2022-07-01)
4. Hiking is the best! (2024-01-01)
5. Spend more time together! (2024-03-01)
6. Space Tourism Becomes More Accessible (2025-09-12)
7. Ocean Cleanup Initiative Shows Promising Results (2025-10-05)
8. Quantum Computing Reaches New Milestone (2025-11-15)
9. Building Sustainable Cities for Tomorrow (2025-12-20)
10. AI Transforms Healthcare Diagnosis (2026-01-03)

To reseed the database:

```bash
npm run seed
```

##  Deployment

### Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [Vercel](https://vercel.com)
   - Import your repository
   - Add environment variables in project settings

3. **Add Environment Variables**
   ```
   DATABASE_URL=your_neondb_connection_string
   ```

4. **Deploy**
   - Vercel will automatically build and deploy
   - Run seed command in Vercel''s terminal if needed

### Environment Variables on Vercel

Add these in your Vercel project settings:

| Variable | Value |
|----------|-------|
| `DATABASE_URL` | Your NeonDB connection string |

##  Troubleshooting

### Database Connection Issues

```bash
# Test database connection
npx prisma db pull
```

### Regenerate Prisma Client

```bash
npx prisma generate
```

### Clear and Reseed Database

```bash
npm run seed
```

### Build Issues

```bash
# Clean build cache
rm -rf .next
npm run build
```

##  Tech Stack

- **Framework**: Next.js 14
- **Database**: NeonDB (PostgreSQL)
- **ORM**: Prisma
- **Styling**: CSS Modules
- **Fonts**: Google Fonts (Playfair Display, Merriweather, Inter)
- **Deployment**: Vercel

##  Useful Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [NeonDB Documentation](https://neon.tech/docs)
- [Vercel Documentation](https://vercel.com/docs)

##  License

This project is open source and available under the MIT License.

##  Contributing

Contributions, issues, and feature requests are welcome!

---

Built with  using Next.js and NeonDB
