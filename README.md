# Rishik Penumudi — Personal Portfolio Website

> **"Building technology with purpose. Turning ideas into impact."**
> 
> *Live Website:* [https://rishikpenumudi.github.io/Penumudi-Rishik-Portfolio/](https://rishikpenumudi.github.io/Penumudi-Rishik-Portfolio/)  
> *GitHub Repository:* [https://github.com/RishikPenumudi/Penumudi-Rishik-Portfolio](https://github.com/RishikPenumudi/Penumudi-Rishik-Portfolio)

A world-class personal portfolio for **Rishik Penumudi**, Computer Science & Engineering student at KL University (Honors Through Innovation, 2024–2028), aspiring entrepreneur, software developer, and Smart India Hackathon 2025 National Finalist (Team Zyric).

---

## 🎨 Visual Identity & Architecture

- **Aesthetic:** Apple / Linear / Stripe inspired light design system (`#F8FAFC` canvas, crisp typography, subtle borders, soft multi-layer elevations).
- **Typography:** Inter, Plus Jakarta Sans, and JetBrains Mono with universal system fallbacks.
- **Tech Stack:** Semantic HTML5, Modern CSS (custom properties, responsive grid, flexbox), Vanilla JavaScript (ES6+).
- **Zero Heavy Dependencies:** Instant first-contentful paint (FCP), zero build step required, 100% compatible with GitHub Pages project site hosting.
- **Full Responsiveness:** Tailored layouts for mobile devices, tablets, laptops, and ultra-wide displays.
- **Accessibility:** Visible focus rings, semantic landmark tags, aria-expanded controls, and `prefers-reduced-motion` compliance.

---

## 📁 Repository File Structure

```text
Penumudi-Rishik-Portfolio/
├── index.html                   # Complete semantic single-page experience (all 10 sections)
├── styles.css                   # Premium Apple/Linear/Stripe inspired design system
├── script.js                    # Mobile nav, scrollspy, filter tabs, modals, copy-to-clipboard
├── README.md                    # Repository documentation and deployment guide
└── assets/
    ├── favicon.svg              # Minimal RP brand monogram favicon
    ├── sahaj-primary.jpg        # [PRESERVED] Authentic SAHAJ physical prototype photograph
    ├── sahaj-supporting.png     # [PRESERVED] Authentic SAHAJ technical prototype reference view
    ├── Rishik_resume.pdf        # Authentic latest resume for one-click recruiter download
    └── certificates/            # Verified credential documents
        ├── AWS_Cloud_Practitioner.pdf
        ├── Celonis_Business_Analyst.pdf
        ├── British_Airways_Data_Science.pdf
        ├── Tata_GenAI_Analytics.pdf
        ├── Deloitte_Data_Analytics.pdf
        └── SIH_2025_Certificate.jpeg
```

---

## 🚀 Sections Implemented

1. **Header & Navigation:** Sticky glassmorphism header, RP brand mark, dynamic active link scrollspy, direct resume button, responsive mobile drawer.
2. **Hero Command Center:** Pulsing live availability indicator, high-impact headline, SIH'25 highlight badge, dual action CTAs, and a command center card displaying live metrics (8.75 CGPA, AWS CCP, 120 hrs Celonis training).
3. **Professional Profiles Dashboard:** Integrated platform cards for LinkedIn, GitHub, LeetCode, CodeChef, and Direct Email with working links and a 1-click clipboard copy action with toast feedback.
4. **About Me & Academic Timeline:** Narrative of builder identity, 10 interactive interest pillars, and an education timeline (KL University B.Tech CSE HTI 8.75 CGPA, Sri Chaitanya 76%, Dr. KKR Gowtham School 80%).
5. **Professional Experience:** 120-Hour Celonis Business Analyst Virtual Internship (Grade O Outstanding) and Social Internship Smart Village Program fieldwork.
6. **Flagship Innovation — SAHAJ:** Complete technical case study featuring the **exact preserved photographs** (`assets/sahaj-primary.jpg` and `assets/sahaj-supporting.png`), problem space, business model (selling standardized dye supplies rather than high-cost machinery), physical hardware specifications, proposed 4-Goal AI Roadmap, honest development status distinction, and UN SDG alignment (SDG 12, 6, 9, 13).
7. **Featured Software Projects:**
   - *Smart Parking Management System:* Spring Cloud microservices architecture (API Gateway, Eureka, JWT Auth, Parking, Booking, Billing, PostgreSQL).
   - *Vijayawada Smart City Portal:* Citizen services, grievance ticketing, department SLA routing concept.
   - *Student Attendance Tracker:* Single Page Application built with React, Vite, Material UI, and LocalStorage.
8. **AI & Data — Applied Learning:** Virtual job simulations via Forage (British Airways 79.5% ROC-AUC Random Forest model, Tata GenAI Risk & Collections, Deloitte Forensic Data Analytics) with direct links to authentic certificates.
9. **Achievements & Innovation Journey:** 12 verified milestones including SIH'25 National Finalist, Google Buildathon 2026 Shortlist, SIH'26 3D prototype showcase, SIH finalist mentorship, PitchX Mumbai, Purdue University EPICS interaction with Dr. William Oakes, and Ratan Tata Innovation Hub shortlist.
10. **Certifications Library:** Interactive category filtering (Cloud, Process & Data, AI & ML, Web & Software, Business) featuring AWS Certified Cloud Practitioner banner.
11. **Technical Skills Matrix:** Functional matrix across 8 engineering domains (no arbitrary percentage bars).
12. **Beyond the Code:** Human-centered personal brand strip (motorcycles, mountains, music, visual storytelling, tech trends).
13. **Contact & CTA:** High-contrast closing banner with instant mailto, clipboard copy, resume download, and social links.

---

## 🛠️ How to Deploy to GitHub Pages

### Method A: Web Browser Upload (Easiest)
1. Open your repository on GitHub:  
   `https://github.com/RishikPenumudi/Penumudi-Rishik-Portfolio`
2. Drag and drop the following files into the repository root:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
   - `assets/` folder (with `sahaj-primary.jpg`, `sahaj-supporting.png`, `Rishik_resume.pdf`, `favicon.svg`, and `certificates/`)
3. Write a commit message such as `Release: Next-Generation Portfolio Upgrade (Apple/Linear light design)` and click **Commit changes**.
4. Navigate to **Settings** → **Pages** in your repository.
5. Under **Build and deployment**, ensure:
   - **Source:** `Deploy from a branch`
   - **Branch:** `main` (or `master`)
   - **Folder:** `/(root)`
6. Click **Save**. Within 1–2 minutes, your live site will be published at:  
   `https://rishikpenumudi.github.io/Penumudi-Rishik-Portfolio/`

### Method B: Git Command Line
```bash
# Clone the repository
git clone https://github.com/RishikPenumudi/Penumudi-Rishik-Portfolio.git
cd Penumudi-Rishik-Portfolio

# Copy the updated files into the cloned folder
# (Ensure index.html, styles.css, script.js, and assets/ are present in root)

# Stage all files
git add -A

# Commit changes
git commit -m "feat: complete next-generation portfolio upgrade with light theme & interactive case studies"

# Push to GitHub
git push origin main
```

---

## ✅ Quality & Verification Checklist

- [x] **Light Theme Polish:** Clean, high-contrast, distraction-free aesthetic inspired by Apple and Linear.
- [x] **Photographic Preservation:** Actual SAHAJ prototype photographs retained at `assets/sahaj-primary.jpg` and `assets/sahaj-supporting.png`.
- [x] **Verified Profiles:** Working links to LinkedIn, GitHub, LeetCode, CodeChef, and Email.
- [x] **Authentic Resume:** One-click resume download pointing to `assets/Rishik_resume.pdf`.
- [x] **Credentials & Certificates:** Real PDF/image links for AWS, Celonis, SIH, BA, Tata, and Deloitte.
- [x] **Honest Distinctions:** Clearly separates validated physical prototype hardware from proposed AI roadmap capabilities.
- [x] **Performance & SEO:** OpenGraph tags, canonical tags, responsive viewport, lazy-loaded media, and semantic markup.
