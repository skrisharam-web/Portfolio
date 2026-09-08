# Cybersecurity & Systems Software Engineering Portfolio

A statically-generated Next.js (App Router), TypeScript, and Tailwind CSS portfolio website for a cybersecurity student and technology enthusiast. Built with restrained technical elegance, zero backend dependencies, explicit proficiency tiers, placeholder-safe typed data, and rich micro-interactions using Motion.

---

## 🚀 How to Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Open browser at http://localhost:3000
```

To run a production build test:
```bash
npm run build
npm run start
```

---

## 📝 Content Management Without Code Changes (§36)

There is no CMS and no database by design. All content is stored in typed TypeScript modules inside the `/content` directory:

- **Adding a Project**: Open `content/projects.ts` and append a new object adhering to the `Project` type in `content/types.ts`. Add screenshot assets to `/public/images/projects/`.
- **Adding an Achievement**: Open `content/achievements.ts` and append an object. Drop photos in `/public/images/achievements/`.
- **Adding a Course**: Open `content/courses.ts` and append an object.
- **Updating Skills / Cybersecurity Tiers**: Modify `content/skills.ts` or `content/cybersecurity.ts`.

Example adding a project in `content/projects.ts`:
```ts
{
  slug: "my-new-tool",
  title: "My New Security Tool",
  oneLiner: "One-line problem statement for card preview.",
  description: "Detailed description of the tool.",
  whyItMatters: "Context on why this tool is valuable.",
  technologies: ["Rust", "Linux", "Docker"],
  contribution: "Authored core packet parser.",
  keyFeatures: ["Feature 1", "Feature 2"],
  images: [{ src: "/images/projects/new-tool.jpg", alt: "Tool Screenshot", isPlaceholder: true }],
  githubUrl: "https://github.com/my/repo"
}
```

---

## 🛡️ Image Protection vs. Résumé Download (§42)

- On-site photos (hero portrait, achievement photos) include right-click context menu prevention and watermark signatures (`MERCER // SEC`) as visual ownership deterrents.
- The **résumé is explicitly exempt** and can be downloaded cleanly as an unrestricted PDF at `/resume/resume.pdf` or via the top navigation and contact section buttons.

---

## ⚡ Deployment (§35)

Deploy on Vercel via GitHub integration:
1. Push repository to GitHub.
2. Import project in Vercel dashboard.
3. Framework preset: **Next.js**.
4. Zero environment variables required for core site functionality.
