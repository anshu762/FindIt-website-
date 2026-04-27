# FindIt. - Car Buying, Reimagined. 🚗✨

FindIt is a premium, AI-driven car recommendation platform designed specifically for the unique needs of the Indian market. Unlike traditional search engines, FindIt focuses on your **lifestyle, family needs, and real ownership costs** to help you find the car that truly fits.

![FindIt Banner](app/icon.png)

## 🌟 Key Features

### 🧠 AI-Powered Lifestyle Quiz (WMCS Algorithm)
Answer 6 simple questions about your family size, road types, and budget. Our **Weighted Multi-Constraint Scoring** algorithm calculates a 100-point "Match Score" for over 100+ vehicles to find your perfect partner.

### 📊 Real-World Running Costs
No more guessing fuel bills. Get a detailed breakdown of monthly and annual costs, including:
- Fuel (based on your daily KM)
- Insurance premiums
- Scheduled service costs

### 📉 Resale Value Prediction
See your car's future. Our engine predicts depreciation rates over 1, 3, and 5 years, helping you make a sound financial investment.

### 🛡️ Premium Member Hub & Security
- **Personalized Dashboard**: Save cars, track your activity, and manage your "Fleet".
- **Secure Auth**: High-fidelity authentication flow powered by **Auth.js v5**.
- **Global Protection**: Advanced Next.js 16 **Proxy** implementation for secure route guarding.

### ⚖️ Advanced Comparison
Side-by-side comparison of up to 3 vehicles with a focus on metrics that matter—not just specs.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router & Turbopack)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & [Shadcn/UI](https://ui.shadcn.com/)
- **Database**: [Prisma ORM](https://www.prisma.io/) with Neon PostgreSQL
- **Authentication**: [Auth.js v5](https://authjs.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Data Visualization**: [Recharts](https://recharts.org/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/anshu762/FindIt-website-
cd FindIt-website-
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
Create a `.env` file in the root directory:
```env
DATABASE_URL="your-postgresql-url"
AUTH_SECRET="your-auth-secret"
AUTH_URL="http://localhost:3000"
```

### 4. Database Setup
```bash
npx prisma generate
npx prisma db push
npx prisma db seed
```

### 5. Run the development server
```bash
npm run dev
```

---

## 🧠 The Recommendation Engine

FindIt uses a specialized algorithm called **WMCS (Weighted Multi-Constraint Scoring)**.

1.  **Hard Filters**: Eliminates cars that don't meet minimum requirements (Seating, Budget, Fuel preference).
2.  **Weighted Dimension Scoring**:
    - **Economical Fit (35%)**: Reward for complete variant coverage within budget.
    - **Functional Fit (25%)**: Alignment with family size and seating.
    - **Environmental Fit (20%)**: Compatibility with road types (Ground Clearance/Mileage).
    - **Safety Bonus (10%)**: Rewarding high safety ratings.

---

## 📂 Project Structure

- `app/`: Next.js App Router (Layouts, Pages, API)
- `components/`: Modular UI components (Shared, Layout, Cars, Quiz)
- `lib/`: Business logic (Prisma, Auth config, Recommendation engine)
- `prisma/`: Database schema and seed data
- `types/`: Global TypeScript definitions
- `public/`: Static assets and icons

---

Designed with ❤️ for Indian car buyers.
