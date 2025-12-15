# Richard Schmidt - Portfolio Website

A modern, professional portfolio website built with Next.js 14, React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Dark mode enabled by default
- 📱 Fully responsive design (mobile, tablet, desktop)
- ✨ Smooth animations with Framer Motion
- 🔧 Configurable skills and projects
- 📧 Contact form integration
- 🔍 SEO optimized with metadata
- ⚡ Built with Next.js 14 App Router
- 🎯 TypeScript for type safety
- 🎭 Tailwind CSS for styling

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Icons**: Lucide React

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Skills section
│   ├── Projects.tsx        # Projects section
│   ├── Contact.tsx         # Contact section
│   └── Footer.tsx          # Footer
├── config/
│   ├── skills.ts           # Skills configuration
│   └── projects.ts         # Projects configuration
└── lib/
    └── utils.ts            # Utility functions
```

## Configuration

### Skills
Edit `src/config/skills.ts` to add or modify skills:

```typescript
export const skills = {
  Languages: ['Java', 'C++', 'Python', 'JavaScript'],
  // ...
}
```

### Projects
Edit `src/config/projects.ts` to add or modify projects:

```typescript
export const projects = [
  {
    title: 'Gothaj Client',
    description: '...',
    technologies: ['Java', 'C++'],
    // ...
  },
]
```

## Deployment

The site is ready to deploy to Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with a single click

## License

MIT
