# 🎯 Quick Reference Guide

## Essential Commands

```bash
# Install dependencies (run once)
npm install

# Start development (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Check TypeScript errors
npm run build

# Lint code
npm run lint
```

## 🔧 Most Common Customizations

### 1. Update Your Name & Role (2 files)

**File 1: `src/components/Hero.tsx`**
```typescript
<motion.h1 variants={itemVariants} className="heading text-5xl md:text-7xl mb-6 leading-tight">
  Your Name Here  // ← Change this
</motion.h1>

<p className="text-xl md:text-2xl text-blue-400 font-semibold mb-4">
  Your Title Here  // ← Change this
</p>
```

**File 2: `src/app/layout.tsx`**
```typescript
export const metadata: Metadata = {
  title: 'Your Name | Your Title',  // ← Change this
  description: 'Your description...',  // ← Change this
```

### 2. Add Your Skills (1 file)

**File: `src/config/skills.ts`**
```typescript
export const skillsData: SkillCategory[] = [
  {
    category: 'Languages',
    skills: [
      { name: 'Your Language', level: 'expert' },  // ← Add/modify
    ],
  },
]
```

**Levels**: `'beginner'` | `'intermediate'` | `'advanced'` | `'expert'`

### 3. Add Your Projects (1 file)

**File: `src/config/projects.ts`**
```typescript
export const projectsData: Project[] = [
  {
    id: 'project-1',
    title: 'Your Project Name',
    description: 'Short description',
    technologies: ['Tech1', 'Tech2'],
    metrics: [{ label: 'Users', value: '1000+' }],
    links: { github: 'https://...' },
    featured: true,  // Shows featured badge
  },
]
```

### 4. Add Social Links (2 files)

**File 1: `src/components/Navbar.tsx`** (footer links)
**File 2: `src/components/Footer.tsx`** (footer social links)

Find and update:
```typescript
const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/YOUR_USERNAME',  // ← Update
  },
  // ...
]
```

### 5. Enable Contact Form

Install EmailJS:
```bash
npm install @emailjs/browser
```

Update `src/components/Contact.tsx`:
```typescript
import emailjs from '@emailjs/browser'

emailjs.init('YOUR_PUBLIC_KEY')  // Get from emailjs.com

// In handleSubmit function, replace the setTimeout with:
await emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  formData,
  'YOUR_PUBLIC_KEY'
)
```

## 📁 File Locations Quick Reference

```
Need to change...              | Edit this file
================================|========================================
Name / Role / Main title        | src/components/Hero.tsx
About me text                   | src/components/About.tsx
Location / University           | src/components/About.tsx
Skills / Tech expertise         | src/config/skills.ts
Projects / Showcase work        | src/config/projects.ts
Work experience / Timeline      | src/config/experience.ts
Social media links              | src/components/Navbar.tsx & Footer.tsx
Website title / SEO metadata    | src/app/layout.tsx
Contact form integration        | src/components/Contact.tsx
Colors / Dark mode theme        | tailwind.config.ts
Navigation menu items           | src/components/Navbar.tsx
```

## 🎨 Design Changes

### Change Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: '#3B82F6',      // Blue buttons
  'dark-bg': '#0F172A',    // Page background
  'dark-card': '#1E293B',  // Card background
}
```

### Change Fonts
Edit `src/app/layout.tsx`:
```typescript
import { Inter, Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: '400' })
// Then update: body className={poppins.className}
```

### Modify Animations
Edit individual component files:
```typescript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,  // Delay between items
      delayChildren: 0.1,    // Initial delay
    },
  },
}
```

## 🔍 Testing Your Changes

```bash
# See changes live (auto-reload)
npm run dev

# Check for errors
npm run build

# Check code style
npm run lint
```

## 📱 Test Responsive Design

In Chrome DevTools:
1. Press `F12` to open DevTools
2. Press `Ctrl+Shift+M` to toggle Device mode
3. Test on Mobile (375px), Tablet (768px), Desktop (1024px)

## 🚀 Deploy to Vercel

1. Push code to GitHub:
```bash
git add .
git commit -m "Initial portfolio"
git push
```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your repository
5. Click "Deploy"

Done! Your site is live! 🎉

## 📋 Pre-Launch Checklist

- [ ] Updated name and role
- [ ] Added all your skills
- [ ] Added your projects
- [ ] Updated social media links
- [ ] Set up contact form (optional)
- [ ] Checked on mobile (iPhone, Android)
- [ ] Tested on tablet
- [ ] Checked desktop
- [ ] Deployed to Vercel
- [ ] Added custom domain (optional)

## ❓ Need Help?

1. **Setup issues?** → See `GETTING_STARTED.md`
2. **Deployment questions?** → See `DEPLOYMENT.md`
3. **Detailed info?** → See `PROJECT_SUMMARY.md`
4. **Component examples?** → Check `src/components/` files

## 🎨 Icon Library

All icons from Lucide React. Browse available icons:
- Go to [lucide.dev](https://lucide.dev)
- Click any icon to copy its name
- Add to components:

```typescript
import { IconName } from 'lucide-react'

<IconName size={24} className="text-blue-400" />
```

## 💡 Pro Tips

1. **Colors**: Use `hover:` and `active:` in Tailwind
   ```typescript
   className="... hover:text-blue-400 active:scale-95"
   ```

2. **Spacing**: Customize with Tailwind padding/margin
   ```typescript
   className="px-6 py-3 mb-6"  // padding & margin
   ```

3. **Responsive**: Use `md:`, `lg:`, `xl:` prefixes
   ```typescript
   className="text-base md:text-lg lg:text-xl"
   ```

4. **Animations**: Check Framer Motion variants
   ```typescript
   whileHover={{ scale: 1.05 }}
   whileTap={{ scale: 0.95 }}
   ```

---

**Start by running:** `npm install && npm run dev`

**Then customize** the files listed above with your information.

**Ready? Let's build! 🚀**
