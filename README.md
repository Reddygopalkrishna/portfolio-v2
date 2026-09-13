# Reddy Gopal Krishna — Personal Portfolio Website

A high-performance, responsive personal portfolio website engineered with **React 19**, **Vite**, **TypeScript**, and **Tailwind CSS**. Designed with a modern, sleek dark engineering aesthetic.
---

## 📁 100% Modular Data Files (`src/data/`)

Every section's content is completely separated into dedicated TypeScript data files in `src/data/`. You can update, add, or customize details at any time **without touching any UI code or CSS**:

| Section | Data File | What You Can Edit |
| :--- | :--- | :--- |
| **Personal Info & Bio** | `src/data/personal.ts` | Name, headline, roles, current company, emails, socials, bio narrative, mission |
| **Freelancing & Services** | `src/data/services.ts` | Offerings (AI automation, MCP agents, web dev, SaaS), deliverables, badges |
| **Experience Timeline** | `src/data/experience.ts` | Companies (Tavant, Wipro, etc.), dates, descriptions, accomplishment bullets, skill tags |
| **Featured Projects** | `src/data/projects.ts` | System titles, architecture flows, metrics, GitHub/Live links, highlights |
| **Skills & Technologies** | `src/data/skills.ts` | Categorized technologies, proficiency levels (`Expert`, `Advanced`), tags |
| **Licenses & Certs** | `src/data/certifications.ts` | 10 official credentials (Anthropic, Microsoft, Oracle), IDs, dates, verification links |
| **Education & Learning** | `src/data/education.ts` | Degrees, institutions, fields of study, key highlights |
| **Key Stats / Ribbon** | `src/data/metrics.ts` | LinkedIn followers count, experience years, certifications count, projects shipped |

---

## 🚀 Quick Start (Local Development)

```bash
# 1. Install dependencies (if not already installed)
npm install

# 2. Start the local Vite development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## ⚡ Production Build

```bash
npm run build
```

This compiles TypeScript and builds an optimized, static single-page application into the `dist/` directory.

---

## 🌐 Deploy to Vercel

The repository is pre-configured with `vercel.json` for zero-configuration deployment to **Vercel**:

### Option 1: Via Vercel CLI
```bash
npx vercel
```

### Option 2: Via Vercel Web Dashboard / GitHub
1. Push your repository to GitHub / GitLab / Bitbucket.
2. Go to [vercel.com/new](https://vercel.com/new).
3. Import this repository.
4. Framework Preset: **Vite** (auto-detected).
5. Click **Deploy**. Your site will be live on a fast global CDN in seconds!

---

## 🛠️ Tech Stack
- **Framework**: React 19 + TypeScript
- **Bundler**: Vite 6
- **Styling**: Tailwind CSS (Dark theme `#06080d` with glassmorphism & ambient gradients)
- **Icons**: Lucide React
- **Typography**: Space Grotesk (display), Inter (body), JetBrains Mono (code/metrics)
