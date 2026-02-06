# Quick Setup Guide

## Get Started in 5 Minutes

### 1. Open in VS Code
```bash
cd codasquare-website
code .
```

### 2. Install Dependencies
Open the terminal in VS Code (Ctrl+` or Cmd+`) and run:
```bash
npm install
```

This will install:
- Next.js 14
- React 18
- Tailwind CSS
- Framer Motion (animations)
- React Icons
- TypeScript

### 3. Start Development Server
```bash
npm run dev
```

### 4. Open in Browser
Go to: http://localhost:3000

You should see the Coda Square website with:
- ✅ Responsive navigation header
- ✅ Hero section with CTAs
- ✅ Problem section (3 pain points)
- ✅ Solution section (features overview)
- ✅ Footer with links

## What's Built So Far

### ✅ Completed
- Project structure and configuration
- Design system (colors, typography, components)
- Responsive navigation with mobile menu
- Hero section with animations
- Problem section (3 cards)
- Solution section with feature list
- Footer with social links
- Smooth scroll and animations
- Mobile-responsive design

### 🔨 TODO (Next Steps)
1. **Features Section** - 3 tiers (Essential, Professional, Enterprise)
2. **How It Works** - Timeline (8-12 weeks)
3. **Portfolio Section** - Case studies (Nimble Chicago + demos)
4. **Why Custom Section** - Comparison table (custom vs white-label)
5. **Who This Is For** - Ideal customer profile
6. **Pricing Section** - 3 pricing cards
7. **About Section** - Your story and background
8. **FAQ Section** - Common questions
9. **Contact Section** - Consultation booking form

## Project Structure Quick Reference

```
app/
├── layout.tsx              # Site-wide layout + metadata
├── page.tsx               # Homepage (imports all sections)
└── globals.css            # Tailwind + custom styles

components/
├── layout/
│   ├── Header.tsx         # Navigation (sticky header)
│   └── Footer.tsx         # Footer with links
└── sections/
    ├── HeroSection.tsx    # Landing hero
    ├── ProblemSection.tsx # Pain points
    └── SolutionSection.tsx # Features overview
```

## Making Changes

### Update Text Content
Each section has its content inside the component file:
- `components/sections/HeroSection.tsx` - Edit hero headline/description
- `components/sections/ProblemSection.tsx` - Edit problem statements
- `components/sections/SolutionSection.tsx` - Edit solution features

### Add New Section
1. Create `components/sections/YourSection.tsx`
2. Import in `app/page.tsx`
3. Add between existing sections

### Change Colors
Edit `tailwind.config.js`:
```js
colors: {
  primary: { ... },  // Main brand color (currently blue)
  accent: { ... },   // Highlight color (currently pink/red)
}
```

### Add Images
1. Put images in `public/images/`
2. Use Next.js Image component:
```tsx
import Image from 'next/image'

<Image 
  src="/images/mockup.png" 
  alt="App mockup"
  width={800}
  height={600}
/>
```

## Common Commands

```bash
npm run dev          # Start dev server (with hot reload)
npm run build        # Build for production
npm run start        # Run production build locally
npm run lint         # Check for code issues
```

## Tips for Development

1. **Hot Reload**: Save any file and see changes instantly in browser
2. **Component-First**: Build one section at a time
3. **Mobile Testing**: Open Chrome DevTools (F12) → Toggle device toolbar
4. **Tailwind Classes**: Use VSCode autocomplete for class names
5. **Animations**: Already configured with Framer Motion

## Deploy When Ready

### Quick Deploy to Vercel
```bash
npm install -g vercel
vercel login
vercel
```

That's it! Vercel handles everything automatically.

### Custom Domain Setup
1. Go to Vercel dashboard
2. Add domain: codasquare.com
3. Update DNS at your registrar

## Need Help?

- Check `README.md` for detailed docs
- Search "Next.js [feature]" for framework help
- Search "Tailwind [style]" for styling help
- Check components for code examples

## Next Immediate Step

Start building the **Features Section** next. It's already outlined in the copy we wrote earlier. Create:

`components/sections/FeaturesSection.tsx`

Use the existing sections as templates!
