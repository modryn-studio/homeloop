# HomeLoop

A home service provider marketplace demo built with Next.js 16, React 19, and Tailwind CSS.

## Features

- 🏠 **Homepage** - Hero search, category grid, how it works
- 📁 **Directory** - Browse service categories
- 👤 **Provider Profiles** - Full profiles with services, gallery, contact form
- 📊 **Provider Dashboard** - Manage profile, services, gallery, view leads
- 🔐 **Admin Dashboard** - Approve/suspend providers, view submissions
- 🎨 **Beautiful UI** - Shadcn/ui components with Tailwind CSS

## Tech Stack

- **Frontend**: Next.js 16, React 19, TailwindCSS, Radix UI
- **Data**: Mock data (client-side demo)
- **Icons**: Lucide React
- **Notifications**: Sonner
- **Forms**: React Hook Form + Zod validation (ready for expansion)

## Project Structure

```
app/              # Next.js app directory
├── layout.jsx          # Root layout with providers
├── client-layout.jsx   # Client-side navbar/footer
├── page.jsx            # Homepage
├── directory/
│   ├── page.jsx        # All categories
│   └── [slug]/page.jsx # Category providers
├── providers/
│   └── [slug]/page.jsx # Provider profile
├── login/page.jsx      # Provider login
├── register/page.jsx   # Provider registration
├── dashboard/page.jsx  # Provider dashboard
└── admin/
    ├── page.jsx        # Admin dashboard
    └── login/page.jsx  # Admin login

components/       # React components
├── layout.jsx          # Navbar & Footer
└── ui/                 # Shadcn/ui components

lib/              # Utility functions and shared code
├── auth.js             # Auth context (localStorage)
├── data.js             # Demo providers & categories
└── utils.js            # cn() helper
```

## Getting Started

### Prerequisites

- Node.js 20+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will run on http://localhost:3000

### Building for Production

```bash
npm run build
npm start
```

## Demo Credentials

- **Provider Login**: Any email + password (mock authentication)
- **Admin Login**: Any email + password (mock authentication)

## Deploy to Vercel

1. Push to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Vercel auto-detects Next.js and deploys
4. Done! Get your `.vercel.app` URL

Or use CLI:
```bash
npm i -g vercel
vercel
```

## Future Enhancements

If moving to production, consider:
- **Backend**: Vercel Serverless Functions or Supabase
- **Database**: PostgreSQL (Supabase) or MongoDB Atlas
- **Auth**: NextAuth.js or Supabase Auth
- **File Storage**: Vercel Blob or Supabase Storage
- **Forms**: Already includes React Hook Form + Zod for validation

## Customization

### Add More Providers
Edit `/lib/data.js` and add to the `providers` array.

### Add More Categories
Edit `/lib/data.js` and add to the `categories` array.

### Change Styling
- CSS variables in `/app/globals.css`
- Tailwind config in `/tailwind.config.js`

## License

MIT
