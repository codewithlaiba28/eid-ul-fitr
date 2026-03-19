---
description: How to deploy the Eid Fitr app to Vercel
---

# Deploying to Vercel

The project is now fully configured for a seamless deployment to Vercel. Follow these steps:

## Prerequisites
- [Vercel CLI](https://vercel.com/download) installed (optional but recommended).
- A Vercel account.

## Step 1: Connect to GitHub/GitLab/Bitbucket (Recommended)
1. Push your code to a repository on GitHub, GitLab, or Bitbucket.
2. Log in to [Vercel](https://vercel.com).
3. Click **"Add New..."** -> **"Project"**.
4. Import your repository.
5. Vercel will automatically detect **Next.js** and use the `npm run build` command I've already verified.
6. Click **Deploy**.

## Step 2: Deploy using Vercel CLI
If you prefer the command line, run:
```bash
vercel
```
Follow the prompts to link your project and deploy.

## Troubleshooting
If you encounter issues:
1. Check the build logs in the Vercel dashboard.
2. Ensure no environment variables are missing (none are required for this project's core functionality).
3. Verify that the `vercel.json` and `package.json` are correctly updated (already handled).

> [!NOTE]
> I have already updated `package.json` and created a `vercel.json` with security headers and optimized URL handling.
