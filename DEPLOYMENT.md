# Deployment Guide

## Deploying to Vercel

### Quick Setup

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/ScRichard/portfolio.git
   git branch -M main
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "New Project"
   - Select your portfolio repository
   - Configure settings (should auto-detect Next.js)
   - Click "Deploy"

3. **Domain Setup**
   - Add your custom domain in Vercel project settings
   - Update DNS records as instructed by Vercel

### Environment Variables

Create a `.env.local` file for development:

```
# Add any environment variables needed for your contact form service
NEXT_PUBLIC_API_URL=https://api.example.com
```

### Build Optimization

The project is optimized for production:
- Next.js automatic code splitting
- Image optimization (if using next/image)
- CSS/JS minification
- Tree shaking

## Alternative Deployment Options

### Netlify

1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`

### Docker

Create a `Dockerfile`:

```dockerfile
FROM node:18-alpine
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## Contact Form Integration

To enable email functionality, integrate with a service like:

- **EmailJS**: No backend required
- **SendGrid**: Enterprise email service
- **Formspree**: Simple form handling
- **Nodemailer**: Backend solution with Node.js

Example with EmailJS:

```typescript
// Install: npm install @emailjs/browser
import emailjs from '@emailjs/browser'

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  
  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      formData,
      'YOUR_PUBLIC_KEY'
    )
    // Success handling
  } catch (error) {
    // Error handling
  }
}
```

## Performance Tips

1. **Monitor Core Web Vitals**
   - Use Vercel Analytics
   - Check PageSpeed Insights

2. **Image Optimization**
   - Use next/image for all images
   - WebP format
   - Responsive sizes

3. **Font Optimization**
   - Already using next/font/google (preloaded)
   - Minimal performance impact

4. **SEO**
   - Update metadata in `src/app/layout.tsx`
   - Add sitemap.xml if needed
   - Monitor search console

## Troubleshooting

### Build Fails
- Check for TypeScript errors: `npm run build`
- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`

### Slow Performance
- Analyze bundle: `npm run build && npm start`
- Check Vercel Analytics
- Optimize images
- Review Framer Motion usage (can impact performance)

### Contact Form Not Working
- Check service integration
- Verify API keys
- Check browser console for errors
- Test with different email addresses
