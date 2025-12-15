# Project Directory Structure

```
PortfolioWebsite/
│
├── 📄 Documentation Files (Read First!)
│   ├── INDEX.md                    ← Navigation guide to all docs
│   ├── QUICK_START.md              ← Fast setup & common changes
│   ├── GETTING_STARTED.md          ← Detailed setup guide
│   ├── README.md                   ← Project overview
│   ├── DEPLOYMENT.md               ← How to deploy
│   └── PROJECT_SUMMARY.md          ← Complete reference
│
├── 🔧 Configuration Files
│   ├── package.json                ← Dependencies & scripts
│   ├── tsconfig.json               ← TypeScript settings
│   ├── tailwind.config.ts          ← Theme colors & styles
│   ├── next.config.js              ← Next.js settings
│   ├── postcss.config.js           ← CSS processing
│   ├── .eslintrc.json              ← Code linting rules
│   ├── .prettierrc                 ← Code formatting
│   ├── .gitignore                  ← Git ignore rules
│   └── .eslintignore               ← ESLint ignore rules
│
└── 📁 src/                         ← Source code
    │
    ├── 📁 app/                     ← Next.js App Router pages
    │   ├── layout.tsx              ← Root layout & metadata (EDIT: SEO, title)
    │   ├── page.tsx                ← Home page (assembles components)
    │   └── globals.css             ← Global styles & Tailwind setup
    │
    ├── 📁 components/              ← React components (EDIT THESE!)
    │   ├── Navbar.tsx              ← Navigation bar (EDIT: links, logo)
    │   ├── Hero.tsx                ← Hero section (EDIT: name, role)
    │   ├── About.tsx               ← About section (EDIT: bio, location)
    │   ├── Skills.tsx              ← Skills display (data-driven)
    │   ├── Projects.tsx            ← Projects showcase (data-driven)
    │   ├── Experience.tsx          ← Experience timeline (data-driven)
    │   ├── Contact.tsx             ← Contact form (EDIT: form handling)
    │   └── Footer.tsx              ← Footer (EDIT: social links)
    │
    ├── 📁 config/                  ← Configuration files (EDIT DATA!)
    │   ├── skills.ts               ← Skills data (EDIT: add your skills)
    │   ├── projects.ts             ← Projects data (EDIT: add projects)
    │   └── experience.ts           ← Experience data (EDIT: work history)
    │
    └── 📁 lib/                     ← Utility functions
        └── utils.ts                ← Helper functions
```

## 🎯 What to Edit When

### ✏️ Personalizing Your Portfolio

| Change | File | What to Modify |
|--------|------|----------------|
| **Your Name** | `src/components/Hero.tsx` | Name in h1 tag |
| **Your Role** | `src/components/Hero.tsx` | Role subtitle text |
| **About You** | `src/components/About.tsx` | Description paragraphs |
| **Location** | `src/components/About.tsx` | Location text & university |
| **Skills** | `src/config/skills.ts` | Add skills to skillsData array |
| **Projects** | `src/config/projects.ts` | Add projects to projectsData array |
| **Experience** | `src/config/experience.ts` | Add experiences to experienceData array |
| **Social Links** | `src/components/Navbar.tsx` | Update href in socialLinks |
| **Social Links** | `src/components/Footer.tsx` | Update href in socialLinks |
| **SEO Title** | `src/app/layout.tsx` | Update metadata.title |
| **SEO Description** | `src/app/layout.tsx` | Update metadata.description |

### 🎨 Styling Changes

| Change | File | What to Modify |
|--------|------|----------------|
| **Colors** | `tailwind.config.ts` | theme.extend.colors |
| **Fonts** | `src/app/layout.tsx` | Import and use different fonts |
| **Button Styles** | `src/app/globals.css` | .btn-primary, .btn-secondary |
| **Card Styles** | `src/app/globals.css` | .card class |
| **Animations** | Component files | Animation variants |

## 🔄 Data Flow

```
data files (config/)
    ↓
components (components/)
    ↓
page.tsx (assembles all)
    ↓
layout.tsx (wraps with navbar/footer)
    ↓
browser (displayed to user)
```

## 📊 Component Hierarchy

```
layout.tsx (root)
├── Navbar
├── main
│   ├── page.tsx
│   │   ├── Hero
│   │   ├── About
│   │   ├── Skills
│   │   ├── Projects
│   │   ├── Experience
│   │   └── Contact
│   └── [other pages]
└── Footer
```

## 🚀 Development Workflow

```
1. Make changes to files
        ↓
2. Dev server auto-reloads (npm run dev)
        ↓
3. See changes in browser
        ↓
4. If satisfied, commit to git
        ↓
5. Push to GitHub
        ↓
6. Vercel auto-deploys
```

## 📦 Key Files to Know

### "I need to change..."

**Personal Information**
```
└─ src/components/Hero.tsx          (name, role, description)
└─ src/components/About.tsx         (about me, location)
└─ src/config/skills.ts             (my skills)
└─ src/config/projects.ts           (my projects)
└─ src/config/experience.ts         (my work)
```

**Styling**
```
└─ tailwind.config.ts               (colors, theme)
└─ src/app/globals.css              (button, card, section styles)
```

**Navigation & Links**
```
└─ src/components/Navbar.tsx        (menu items, social links)
└─ src/components/Footer.tsx        (footer social links)
└─ src/app/layout.tsx               (metadata, SEO)
```

**Forms & Features**
```
└─ src/components/Contact.tsx       (contact form)
```

## 🔗 File Relationships

```
Skills component
    ↓
    imports from
    ↓
skills.ts (config)

Projects component
    ↓
    imports from
    ↓
projects.ts (config)

Hero component
    ↓
    imports from
    ↓
Navbar component
    ↓
    imports from
    ↓
Navbar.tsx
```

## 📝 Adding New Content

### Add a New Skill
1. Open `src/config/skills.ts`
2. Find the category
3. Add to `skills` array:
```typescript
{ name: 'Your Skill', level: 'expert' }
```

### Add a New Project
1. Open `src/config/projects.ts`
2. Add to `projectsData` array:
```typescript
{
  id: 'unique-id',
  title: 'Project Name',
  description: 'Description',
  technologies: ['Tech1', 'Tech2'],
  links: { github: '...' },
  featured: true,
}
```

### Add a New Section
1. Create component in `src/components/`
2. Import in `src/app/page.tsx`
3. Add to JSX:
```typescript
import MyNewSection from '@/components/MyNewSection'

export default function Home() {
  return (
    <>
      <MyNewSection />
    </>
  )
}
```

## ✅ Pre-Launch Checklist

- [ ] Updated name and role (Hero.tsx)
- [ ] Updated about section (About.tsx)
- [ ] Added skills (skills.ts)
- [ ] Added projects (projects.ts)
- [ ] Updated social links (Navbar.tsx, Footer.tsx)
- [ ] Updated SEO metadata (layout.tsx)
- [ ] Tested on mobile
- [ ] Tested on tablet
- [ ] Tested on desktop
- [ ] Ran `npm run build` (no errors)
- [ ] Deployed to Vercel
- [ ] Added custom domain

## 🆘 Quick Troubleshooting

| Problem | Solution |
|---------|----------|
| Changes not showing | Restart dev server: `npm run dev` |
| TypeScript errors | Run `npm run build` to see errors |
| Styling not working | Check `tailwind.config.ts` |
| Import errors | Check file paths start with `@/` |
| Build fails | Delete `.next` folder and rebuild |

---

**Ready to start?**
1. Read: `INDEX.md` (you are here!)
2. Next: `QUICK_START.md`
3. Run: `npm install && npm run dev`
