# Meenakshi Madhu | AI/ML Portfolio


## Live Portfolio

[View My Portfolio]-[https://meenakshi-madhu-portfolio.vercel.app]

A responsive, dark-mode-aware portfolio for an AI/ML Engineer, built with Next.js (App Router) and Tailwind CSS. Content is drawn only from the candidate's resume and LinkedIn PDFs.

## Tech stack
Next.js 14, React 18, Tailwind CSS 3. No API keys or environment variables required.

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000. Production: `npm run build && npm start`.

## Customize
- **All content** (name, links, about, projects, experience, skills, education) lives in `data/content.js`.
- **Layout and sections**: `app/page.js`; reusable pieces in `components/`.
- **Colors**: the `accent` color in `tailwind.config.js`. Dark mode follows the visitor's system setting.

## Structure
```
app/         layout.js, page.js, globals.css
components/  Section.js, Tag.js, ProjectCard.js
data/        content.js
```
