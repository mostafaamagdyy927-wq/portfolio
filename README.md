# Mostafa Magdy — Personal Portfolio Website
### Data Science & AI Automation Engineer

A modern, high-performance personal portfolio website for **Mostafa Magdy Abdelhamid Ramadan (مصطفى مجدي عبدالحميد رمضان)**. Built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## 🌟 Overview & Highlights

- **Identity & Value Proposition:** Tailored specifically for recruiters, hiring managers, and freelance clients seeking expertise in Data Engineering, Machine Learning, and AI Automation.
- **Academic Distinction:** Highlights Mostafa's **Excellent (Emtiaz)** standing at Helwan University's Faculty of International Technology, ranking top of his cohort.
- **DEPI Trainee:** Showcases his selection and progress in **Cohort 5 of the Digital Egypt Pioneers Initiative (DEPI)** under Egypt's Ministry of Communications and Information Technology (MCIT).
- **Flagship Project Case Studies:** Interactive deep-dive modals for:
  1. *Used Car Price Prediction Model* (87% R² accuracy, Hatla2ee Elasticsearch API scraper)
  2. *AI Personal Executive Assistant ("Project O")* (Claude API orchestrator + 5 Google Workspace & Supabase sub-agents)
  3. *SAIP: Smart Automotive Diagnostics Platform* (National government competition finalist)
- **Delivered Client Automations:** AI WhatsApp booking bots, AI voice calling agents, and large-scale B2B lead generation (10,000+ leads across 31 countries).
- **Verified Credentials Gallery:** Accredited certificates with high-resolution lightbox previews (AWS, Udacity, ITIDA, Mahara-Tech, DataCamp, IT Sharks, Tuwaiq Academy).
- **Interactive Light & Dark Theme:** System-aware theme toggle with persistent state.
- **Production Ready:** Zero TypeScript errors, responsive layout, accessible alt text, and SEO optimization.

---

## 🛠️ Technology Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (Modern SaaS palette: Deep Navy `#0B1E3D`, Electric Blue `#2563EB`, Cyan `#06B6D4`, Slate `#64748B`)
- **Icons:** Lucide Icons & Custom SVG Brand Icons
- **PDF Generation:** Python ReportLab (for official downloadable CV PDF)
- **Deployment:** Vercel / Netlify / Self-Hosted Docker & VPS

---

## 📁 Project & Asset Architecture

```text
PROTFLIO/
├── asset/                          <-- Root asset folder requested by Mostafa
│   ├── profile.jpg                 <-- Personal photo / professional headshot
│   ├── Mostafa_Magdy_CV.pdf        <-- Official downloadable CV
│   ├── certificates/               <-- High-resolution certificates
│   │   ├── aws-ai-practitioner.jpeg
│   │   ├── aws-partyrock-scholars.jpeg
│   │   ├── database-fundamentals-maharatech.jpeg
│   │   ├── ai-course-itida-eme.jpeg
│   │   ├── intro-sql-datacamp.jpeg
│   │   ├── itida-gigs-freelance.jpeg
│   │   ├── oop-it-sharks.jpeg
│   │   ├── python-maharatech.jpeg
│   │   └── tuwaiq-satr-badge.svg
│   └── projects/                   <-- Project screenshots & mockups
│       ├── used-car-model.png
│       ├── project-o-assistant.png
│       ├── saip-automotive.png
│       ├── whatsapp-booking.png
│       ├── outbound-calling.png
│       ├── b2b-leadgen.png
│       └── smart-gloves.png
├── public/                         <-- Next.js public directory
│   ├── asset/                      <-- Mirrored assets for static web serving
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── app/
│   │   ├── globals.css             <-- Theme tokens & styling
│   │   ├── layout.tsx              <-- SEO metadata & OpenGraph tags
│   │   └── page.tsx                <-- Page structure
│   ├── components/                 <-- Reusable UI components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Education.tsx
│   │   ├── Projects.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── CaseStudyModal.tsx
│   │   ├── Services.tsx
│   │   ├── Certifications.tsx
│   │   ├── CertificateModal.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── ThemeProvider.tsx
│   └── data/
│       └── portfolioData.ts        <-- Central data source for all content
└── scripts/
    ├── setup_assets.py             <-- Asset preparation script
    └── generate_cv.py              <-- Script generating the official PDF CV
```

---

## 🖼️ Where to Drop Images in the `asset` Folder

All personal assets are located in the **`asset/`** folder at the workspace root:

1. **Profile Photo:**
   Drop your preferred photo into `asset/profile.jpg` (or `.png`). Run `python scripts/setup_assets.py` to sync with `public/asset/`.
2. **Certificates:**
   Place any new or updated certificate files into `asset/certificates/`.
3. **Project Screenshots:**
   Place project mockups or dashboard screenshots into `asset/projects/`.

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js**: v18+ (tested on Node v20 LTS)
- **npm** or **pnpm**
- **Python**: 3.9+ (optional, for regenerating the CV PDF)

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Locally in Development Mode
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
```

### 5. Start Production Server
```bash
npm run start
```

---

## 📄 Customizing Personal Information & Links

All personal details, project descriptions, skills, and links are cleanly separated in:
📂 **`src/data/portfolioData.ts`**

To customize:
- **Phone / Email / Social Links:** Update `portfolioData.personal`
- **Projects & Case Studies:** Add or modify items in `portfolioData.projects`
- **Skills:** Add or edit badges in `portfolioData.skillsCategories`
- **Services:** Edit freelance offerings in `portfolioData.services`

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)
1. Push your repository to GitHub (`github.com/mostafaamagdyy927-wq/portfolio`).
2. Go to [Vercel](https://vercel.com) and import the repository.
3. Next.js will be automatically detected with zero configuration required.
4. Click **Deploy**.

### Self-Hosted VPS / Docker
You can run the production build inside a Docker container or using Node/PM2:
```bash
npm run build
npm run start -p 80
```
