# HomeLoop

A home service provider marketplace built with Next.js 15, React 19, Tailwind CSS, and FastAPI backend.

## Features

- 🏠 **Homepage** - Hero search, category grid, how it works
- 📁 **Directory** - Browse service categories
- 👤 **Provider Profiles** - Full profiles with services, gallery, contact form
- 📊 **Provider Dashboard** - Manage profile, services, gallery, view leads
- 🔐 **Admin Dashboard** - Approve/suspend providers, view submissions
- 🎨 **Beautiful UI** - Shadcn/ui components with Tailwind CSS

## Tech Stack

- **Frontend**: Next.js 16, React 19, TailwindCSS, Radix UI
- **Backend**: FastAPI, MongoDB (Motor), Python
- **Icons**: Lucide React
- **Notifications**: Sonner

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

backend/          # FastAPI backend
├── server.py     # Main FastAPI application
├── requirements.txt
└── uploads/      # File uploads directory

public/           # Static assets
package.json      # Node.js dependencies
```

## Getting Started

### Prerequisites

- Node.js 20+ and npm
- Python 3.9+
- MongoDB (optional for backend)

### Installation

1. **Install frontend dependencies:**
   ```bash
   npm install
   ```

2. **Install backend dependencies:**
   ```bash
   cd backend
   pip install -r requirements.txt
   ```

3. **Set up environment variables:**
   - Create `backend/.env` with:
     ```
     MONGO_URL=your_mongodb_connection_string
     DB_NAME=homeloop
     ```

### Development

**Run frontend only:**
```bash
npm run dev
```

**Run backend only:**
```bash
npm run backend
```

**Run both (requires `concurrently`):**
```bash
npm install -g concurrently
npm run dev:all
```

The Next.js app will run on http://localhost:3000 and the FastAPI backend on http://localhost:8000.

### Building for Production

```bash
npm run build
npm start
```

## Demo Credentials

- **Provider Login**: Any email + password
- **Admin Login**: Any email + password

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
