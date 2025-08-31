# Deployment Guide

This portfolio website can be deployed to various hosting platforms. Here are the recommended options:

## Vercel (Recommended)

1. **Push to GitHub**: First, push your code to a GitHub repository
2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with your GitHub account
   - Click "New Project"
   - Import your repository
3. **Configure Build Settings**:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
4. **Environment Variables**: No additional environment variables needed
5. **Deploy**: Click "Deploy"

## Netlify

1. **Push to GitHub**: Push your code to a GitHub repository
2. **Connect to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Sign up/Login with your GitHub account
   - Click "New site from Git"
   - Choose your repository
3. **Configure Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `.next`
4. **Deploy**: Click "Deploy site"

## GitHub Pages

The project is already configured for GitHub Pages deployment with a GitHub Actions workflow:

1. **Push to GitHub**: Push your code to a GitHub repository
2. **Enable GitHub Pages**:
   - Go to repository settings > Pages
   - Select "GitHub Actions" as the source
3. **Automatic Deployment**: The workflow will automatically build and deploy on every push to main branch

The workflow file `.github/workflows/gh-pages.yml` handles:

- Building the Next.js application with static export
- Generating static files for both English and Portuguese locales
- Deploying to GitHub Pages

## Manual Deployment

1. **Build the project**:
   ```bash
   npm run build
   ```
2. **Upload files**: Upload the `.next` directory to your hosting provider
3. **Configure server**: Ensure your server is configured to handle Next.js applications

## Custom Domain

After deployment, you can configure a custom domain:

1. **Vercel**: Go to project settings > Domains
2. **Netlify**: Go to site settings > Domain management
3. **Add your domain**: Follow the DNS configuration instructions

## Environment Variables

No environment variables are required for this portfolio website.

## Performance Optimization

The website is already optimized with:

- Next.js App Router for optimal performance
- Static generation for fast loading
- Tailwind CSS for minimal CSS bundle
- Lucide React icons for lightweight icons

## Analytics (Optional)

To add analytics, you can integrate:

- Google Analytics
- Vercel Analytics
- Plausible Analytics

Add the tracking code to the `layout.tsx` file in the `<head>` section.
