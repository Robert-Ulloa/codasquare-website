# Coda Square Website

Custom apps and websites for coffee shops - built with Next.js 14, Tailwind CSS, and TypeScript.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone or download this project**
   ```bash
   cd codasquare-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
codasquare-website/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main homepage
│   └── globals.css         # Global styles + Tailwind
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Navigation header
│   │   └── Footer.tsx      # Site footer
│   └── sections/
│       ├── HeroSection.tsx       # Hero/landing section
│       ├── ProblemSection.tsx    # Problem statement
│       └── SolutionSection.tsx   # Solution overview
├── public/                 # Static assets (add images here)
├── tailwind.config.js      # Tailwind configuration
└── package.json
```

## 🎨 Design System

### Colors
- **Primary (Blue)**: Brand color for main elements
  - `primary-600`: Main brand color
  - `primary-50 to primary-900`: Shades
  
- **Accent (Pink/Red)**: Attention-grabbing elements
  - `accent-500`: Main accent
  - `accent-50 to accent-900`: Shades

- **Neutral (Gray)**: Text and backgrounds
  - `neutral-900`: Dark text
  - `neutral-50`: Light backgrounds

### Typography
- Font: Inter (Google Fonts)
- Heading classes: `heading-xl`, `heading-lg`, `heading-md`

### Components
- Buttons: `btn-primary`, `btn-secondary`, `btn-accent`
- Cards: `card`
- Container: `container-custom`
- Section spacing: `section-padding`

## 🛠️ Development

### Adding New Sections

1. Create component in `components/sections/YourSection.tsx`
2. Import and add to `app/page.tsx`

Example:
```tsx
// components/sections/YourSection.tsx
'use client'
import { motion } from 'framer-motion'

export default function YourSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Your content */}
      </div>
    </section>
  )
}
```

### TODO: Remaining Sections to Build

- [ ] Features Section (Essential, Professional, Enterprise tiers)
- [ ] How It Works (8-12 week timeline)
- [ ] Portfolio/Work Section (case studies with Nimble Chicago)
- [ ] Why Custom vs White Label (comparison table)
- [ ] Who This Is For (ideal customers)
- [ ] Pricing Section (3 pricing tiers)
- [ ] About Section (your story + background)
- [ ] FAQ Section (common questions)
- [ ] Contact/CTA Section (consultation booking)

### Adding Images

1. Add images to `public/images/` folder
2. Use Next.js Image component:
```tsx
import Image from 'next/image'

<Image
  src="/images/your-image.jpg"
  alt="Description"
  width={800}
  height={600}
  className="rounded-xl"
/>
```

### Animations

Using Framer Motion for smooth animations:
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  {/* Content */}
</motion.div>
```

## 🚢 Deployment to Vercel

### Option 1: Connect GitHub (Recommended)

1. Push code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel auto-detects Next.js - just click "Deploy"
6. Done! Your site is live

### Option 2: Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Login and deploy:
   ```bash
   vercel login
   vercel
   ```

3. Follow prompts - Vercel handles everything automatically

### Custom Domain (codasquare.com)

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add `codasquare.com`
4. Update DNS records at your domain registrar:
   - Add A record: `76.76.21.21`
   - Add CNAME record: `cname.vercel-dns.com`

## 📝 Content Updates

### Updating Copy
All text content is in the component files. Search for the section you want to edit:
- Hero text: `components/sections/HeroSection.tsx`
- Problems: `components/sections/ProblemSection.tsx`
- Solution: `components/sections/SolutionSection.tsx`

### Updating Metadata (SEO)
Edit `app/layout.tsx`:
```tsx
export const metadata: Metadata = {
  title: 'Your New Title',
  description: 'Your new description',
  // ...
}
```

## 🎯 Next Steps

1. **Complete remaining sections** (see TODO list above)
2. **Add real images/mockups**
   - Hero section mockup
   - Portfolio screenshots
   - Your professional photo for About section
3. **Set up contact form**
   - Use Formspree, Basin, or Resend for email
4. **Add analytics**
   - Vercel Analytics (free)
   - Or Plausible/Fathom for privacy-focused analytics
5. **Test on mobile devices**
6. **Deploy to Vercel**
7. **Connect custom domain**

## 🔧 Commands

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
```

## 📚 Documentation

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)

## 💬 Questions?

This is your project - customize everything! The foundation is here, 
now make it uniquely yours.

Built by Roberto for Coda Square
