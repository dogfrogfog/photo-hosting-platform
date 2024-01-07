## Getting Started

1. Create `.env` file with the correct values;
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Run dev server:
   ```bash
   pnpm dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Framework

Next.js + Tailwind

## Database

PostgreSQL + Drizzle orm

## Auth

Clerk (including webhook to sync users with database)

## Images hosting

Cloudinary

## Functionality

- Unsigned user can view public albums
- Signed **non-premium** user can view public albums and and can fill out the form to become a **premium** user
- Signed **premium** user can create multiple albums, edit and delete existing albums

## Todo:
- [ ] add OG image
- [ ] add metadata to each page
- [ ] add secret link to share private albums
- [ ] generate logo and optimize design
- [ ] generate name, landing, titles and buttons texts
- [ ] optimize core web vitals
