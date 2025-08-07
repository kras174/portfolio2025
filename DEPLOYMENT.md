# 🚀 Deployment Instructions

## GitHub Pages Deployment

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `portfolio2025` or any name you prefer
3. Make it public or private (your choice)
4. **Don't** initialize with README, .gitignore, or license (we already have these)

### Step 2: Connect Local Repository

```bash
# Add the remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/portfolio2025.git

# Push the code to GitHub
git push -u origin main
```

### Step 3: Deploy to GitHub Pages

#### Option A: Using GitHub Actions (Recommended)

1. Create `.github/workflows/deploy.yml` file:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

2. Go to repository Settings > Pages
3. Source: Deploy from a branch
4. Branch: `gh-pages` (will be created automatically)
5. Save

#### Option B: Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Create `docs` folder and copy build files:
```bash
mkdir docs
cp -r dist/* docs/
```

3. Commit and push:
```bash
git add docs/
git commit -m "Add docs for GitHub Pages"
git push
```

4. Go to repository Settings > Pages
5. Source: Deploy from a branch
6. Branch: `main`, folder: `/docs`
7. Save

## Netlify Deployment

1. Go to [Netlify](https://netlify.com)
2. Click "New site from Git"
3. Connect your GitHub account
4. Select your portfolio repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

## Vercel Deployment

1. Go to [Vercel](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Framework preset: Vite
5. Click "Deploy"

## Custom Domain (Optional)

### GitHub Pages
1. Go to repository Settings > Pages
2. Add your custom domain
3. Create CNAME file in your repository with your domain

### Netlify/Vercel
1. Go to domain settings
2. Add your custom domain
3. Configure DNS records as instructed

## Environment Variables

If you need to add environment variables:

### Netlify
- Go to Site settings > Environment variables
- Add your variables

### Vercel
- Go to Project settings > Environment variables
- Add your variables

## Troubleshooting

### Build Errors
- Check Node.js version (should be 16+)
- Run `npm install` to ensure all dependencies are installed
- Check for TypeScript errors: `npm run build`

### Deployment Issues
- Ensure repository is public (for GitHub Pages)
- Check build logs for errors
- Verify file paths and names

### Performance
- Optimize images before uploading
- Use WebP format when possible
- Compress images for web

---

🎉 **Your portfolio is now live!** 

Share your portfolio URL with potential employers and clients!
