# Ahmed Portfolio

A modern portfolio website built with Express, React, Vite, and PostgreSQL.

## Features

- 🎨 Modern UI with dark glassmorphism theme
- 📱 Fully responsive design
- 🌐 Multi-language support (English/Arabic)
- 📧 Contact form with database persistence
- ⚡ Fast development with Vite
- 🚀 Serverless-ready for Vercel deployment

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

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your database connection string:

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

The app will be available at `http://localhost:5000`

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

### 3. Push Schema to Production Database

After deployment, push the schema to your production database:

```bash
npm run db:push
```

Or set `DATABASE_URL` temporarily and run:

```bash
DATABASE_URL=your_production_url npm run db:push
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

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run db:push` - Push database schema changes
- `npm run check` - Type check with TypeScript

## Tech Stack

- **Backend**: Express.js
- **Frontend**: React + Vite
- **Database**: PostgreSQL (via Neon HTTP driver)
- **ORM**: Drizzle ORM
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI

## Security Notes

- Never commit `.env.local` or `.env` files
- Keep your `DATABASE_URL` secret
- Use environment variables for all sensitive configuration

## Troubleshooting

### "DATABASE_URL must be set" Error

Make sure you've created `.env.local` with your `DATABASE_URL`. The file should be in the project root, not in a subdirectory.

### Connection Issues

- Ensure your database allows connections from your IP (for local development)
- Check that your connection string includes `?sslmode=require` for Neon
- Verify your database credentials are correct

### Schema Push Fails

- Ensure `DATABASE_URL` is set correctly
- Check that your database user has CREATE TABLE permissions
- Verify the connection string format matches your provider

## License

MIT

