# Getting Started Guide

## 📋 Prerequisites

- **Node.js**: 18.0 or higher
- **npm** or **yarn** or **pnpm**
- **Git** (for version control)

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx         # Root layout with metadata & styling
│   ├── page.tsx           # Home page (assembles all sections)
│   └── globals.css        # Global styles & Tailwind directives
│
├── components/
│   ├── Navbar.tsx         # Navigation with mobile menu
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About section
│   ├── Skills.tsx         # Skills section (data-driven)
│   ├── Projects.tsx       # Projects section (data-driven)
│   ├── Experience.tsx     # Experience timeline
│   ├── Contact.tsx        # Contact form & social links
│   └── Footer.tsx         # Footer with links
│
├── config/
│   ├── skills.ts          # Skills data configuration
│   ├── projects.ts        # Projects data configuration
│   └── experience.ts      # Experience data configuration
│
└── lib/
    └── utils.ts           # Utility functions
```

## 🛠️ Customization

### Updating Personal Information

#### 1. **Navbar & Footer**
Edit `src/components/Navbar.tsx` and `src/components/Footer.tsx`:
- Change social media links
- Update navigation items

#### 2. **Hero Section**
Edit `src/components/Hero.tsx`:
- Update name, role, and description
- Modify CTA button links

#### 3. **About Section**
Edit `src/components/About.tsx`:
- Change personal description
- Update location and university
- Modify status badge

#### 4. **Skills Data**
Edit `src/config/skills.ts`:

```typescript
export const skillsData: SkillCategory[] = [
  {
    category: 'Languages',
    skills: [
      { name: 'Rust', level: 'advanced' },
      // Add more skills...
    ],
  },
  // Add more categories...
]
```

**Skill Levels**: `'beginner'` | `'intermediate'` | `'advanced'` | `'expert'`

#### 5. **Projects Data**
Edit `src/config/projects.ts`:

```typescript
export const projectsData: Project[] = [
  {
    id: 'unique-id',
    title: 'Project Title',
    description: 'Short description',
    longDescription: 'Detailed description (optional)',
    technologies: ['Tech1', 'Tech2'],
    metrics: [
      { label: 'Users', value: '1000+' },
    ],
    links: {
      github: 'https://github.com/...',
      live: 'https://project.com',
      youtube: 'https://youtube.com/...',
    },
    featured: true, // Shows featured badge
  },
]
```

#### 6. **Experience Data**
Edit `src/config/experience.ts`:

```typescript
export const experienceData: Experience[] = [
  {
    title: 'Position',
    company: 'Company Name',
    period: 'Start - End',
    description: 'What you did',
    achievements: ['Achievement 1', 'Achievement 2'],
  },
]
```

### Contact Form Integration

The contact form is currently set up with client-side validation. To enable email delivery, integrate with a service:

**Option 1: EmailJS (Recommended)**

```bash
npm install @emailjs/browser
```

Update `src/components/Contact.tsx`:

```typescript
import emailjs from '@emailjs/browser'

// Initialize
emailjs.init('YOUR_PUBLIC_KEY')

// In handleSubmit:
const result = await emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
  }
)
```

**Option 2: Formspree**

Replace form submission with:
```typescript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  body: JSON.stringify(formData),
  headers: { 'Content-Type': 'application/json' },
})
```

### Styling & Colors

#### Dark Mode
Already enabled by default. Tailwind uses `dark:` prefix for dark mode styles.

#### Color Scheme
Edit `tailwind.config.ts` to customize colors:

```typescript
theme: {
  extend: {
    colors: {
      primary: '#3B82F6',          // Blue
      'dark-bg': '#0F172A',        // Dark background
      'dark-card': '#1E293B',      // Dark card background
      'dark-border': '#334155',    // Dark border
    },
  },
}
```

#### Animations
Framer Motion is integrated. Customize animations in component files:

```typescript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}
```

## 🔧 Available Scripts

```bash
# Development
npm run dev           # Start dev server with hot reload

# Production
npm run build         # Build optimized production bundle
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
```

## 📱 Responsive Design

The site is fully responsive using Tailwind CSS breakpoints:
- **Mobile**: `< 640px` (sm)
- **Tablet**: `640px - 1024px` (md, lg)
- **Desktop**: `> 1024px` (xl, 2xl)

Test at different breakpoints:
1. Open DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Test on different device sizes

## 🎨 Using Lucide React Icons

The project uses Lucide React for icons. Browse available icons: [lucide.dev](https://lucide.dev)

```typescript
import { Github, Mail, ExternalLink } from 'lucide-react'

// Use in JSX
<Github size={24} className="text-blue-400" />
```

## 📊 SEO Optimization

Edit `src/app/layout.tsx` to update metadata:

```typescript
export const metadata: Metadata = {
  title: 'Your Name | Your Title',
  description: 'Brief description',
  keywords: ['keyword1', 'keyword2'],
  // ...
}
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click Deploy

### Other Platforms

- **Netlify**: Build command: `npm run build`
- **Docker**: See DEPLOYMENT.md
- **Self-hosted**: Use `npm run build && npm start`

## 🐛 Troubleshooting

### Port 3000 Already in Use

```bash
# macOS/Linux
sudo lsof -i :3000
kill -9 <PID>

# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### TypeScript Errors

```bash
npm run build  # Check for errors
```

### Node Modules Issues

```bash
rm -rf node_modules package-lock.json
npm install
```

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [TypeScript](https://www.typescriptlang.org)

## 💡 Tips

1. **Hot Reload**: Changes automatically refresh in development
2. **TypeScript**: Catch errors before runtime
3. **Tailwind**: Use `@apply` for custom component styles
4. **Animations**: Test performance with DevTools Lighthouse
5. **Accessibility**: Use semantic HTML and ARIA labels

## 🎯 Next Steps

1. Customize configuration files with your information
2. Add projects and skills
3. Set up contact form integration
4. Deploy to Vercel
5. Add custom domain
6. Submit sitemap to search engines
