# Putting this site on GitHub + Vercel (beginner-friendly)

You'll do this in two stages:

1. **GitHub** — stores your code online (like Google Drive for code).
2. **Vercel** — turns that code into a live website and keeps it updated.

Once both are connected, your workflow forever after is:
**edit a file → commit → push → your website updates automatically.**

---

## Stage 0 — Before you upload (5 minutes, do this first)

Swap in your real things so the live site is correct from day one:

- [ ] Replace `public/images/headshot.jpg` with your actual photo (same filename).
- [ ] Add your resume PDF as `public/files/andrea-casuncad-resume.pdf`.
- [ ] Add any certificate PDFs listed in `public/files/README.txt`.
- [ ] Put your real Calendly link in `src/lib/data.ts` (`CALENDLY_URL`).
- [ ] Update your email / LinkedIn in `src/components/Engage.tsx` and `Footer.tsx`
      if the placeholder ones aren't right yet.

---

## Stage 1 — Create a GitHub account and repository

1. Go to **github.com** → **Sign up** (free account is fine). Pick a username
   you're comfortable with professionally, e.g. `andreacasuncad`.
2. Click the **"+"** (top right) → **"New repository"**.
3. Fill in:
   - **Repository name:** `bookkeeping-portfolio`
   - **Public** (so recruiters and clients can see it)
   - **Leave "Add a README" UNCHECKED** — important, your project already has files.
4. Click **Create repository**. You'll land on an empty page with setup
   instructions. Leave it open.

---

## Stage 2 — Upload your project (the easy way: GitHub Desktop)

1. Download **GitHub Desktop** from desktop.github.com and install it.
2. Open it and **sign in with your GitHub account**.
3. Menu: **File → Add Local Repository…**
4. Click **"Choose…"** and select the folder that contains this project
   (the one with `package.json` and the `src` folder inside it).
   - If it says *"This directory appears to be a Git repository"*, just click
     **"Add repository"**.
   - If it says it's *not* a repository, click **"create a repository"** in the
     popup instead — same result.
5. At the top you'll see **"Publish repository"**. Click it.
   - Match the **Name** to the repository you created (`bookkeeping-portfolio`).
   - Keep it **Public**, uncheck "Keep this code private".
   - Click **Publish Repository**.

Done. Refresh your GitHub page in the browser — all your files are there.

> **What just happened?**
> - A **commit** = a saved snapshot of your files, with a note (like "Initial commit").
> - **Push/Publish** = uploading that snapshot to GitHub.
> GitHub Desktop did both for you.

### Alternative: command line (if you prefer terminals)

```bash
cd your-project-folder
git init
git add .
git commit -m "Initial commit: bookkeeping portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/bookkeeping-portfolio.git
git push -u origin main
```

(You'll need Git installed: git-scm.com. It will ask for your GitHub login.)

---

## Stage 3 — Deploy on Vercel

1. Go to **vercel.com** → **Sign Up** → choose **"Continue with GitHub"**.
   This links the two accounts — that link is what makes auto-updates work.
2. Click **"Add New… → Project"**.
3. Find `bookkeeping-portfolio` in the list → click **"Import"**.
4. Vercel will automatically detect **Vite**. You should see:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   Don't change anything. Click **"Deploy"**.
5. Wait ~1 minute. You'll get a live URL like:
   `https://bookkeeping-portfolio.vercel.app`

Open it. Your site is live. 🎉

---

## Your ongoing workflow

1. Edit files on your computer (e.g. add a new certificate to `data.ts`).
2. Open **GitHub Desktop** — it shows the changed files on the left.
3. Type a short note in the bottom box (e.g. *"Added payroll certificate"*).
4. Click **"Commit to main"**, then **"Push origin"** (top right).
5. Vercel notices the push and rebuilds your site in about a minute.
   Watch progress under your project's **"Deployments"** tab.

That's it. No re-uploading, no FTP, no "Publish" button on Vercel ever again.

---

## Troubleshooting

| Problem | Fix |
|---|---|
| GitHub Desktop asks to commit `node_modules` | The `.gitignore` handles this. If you see thousands of files listed, you added the wrong folder — the folder must be the one containing `package.json`. |
| Vercel deploy fails with "module not found" | Push your `package-lock.json` file too — it's required. |
| Site loads but images are missing | Image filenames are case-sensitive on Vercel. `Headshot.jpg` ≠ `headshot.jpg`. |
| Blank white page on Vercel | Check the **Build Output** log in the Deployments tab; usually a typo in an edited file. The same error shows when you run `npm run build` locally. |
| Want your own domain (e.g. andreacasuncad.com) | Vercel → Project → **Settings → Domains** → add it, then point your domain's DNS to Vercel as instructed. Free `.vercel.app` subdomain works without any of this. |
