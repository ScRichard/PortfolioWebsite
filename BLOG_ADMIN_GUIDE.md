# Blog Management System Guide

## Quick Start

### 1. Setup PostgreSQL Database

Follow the [PostgreSQL Setup Guide](./POSTGRESQL_SETUP.md) to:
- Install PostgreSQL
- Create a database
- Configure environment variables

### 2. Initialize Database Schema

```bash
npm run db:push
```

### 3. Access Admin Panel

1. Start the development server: `npm run dev`
2. Go to `http://localhost:3001/admin/login`
3. Enter your admin password (from `.env.local`)

## Features

### Admin Dashboard
- **Create Posts**: Write new blog posts with title, content, category, tags, and more
- **Edit Posts**: Update existing posts
- **Delete Posts**: Remove posts from the database
- **Featured Posts**: Mark posts as featured for homepage display
- **Auto-save**: Posts are automatically saved to PostgreSQL

### Blog Display
- **Published Posts**: Only published posts appear on the public blog page
- **Featured Section**: Featured posts are highlighted at the top
- **Metadata**: Each post displays category, publish date, read time, and tags
- **Responsive**: Mobile-friendly layout for all screen sizes

## Admin Workflow

### Creating a New Post

1. Login to the admin dashboard
2. Click "New Post"
3. Fill in the form:
   - **Title**: Post title (required)
   - **Slug**: URL-friendly identifier, e.g., `my-first-post` (required, must be unique)
   - **Category**: Post category, e.g., "Web Development"
   - **Excerpt**: Short description (required)
   - **Content**: Full post content (supports markdown)
   - **Tags**: Comma-separated tags, e.g., `nextjs, react, web-development`
   - **Read Time**: Estimated minutes to read (default: 5)
   - **Featured**: Check to feature on homepage
4. Click "Create Post"
5. Post appears immediately on the blog page

### Editing a Post

1. From the dashboard, click the edit icon (pencil) next to a post
2. Modify the fields as needed
3. Click "Update Post"

### Deleting a Post

1. From the dashboard, click the delete icon (trash) next to a post
2. Confirm deletion
3. Post is removed from the database

## Database Structure

### blog_posts Table

| Column | Type | Description |
|--------|------|-------------|
| id | SERIAL | Unique identifier (primary key) |
| title | VARCHAR(255) | Post title |
| slug | VARCHAR(255) | URL-friendly slug (unique) |
| excerpt | TEXT | Short description |
| content | TEXT | Full post content |
| category | VARCHAR(100) | Post category |
| tags | TEXT | Comma-separated tags |
| featured | BOOLEAN | Featured post flag |
| readTime | SERIAL | Reading time in minutes |
| published | BOOLEAN | Publication status |
| createdAt | TIMESTAMP | Creation date |
| updatedAt | TIMESTAMP | Last modified date |

## API Documentation

### Fetch All Published Posts
```bash
GET /api/blog

Response:
[
  {
    "id": 1,
    "title": "Blog Title",
    "slug": "blog-title",
    "excerpt": "Short description",
    "category": "Web Development",
    "tags": "nextjs,react",
    "featured": true,
    "readTime": 5,
    "createdAt": "2024-12-16T..."
  }
]
```

### Create New Post (Admin Only)
```bash
POST /api/blog
Headers: {
  "x-admin-password": "your_admin_password",
  "Content-Type": "application/json"
}

Body: {
  "title": "My New Post",
  "slug": "my-new-post",
  "excerpt": "This is the excerpt",
  "content": "Full content here...",
  "category": "Web Development",
  "tags": ["nextjs", "react"],
  "featured": false,
  "readTime": 5
}
```

### Update Post (Admin Only)
```bash
PUT /api/blog/[id]
Headers: {
  "x-admin-password": "your_admin_password",
  "Content-Type": "application/json"
}

Body: { ...same as create }
```

### Delete Post (Admin Only)
```bash
DELETE /api/blog/[id]
Headers: {
  "x-admin-password": "your_admin_password"
}
```

## Environment Variables

Create a `.env.local` file:

```
DATABASE_URL="postgresql://postgres:password@localhost:5432/portfolio_db"
ADMIN_PASSWORD="your_secure_password"
```

## File Structure

```
src/
├── app/
│   ├── api/
│   │   └── blog/
│   │       ├── route.ts          # GET/POST blog posts
│   │       └── [id]/
│   │           └── route.ts      # GET/PUT/DELETE individual post
│   ├── admin/
│   │   ├── login/
│   │   │   └── page.tsx          # Admin login page
│   │   └── dashboard/
│   │       └── page.tsx          # Admin dashboard
│   └── page.tsx                   # Main page with Blog component
├── components/
│   ├── Blog.tsx                   # Blog display component
│   ├── AdminLogin.tsx             # Login form
│   └── BlogForm.tsx               # Blog creation/editing form
├── config/
│   └── blog.ts                    # Static blog data (for reference)
├── db/
│   ├── index.ts                   # Database connection
│   ├── schema.ts                  # Database schema
│   └── migrations/                # Auto-generated migrations
└── lib/
    └── validations/
        └── blog.ts                # Zod schemas
```

## Common Issues

### "Cannot connect to database"
- Ensure PostgreSQL is running
- Check DATABASE_URL in `.env.local`
- Verify database exists: `psql -U postgres -c "SELECT datname FROM pg_database;"`

### "Table does not exist"
- Run `npm run db:push` to create schema
- Check migrations ran successfully

### "Admin login not working"
- Verify ADMIN_PASSWORD in `.env.local`
- Check browser console for errors
- Ensure password is entered correctly (case-sensitive)

### "Posts not appearing"
- Check if posts have `published: true` in database
- Verify blog page is fetching from `/api/blog`
- Check browser DevTools Network tab for API errors

## Next Steps

- Add markdown rendering with `react-markdown`
- Implement search and filtering
- Add pagination for large post lists
- Create individual post pages with full content display
- Add comments system
- Implement social sharing buttons
- Add reading progress indicator
