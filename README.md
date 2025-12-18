# HomeLoop - Next.js Demo

A home service provider marketplace demo built with Next.js 15, React 19, and Tailwind CSS.

## Features

- 🏠 **Homepage** - Hero search, category grid, how it works
- 📁 **Directory** - Browse service categories
- 👤 **Provider Profiles** - Full profiles with services, gallery, contact form
- 📊 **Provider Dashboard** - Manage profile, services, gallery, view leads
- 🔐 **Admin Dashboard** - Approve/suspend providers, view submissions
- 🎨 **Beautiful UI** - Shadcn/ui components with Tailwind CSS

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **UI**: React 19, Tailwind CSS, Shadcn/ui
- **Icons**: Lucide React
- **Notifications**: Sonner

## Demo Mode

This is a **zero-database demo**:
- All data is hardcoded in `/lib/data.js`
- Authentication uses localStorage (any credentials work)
- Contact forms simulate success without sending emails
- File uploads are simulated
- CRUD operations persist only in component state

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Deploy to Vercel

1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Vercel auto-detects Next.js and deploys
4. Done! Get your `.vercel.app` URL

Or use CLI:
```bash
npm i -g vercel
vercel
```

## Project Structure

```
nextjs/
├── app/
│   ├── layout.jsx          # Root layout with providers
│   ├── client-layout.jsx   # Client-side navbar/footer
│   ├── page.jsx            # Homepage
│   ├── directory/
│   │   ├── page.jsx        # All categories
│   │   └── [slug]/page.jsx # Category providers
│   ├── providers/
│   │   └── [slug]/page.jsx # Provider profile
│   ├── login/page.jsx      # Provider login
│   ├── register/page.jsx   # Provider registration
│   ├── dashboard/page.jsx  # Provider dashboard
│   └── admin/
│       ├── page.jsx        # Admin dashboard
│       └── login/page.jsx  # Admin login
├── components/
│   ├── layout.jsx          # Navbar & Footer
│   └── ui/                 # Shadcn/ui components
├── lib/
│   ├── auth.js             # Auth context (localStorage)
│   ├── data.js             # Demo providers & categories
│   └── utils.js            # cn() helper
└── public/                 # Static assets
```

## Demo Credentials

- **Provider Login**: Any email + password
- **Admin Login**: Any email + password

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
