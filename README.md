# Rakshit Kapoor — Portfolio

A responsive, dark-premium developer portfolio built with React, Vite and plain CSS.

## Requirements
- Node.js 18+ (Node.js 20 LTS recommended)
- npm

## Run locally
1. Extract this ZIP.
2. Open the extracted `rakshit-portfolio` folder in VS Code.
3. Open the integrated terminal.
4. Run:

```bash
npm install
npm run dev
```

5. Open the local URL printed by Vite (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

The production site is generated in `dist/`.

## Personalize
- Edit `src/data.js` to update your profile, skills, experience and projects.
- Replace `public/Rakshit_Kapoor_Resume_One_Page.pdf` with your latest resume, keeping the same filename, or update `profile.resume` in `src/data.js`.
- GitHub repositories are loaded from the public GitHub API using the username in `src/data.js`. No token is required for this small public profile display.
- Project cards open their own detail view inside the site.

## Deploy with Vercel
1. Push this folder to a GitHub repository.
2. Sign in to Vercel and import the repository.
3. Framework preset: Vite.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Deploy.

## Notes
- The site uses Google Fonts when online and falls back to system fonts.
- GitHub cards need an internet connection and may fall back to a profile link if the GitHub API rate limit is reached.
- The internship month range is shown as May – July because no year was specified.
