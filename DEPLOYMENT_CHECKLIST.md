# 🚀 ML Engineer Portfolio — One-Click Deployment Guide

This repository is pre-configured and optimized for instant deployment on **Vercel** (Recommended) or **Netlify / Cloudflare Pages**.

---

## ⚡ Option 1: Vercel Deployment (Recommended — 60 Seconds)

Vercel is the creator of Next.js and provides zero-config builds, global edge CDN caching, and automatic SSL certificates.

### Step 1: Push Code to GitHub
Ensure your latest commit is pushed to your GitHub repository:
```bash
git add .
git commit -m "feat: complete ML engineer portfolio"
git push origin master
```

### Step 2: Import Project in Vercel
1. Log in to [Vercel](https://vercel.com/) with your GitHub account.
2. Click **"Add New..."** → **"Project"**.
3. Locate `ml-engineer-portfolio` in your GitHub repository list and click **"Import"**.
4. Vercel will automatically detect **Next.js**. Notice the settings:
   - **Framework Preset**: `Next.js`
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
5. Click **"Deploy"**.

### Step 3: Verify Deployment
Once deployed, Vercel will assign a production domain (e.g., `https://ml-engineer-portfolio.vercel.app`).
Check the following items on your production URL:
- [ ] **Resume Download**: Click "Download Resume" on Hero or Contact section — verifies `/resume.pdf` downloads cleanly with filename `Kaviyathamizhan_ML_Resume.pdf`.
- [ ] **SEO Sitemap**: Visit `/sitemap.xml` — verifies XML sitemap generation.
- [ ] **Robots.txt**: Visit `/robots.txt` — verifies search engine permissions.
- [ ] **Social Links**: Test GitHub and LinkedIn buttons to ensure they open in new tabs.

---

## 🛠️ Option 2: Self-Hosting / Docker / Linux VPS

To run the portfolio on a custom server or VPS using Node.js:

1. **Install Dependencies & Build**:
   ```bash
   npm ci
   npm run build
   ```
2. **Start Production Server**:
   ```bash
   npm run start
   ```
   The application will run in production mode on port `3000`.

---

## 🔍 Pre-Deployment Quality Checklist (Completed & Verified ✓)

- [x] **Zero TypeScript / ESLint Errors**: Checked via automated compiler build.
- [x] **Production Bundle Size**: Optimized static HTML generation across all routes.
- [x] **Security Headers**: Configured via `vercel.json` (`X-Frame-Options`, `X-Content-Type-Options`, `X-XSS-Protection`).
- [x] **Accessibility (a11y)**: Semantic HTML tags (`<section>`, `<article>`, `<header>`, `<footer>`), ARIA attributes, and WCAG AA contrast compliance.
- [x] **Motion Accessibility**: Responsive animations via Framer Motion that automatically disable when `prefers-reduced-motion` is active in user OS settings.
- [x] **Responsive Layouts**: Validated grid fallbacks and flex layouts across mobile (320px+), tablet (768px+), and desktop (1024px+).
