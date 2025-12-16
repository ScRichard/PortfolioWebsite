# PostgreSQL & Admin Panel Setup Guide

## Prerequisites

Before setting up the PostgreSQL database and admin panel, ensure you have:

- PostgreSQL installed and running
- Node.js 18+ installed
- The portfolio website project set up

## Step 1: Install PostgreSQL

### Windows
1. Download PostgreSQL from [postgresql.org](https://www.postgresql.org/download/windows/)
2. Run the installer and follow the setup wizard
3. Remember the password you set for the `postgres` user
4. PostgreSQL will run on `localhost:5432` by default

### macOS
```bash
brew install postgresql@15
brew services start postgresql@15
```

### Linux
```bash
sudo apt-get install postgresql postgresql-contrib
sudo systemctl start postgresql
```

## Step 2: Create Database

Connect to PostgreSQL and create the database:

```bash
psql -U postgres

# In the PostgreSQL prompt:
CREATE DATABASE portfolio_db;
\q
```

## Step 3: Configure Environment Variables

1. Copy the `.env.example` file to `.env.local`:
```bash
cp .env.example .env.local
```

2. Update `.env.local` with your PostgreSQL credentials:
```
DATABASE_URL="postgresql://postgres:your_password@localhost:5432/portfolio_db"
ADMIN_PASSWORD="your_secure_admin_password"
```

Replace:
- `your_password` with the PostgreSQL password
- `your_secure_admin_password` with a strong admin password

## Step 4: Generate Database Schema

Run the Drizzle Kit migration:

```bash
npm run db:push
```

This will create the `blog_posts` table in your database.

## Step 5: Start the Development Server

```bash
npm run dev
```

## Step 6: Access Admin Panel

1. Open your browser to `http://localhost:3001/admin/login`
2. Enter the admin password you set in `.env.local`
3. You'll be redirected to the dashboard where you can create, edit, and delete blog posts

## Database Schema

The blog posts table includes:

- `id`: Unique identifier
- `title`: Post title (max 255 characters)
- `slug`: URL-friendly slug (max 255 characters, must be unique)
- `excerpt`: Short description (max 500 characters)
- `content`: Full post content (supports markdown)
- `category`: Post category
- `tags`: Comma-separated tags
- `featured`: Boolean flag for featured posts
- `readTime`: Estimated reading time in minutes
- `published`: Whether the post is published
- `createdAt`: Creation timestamp
- `updatedAt`: Last update timestamp

## API Endpoints

### Get All Published Posts
```bash
GET /api/blog
```

### Get Single Post
```bash
GET /api/blog/[id]
```

### Create Post (requires admin password)
```bash
POST /api/blog
Headers: x-admin-password: [your_password]
Body: {
  "title": "Post Title",
  "slug": "post-slug",
  "excerpt": "Short description",
  "content": "Full content here",
  "category": "Web Development",
  "tags": ["nextjs", "react"],
  "featured": false,
  "readTime": 5
}
```

### Update Post (requires admin password)
```bash
PUT /api/blog/[id]
Headers: x-admin-password: [your_password]
```

### Delete Post (requires admin password)
```bash
DELETE /api/blog/[id]
Headers: x-admin-password: [your_password]
```

## Troubleshooting

### Connection Error
- Ensure PostgreSQL is running
- Check your DATABASE_URL in `.env.local`
- Verify the database exists

### Migration Failed
```bash
# Reset and try again
npm run db:push
```

### Forgot Admin Password
Change it in `.env.local` and restart the server

## Security Notes

⚠️ **Important**: The current admin authentication is basic. For production:

1. Implement proper JWT-based authentication
2. Use bcrypt for password hashing
3. Add rate limiting to API endpoints
4. Use HTTPS only
5. Consider using NextAuth.js or similar

## Next Steps

- Customize blog post styles in `src/components/Blog.tsx`
- Add markdown rendering to blog posts
- Implement search and filtering functionality
- Add comments to blog posts
