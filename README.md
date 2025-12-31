# Ahmed Portfolio

A modern portfolio website built with Next.js 15, React 19, and PostgreSQL.

## Features

- 🎨 Modern UI with dark glassmorphism theme
- 📱 Fully responsive design
- 🌐 Multi-language support (English/Arabic)
- 📧 Contact form with database persistence
- ⚡ Fast development with Next.js
- 🚀 Serverless-ready for Vercel deployment
- 🔥 Built with Next.js App Router

## Prerequisites

- Node.js 18+ 
- A PostgreSQL database (Neon, Supabase, or Vercel Postgres recommended)

## Local Setup

### 1. Clone and Install

```bash
git clone <your-repo-url>
cd ahmed-portfolio
npm install
```

### 2. Set Up Environment Variables

Create a `.env.local` file in the project root:

```env
DATABASE_URL=postgresql://user:password@host:5432/database?sslmode=require
```

**Getting a Database URL:**

- **Neon** (Recommended for Vercel): 
  1. Sign up at [neon.tech](https://neon.tech)
  2. Create a new project
  3. Copy the pooled connection string (ends with `?sslmode=require`)
  
- **Supabase**:
  1. Sign up at [supabase.com](https://supabase.com)
  2. Create a new project
  3. Go to Settings > Database
  4. Copy the connection string

- **Vercel Postgres**:
  1. Add Postgres database in your Vercel project
  2. Copy the connection string from the dashboard

### 3. Push Database Schema

```bash
npm run db:push
```

This creates the `messages` table in your database.

### 4. Run Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

## Deployment to Vercel

### 1. Push to GitHub

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### 2. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Add environment variable:
   - Key: `DATABASE_URL`
   - Value: Your database connection string
4. Deploy

Vercel will automatically detect Next.js and configure the build settings.

### 3. Push Schema to Production Database

After deployment, push the schema to your production database:

```bash
npm run db:push
```

Or set `DATABASE_URL` temporarily and run:

```bash
DATABASE_URL=your_production_url npm run db:push
```

## Project Structure

```
app/
├── api/              # API routes
├── components/       # React components
├── hooks/            # Custom React hooks
├── lib/              # Utilities and helpers
├── page.tsx          # Home page
├── projects/         # Projects pages
├── articles/         # Articles pages
├── profile/          # Profile page
└── contact/          # Contact page

shared/
└── schema.ts         # Database schema (Drizzle ORM)
```

## Database Schema

The project uses Drizzle ORM with the following schema:

- **messages**: Stores contact form submissions
  - `id` (serial, primary key)
  - `name` (text)
  - `email` (text)
  - `message` (text)
  - `createdAt` (timestamp)

## Scripts

- `npm run dev` - Start development server (port 3000)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:push` - Push database schema changes
- `npm run check` - Type check with TypeScript

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Frontend**: React 19
- **Database**: PostgreSQL (via Neon HTTP driver)
- **ORM**: Drizzle ORM
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI (shadcn/ui)
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **State Management**: TanStack Query

## Security Notes

- Never commit `.env.local` or `.env` files
- Keep your `DATABASE_URL` secret
- Use environment variables for all sensitive configuration
- The `.gitignore` file is configured to exclude sensitive files

## Troubleshooting

### "DATABASE_URL must be set" Error

Make sure you've created `.env.local` with your `DATABASE_URL`. The file should be in the project root.

### Connection Issues

- Ensure your database allows connections from your IP (for local development)
- Check that your connection string includes `?sslmode=require` for Neon
- Verify your database credentials are correct

### Schema Push Fails

- Ensure `DATABASE_URL` is set correctly
- Check that your database user has CREATE TABLE permissions
- Verify the connection string format matches your provider

### Build Errors

- Run `npm install` to ensure all dependencies are installed
- Check that all environment variables are set
- Verify TypeScript types with `npm run check`

## License

MIT
