# Yonatan Abrham | Civil & Highway Engineer + Data Scientist

[![Build Status](https://img.shields.io/badge/Build-Passing-005C5C.svg?style=flat-square)](https://github.com/YonInsights/Portfolio_website)
[![React](https://img.shields.io/badge/React-19.0-078F91.svg?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-08B9BD.svg?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v4.0-005C5C.svg?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Standards](https://img.shields.io/badge/Standards-AASHTO%20%7C%20ERA-0F172A.svg?style=flat-square)](https://www.transportation.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-005C5C.svg?style=flat-square)](LICENSE)

> **Official professional portfolio website for Yonatan Abrham Damte — Highway Design Engineer, GIS Specialist, and Data Scientist.**  
> Designed with the visual precision of leading international engineering consultancies (AECOM, WSP, Arcadis, Jacobs, Dar Al-Handasah) and built with modern data science elegance.

---

## 🌟 Professional Identity & Overview

Yonatan Abrham operates at the intersection of **heavy civil infrastructure engineering** and **computational data intelligence**. He combines physics-based geometric road design, GIS geomatics, parametric Civil 3D BIM modeling, and machine learning to deliver resilient, data-driven transportation systems.

- **Primary Disciplines**: Highway & Geometric Design, GIS Spatial Modeling, Civil 3D & 3D Visualization, Data Analytics, Transportation Machine Learning.
- **Academic Credentials**:
  - **BSc in Civil Engineering** — University of Gondar (2017 – 2022)
  - **MSc in Data Science and Information Systems** — Osiri University (2024 – 2025)
  - **Master of Art in Project Management (MAPM)** — American College of Technology (2022 – 2025)
- **Certifications**: Google Project Management Professional, Columbia University Construction Management, Autodesk Civil 3D 2025 Certified Specialist, LinkedIn Learning Subassembly Composer, 10 Academy AI Enhanced PM, ALX Africa Data Analytics.

---

## 📐 Key Features & Architecture

### 1. Interactive Engineering Viewport
- **Real-Time Vector CAD & GIS Canvas**: Dynamic coordinate tracking (`STA 0+000` to `STA 4+850`), horizontal alignment spiral transition curves, contour elevation tags (`EL 1925.00m`), and interactive layer toggles (`Alignment`, `GIS Catchments`, `Civil 3D Corridor`, `AI Congestion ML`).

### 2. Flagship Highway Case Study: Bishoftu Interchange
- Multi-tab technical drawing inspection module:
  - **Horizontal Alignment Plan**: Ramp gore geometry, loop ramps, overpass structures, and stationing.
  - **Dual-Carriageway Cross Section**: Multi-layer pavement structural breakdown (Asphalt wearing course, binder, crushed stone base, subbase, side ditch, median).
  - **Vertical Profile Curve**: Crest and sag vertical curves, K-values ($K=32$), and grade percentages.
  - **Itemized Bill of Quantities (BOQ)**: Earthwork excavation ($142,400\text{ m}^3$), embankment fill, subbase, asphalt, and concrete culverts.

### 3. In-Browser Highway Geometric Design Calculator
- Built-in live interactive engineering tool implementing AASHTO Green Book & Ethiopian Roads Administration (ERA) design standards:
  - **Minimum Horizontal Curve Radius**:
    $$\displaystyle R_{min} = \frac{V_d^2}{127(e_{max} + f_{max})}$$
  - **Stopping Sight Distance (SSD)**: Perception-reaction distance + braking distance on grade.
  - **Minimum Spiral Transition Length ($L_s$)**: Clothoid rate of acceleration $C=0.6\text{ m/s}^3$.

### 4. Data & AI Showcase: Addis Ababa Intelligent Traffic Management
- Interactive **Traffic Density Slider** demonstrating real-time delay reductions (-22% to -35%) comparing static signal timing vs. AI dynamic adaptive timing.
- Deep-dive LSTM neural network and XGBoost regression metrics ($R^2=0.89$, $\text{MAE}=3.4\text{ km/h}$).

### 5. 15+ Comprehensive Engineering Case Studies
- 11-section structured modal for every project: Context, Problem, Engineering Role, Methodology, Software Stack, Step-by-Step Process, Key Deliverables, Technical Drawings, Impact, Lessons Learned, and Scoping CTAs.
- Includes the 97.22 km Harar-Kombolcha trunk road, Jimma Corridor, Eleka Inc. AI Chatbot, and Ayat Tsebel 3D visual twin.

### 6. 3D Infrastructure Visualizer & Lightbox
- High-fidelity Civil 3D corridor assemblies, InfraWorks digital twins, and intersection visual models with fullscreen zoom, pan, and keyboard navigation.

### 7. Direct CV Download & Inquiry Routing System
- Single-click download of the complete official CV and degree certificates PDF (`/Yonatan_Abrham_CV.pdf`).
- Dynamic opportunity routing for international recruiters, remote clients, and MSc/PhD research supervisors.

---

## 🛠️ Technology Stack

| Category | Technologies / Standards |
| :--- | :--- |
| **Frontend Framework** | React 19, Vite 8, TypeScript 5.9 |
| **Styling & Design System** | Tailwind CSS v4 (`@tailwindcss/vite`), Custom CAD Grid Utilities |
| **Icons & Visuals** | Lucide React, Custom Engineering Vector SVGs, Canvas Confetti |
| **Civil Engineering Software** | AutoCAD Civil 3D 2026, InfraWorks 2026, Subassembly Composer, Global Mapper v26 |
| **Data Science & ML Stack** | Python (Pandas, NumPy, Scikit-Learn, PyTorch, XGBoost, SHAP), SQL, PostgreSQL / PostGIS |
| **Design Standards** | AASHTO Green Book, ERA Design Manuals (2013/2020), TRB HCM, NCHRP 672 |

---

## 🚀 Getting Started & Local Development

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18.0 or higher recommended)
- [npm](https://www.npmjs.com/) (version 9.0 or higher)

### Installation & Run

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/YonInsights/Portfolio_website.git
   cd Portfolio_website
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start Local Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for Production**:
   ```bash
   npm run build
   ```
   The compiled static bundle will be generated in `dist/`.

---

## 📁 Repository Structure

```
Portfolio_website/
├── public/
│   ├── Yonatan_Abrham_CV.pdf   # Complete verified CV & Certificates PDF
│   ├── favicon.svg             # Precision CAD-themed SVG favicon
│   ├── robots.txt              # SEO robot crawling definitions
│   └── sitemap.xml             # Search engine sitemap
├── src/
│   ├── components/
│   │   ├── about/              # "Engineering Meets Data" narrative & matrix
│   │   ├── contact/            # Inquiry form & direct contact channels
│   │   ├── education/          # Verified Degrees & Certifications
│   │   ├── experience/         # Career timeline (Omega, Meteoric, Eleka, Best Consulting)
│   │   ├── expertise/          # Interactive 5-discipline capability explorer
│   │   ├── featured/           # Bishoftu Interchange & Addis Ababa AI Showcase
│   │   ├── freelance/          # 8 consulting service packages
│   │   ├── hero/               # Hero headline & Interactive Engineering CAD Viewport
│   │   ├── layout/             # Sticky Navbar, Footer, & CAD Grid
│   │   ├── projects/           # Portfolio filter grid & 11-point Case Study Modal
│   │   ├── research/           # MSc/PhD academic collaboration proposals
│   │   ├── snapshot/           # 5-Pillar executive snapshot cards
│   │   ├── tools/              # Interactive Highway Geometric Calculator
│   │   └── visualization/      # 3D Infrastructure render gallery & Lightbox
│   ├── data/
│   │   ├── educationData.ts    # Degrees (BSc Gondar, MSc Osiri, MA ACT) & 10 Certs
│   │   ├── experienceData.ts   # 6 verified employment roles with service details
│   │   ├── expertiseData.ts    # 5 disciplines with capabilities vs. tools
│   │   ├── projectsData.ts     # 15+ detailed real-world engineering case studies
│   │   ├── researchData.ts     # Academic research questions and methodologies
│   │   ├── servicesData.ts     # Consulting packages & workflows
│   │   └── visualizationData.ts# 3D render assets & metadata
│   ├── types/
│   │   └── index.ts            # Strict TypeScript interfaces
│   ├── App.tsx                 # Main application root
│   ├── index.css               # Tailwind v4 theme & engineering blueprint styling
│   └── main.tsx                # React DOM entry point
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 📬 Contact & Inquiries

- **Name**: Yonatan Abrham Damte
- **Email**: [email2yonatan@gmail.com](mailto:email2yonatan@gmail.com)
- **Phone**: [+251 921 200 180](tel:+251921200180)
- **Location**: Addis Ababa, Ethiopia (Available for Global Remote & International Relocation)
- **GitHub**: [@YonInsights](https://github.com/YonInsights)

---

## 📄 License & Copyright

Copyright &copy; 2026 **Yonatan Abrham Damte**. All rights reserved.

The source code and portfolio assets are licensed under the [MIT License](LICENSE).

