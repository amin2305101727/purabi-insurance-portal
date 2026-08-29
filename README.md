# Purabi General Insurance Company Limited (PGICL) — Digital Portal

[![React](https://img.shields.io/badge/React-19.0-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.1-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

A modern, high-performance, and fully responsive digital insurance web application built for **Purabi General Insurance Company Limited (PGICL)**. This portal empowers customers across Bangladesh to explore general insurance solutions, calculate instant premium estimates, compare healthcare plans side-by-side, track claim statuses in real time, and complete secure digital policy payments.

---

## 🌟 Key Features

### 1. 🏥 Health Insurance Portal & Dynamic Floaters
- **Target Profile Customization**: Dedicated health plan selection tailored for **Self**, **Couple**, **Family**, and **Parents**.
- **Sum Insured Range Filters**: Filter by coverage from ৳ 1 Lac up to ৳ 10 Lac floater policies.
- **Side-by-Side Comparison Engine**: Compare up to 3 health insurance policies simultaneously in a detailed comparison matrix (covering cabin rent, ICU limits, cashless partner hospitals, pre/post hospitalization, ambulance allowances, and claim settlement rates).
- **Instant Plan Checkout**: Direct policy selection with integrated digital payment checkout and automated policy certificate generation.

### 2. ⚡ Instant Quote Calculator
- Quick price estimation on the home page across all major insurance verticals:
  - 🚗 Motor & Vehicle Insurance (Private Car, Commercial, Motorcycle)
  - 🏥 Health & Medical Floater Plans
  - ✈️ International & Domestic Travel Insurance
  - 🔥 Fire & Property Insurance
  - 🚢 Marine Cargo & Hull Insurance
  - 🛡️ Miscellaneous & Engineering Cover
- Smart Bangladeshi phone number format validation (`01XXXXXXXXX` or `+8801XXXXXXXXX`) with seamless cross-page state pre-filling.

### 3. 🔍 Live Claim Tracker
- Look up active and historical insurance claims using a Claim Reference ID (e.g. `CLM-2024-8891`, `CLM-2024-4102`).
- Visual 4-stage tracking timeline: **Submitted ➔ Surveyor Inspection ➔ Approval ➔ Disbursed via BEFTN/MFS**.

### 4. 💳 Multi-Gateway Digital Payment Modal
- Integrated mock payment gateway supporting:
  - **Mobile Financial Services (MFS)**: bKash, Nagad, Rocket, Upay
  - **Credit/Debit Cards**: Visa, Mastercard, UnionPay, Amex
  - **Internet Banking**: Citytouch, EBL SKYBANKING, Islami Bank Cellfin

### 5. 📱 Mobile-First Accessibility
- Floating bottom **Mobile Quick Bar** for one-tap 24/7 hotline calling, live claim lookup, and quick quote access.
- Fully adaptive layouts designed with WCAG-compliant color contrast and fluid scaling across mobile, tablet, and desktop viewports.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Framework** | [React 19](https://react.dev/) |
| **Language** | [TypeScript 5.8](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Bundler & Dev Server** | [Vite 6](https://vitejs.dev/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Routing** | [React Router v7](https://reactrouter.com/) |
| **Animation & Effects** | [Motion](https://motion.dev/) & [canvas-confetti](https://www.npmjs.com/package/canvas-confetti) |

---

## 📁 Project Structure

```
├── app/
│   ├── components/                 # Reusable UI modules & dialogs
│   │   ├── ClaimTrackerModal.tsx   # Real-time claim status tracker
│   │   ├── Footer.tsx              # Corporate footer with branch directory & quick links
│   │   ├── GetQuoteModal.tsx       # Multi-category instant quotation modal
│   │   ├── InsuranceCategoriesSlider.tsx # Interactive insurance products carousel
│   │   ├── MobileQuickBar.tsx      # Mobile sticky bottom quick action bar
│   │   ├── Navbar.tsx              # Main navigation with dropdowns & portal access
│   │   ├── PartnersMarquee.tsx     # Partner network & hospital logos marquee
│   │   ├── PaymentModal.tsx        # MFS & card payment checkout flow
│   │   ├── PlanComparisonModal.tsx # Side-by-side health plan comparison matrix
│   │   ├── PortalLoginModal.tsx    # Customer & agent self-service authentication
│   │   ├── TopHeader.tsx           # Contact information, hotline & social bar
│   │   └── VideoModal.tsx          # Corporate documentary & tutorial video viewer
│   ├── data/
│   │   └── mockData.ts             # Health plans, news, claims, branches & company info
│   ├── layout/
│   │   └── MainLayout.tsx          # Global page shell with modal provider contexts
│   ├── pages/
│   │   ├── About.tsx               # Board of directors, corporate history & financial overview
│   │   ├── HealthInsurance.tsx     # Health portal, custom plan builder & FAQs
│   │   └── Home.tsx                # Hero section, quick price finder, highlights & news
│   ├── App.tsx                     # Router outlet & route hierarchy
│   ├── app.css                     # Global styles & Tailwind imports
│   ├── routes.ts                   # Application route configuration
│   └── types.ts                    # TypeScript models & interface definitions
├── index.html                      # HTML entry point
├── package.json                    # Project scripts and dependencies
├── tsconfig.json                   # TypeScript compiler configuration
└── vite.config.ts                  # Vite build and plugin setup
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher (or `pnpm` / `yarn`)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ruhulamin18/purabi-insurance-portal.git
   cd purabi-insurance-portal
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The application will be accessible at `http://localhost:3000`.

---

## 🧪 Available Scripts

- `npm run dev`: Starts the local Vite development server with Hot Module Replacement on port `3000`.
- `npm run build`: Compiles TypeScript and creates an optimized production bundle in `/dist`.
- `npm run preview`: Locally previews the production build output.
- `npm run lint`: Runs TypeScript compiler (`tsc --noEmit`) to validate type safety.

---

## 🔒 Security & Best Practices

- **Strict Validation**: Phone numbers and form fields are sanitized and validated against standard telecom conventions.
- **Client-Side State Isolation**: Global modals utilize React Context without leaking sensitive form state.
- **Accessible UI**: ARIA tags, descriptive labels, and keyboard-navigable dialogs ensure an accessible experience for all users.

---

## 📄 License & Attribution

Designed and maintained for **Purabi General Insurance Company Limited (PGICL)**.  
All rights reserved © 2026.
