# Hosting Options from Your Computer

## Option 1: Bluehost (Professional Hosting)
**Best for:** Production websites, custom domains
- Upload `dist` folder contents to `public_html`
- Your site: https://campsdeichemed.com
- Full control, professional hosting

## Option 2: Netlify (Free + Easy)
**Best for:** Quick deployment, free hosting
1. Go to https://netlify.com
2. Sign up with GitHub/GitLab
3. Drag & drop your `dist` folder
4. Get instant live URL

## Option 3: Vercel (Free + Fast)
**Best for:** React apps, automatic deployments
1. Go to https://vercel.com
2. Connect your GitHub repository
3. Automatic deployment on every push
4. Get live URL instantly

## Option 4: GitHub Pages (Free)
**Best for:** Open source projects
1. Push code to GitHub
2. Enable GitHub Pages in repository settings
3. Deploy from `dist` folder
4. Get `username.github.io/repo-name` URL

## Option 5: Local Server (Development Only)
**Best for:** Testing before deployment
```bash
# Serve your dist folder locally
npx serve dist
# or
python -m http.server 8000
```

## Quick Start Commands:
```bash
# Build for production
npm run build

# Test locally
npm run preview

# Deploy to Netlify (if you have Netlify CLI)
npx netlify deploy --dir=dist --prod
``` 