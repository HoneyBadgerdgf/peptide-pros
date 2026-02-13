# Peptide Pros

**Peptides Are for Everyone**

A professional landing page for Peptide Pros - a Las Vegas based peptide education and sourcing company.

## Features

- 🎨 Clean, professional design matching brand identity
- 📱 Fully responsive (mobile-first)
- ✉️ SMS integration for easy customer contact
- 🏃 Fast loading with Next.js 14
- 🎯 SEO optimized
- ♿ Accessible

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **TypeScript:** For type safety
- **Deployment:** Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import repository in Vercel
3. Deploy (zero configuration needed)

### Environment Variables

Update the phone number in `app/page.tsx`:

```typescript
const phoneNumber = "YOUR_PHONE_NUMBER_HERE";
```

## Content Sections

1. **Hero** - Main value proposition + CTA
2. **Why Peptide Pros** - Differentiation from competitors
3. **Who We Work With** - Target audiences
4. **Popular Compounds** - Educational overview
5. **How It Works** - 3-step process
6. **Transparency** - Trust building
7. **About the Founder** - Personal story
8. **Value Props** - Benefits overview
9. **CTA Section** - Contact info + guarantees
10. **Footer** - Disclaimer + contact

## Customization

### Colors

Brand colors defined in `tailwind.config.ts`:
- Primary: `#4A3933` (dark brown)
- Secondary: `#6B7655` (olive green)
- Accent: `#D4C4B0` (tan/beige)
- Cream: `#F5F1EC` (background)

### Phone Number

Update in `app/page.tsx`:
```typescript
const phoneNumber = "7025551234";
```

### Domain

Once you have a custom domain:
1. Add to Vercel project settings
2. Update `www.peptidepros.com` references in the code

## License

Private - Peptide Pros

## Contact

For questions or updates, contact David.
