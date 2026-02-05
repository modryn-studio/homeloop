# Project Spec: HomeLoop

**Generated:** December 18, 2025

---

## 1. Project Title

**HomeLoop**

---

## 2. One-Paragraph Summary

A marketplace directory with single-page website generator for home service providers. Includes hero sections, service listings, galleries, contact forms, and a browsable category-based directory where homeowners can find and view provider profiles.

---

## 3. Primary Goal

**Enable homeowners to find and contact qualified home service providers in under 3 minutes without visiting multiple websites or making phone calls.**

This is measurable through time-to-contact and conversion rates, solves the core pain of fragmented provider research, and drives value for both marketplace sides.

---

## 4. Constraints (Hard Rules)

### Timeline: 4-6 Weeks to v1

- **Weeks 1-2:** Core directory (browse, search, view profiles)
- **Weeks 3-4:** Website generator (templates, content editor, publishing)
- **Weeks 5-6:** Contact forms, polish, initial provider onboarding

### Budget: $500-1,000 (Bootstrapped)

- **Domain + hosting:** $50-100/year (Vercel free tier + custom domain)
- **Email delivery:** $0-20/month (Resend free tier = 3,000 emails/month)
- **Image storage:** $0-50 (Cloudinary free tier = 25GB)
- **Design assets:** $0-30 (Tailwind UI or component library)
- **Contingency:** $400-800

No payment processing fees—launch free to validate, add paid tiers in v2.

### Team Size: 1-2 People

- **Solo:** Full-stack + design using modern templates (shadcn/ui, Tailwind)
- **Two people:** Person 1 handles frontend + directory UX; Person 2 handles backend + website generator
- **Critical:** Daily 15-minute syncs if working with a partner

### Tech Stack

**Required:**
- **Next.js/React:** SSR needed for SEO (homeowners search Google for "plumber near me")
- **PostgreSQL:** Relational data (providers, services, categories) requires joins
- **Object storage (Cloudinary/S3):** Provider photos cannot live in database

**Avoid:**
- Complex CMS (Strapi, Contentful)—you're building a website generator
- Serverless functions for everything—cold starts degrade UX
- Custom image upload/resize pipeline—use Cloudinary

**Cut if behind schedule:**
- Full-text search (use SQL `LIKE` queries first)
- Custom domains for provider sites (use subdomains: `johnsplumbing.homeloop.com`)
- Analytics dashboard for providers

### Forcing Function

**Ship a working demo to 3 real service providers by end of week 6.** If you cannot onboard actual users with real content, you've built the wrong thing.

### Deployment & Infrastructure

**Frontend + Marketing:** Vercel (free tier, 100GB bandwidth/month)  
**Backend + Database:** Railway ($0-5/month, 500MB-1GB PostgreSQL)  
**File Storage:** Cloudinary (free tier, 25GB storage + bandwidth)  
**Email Delivery:** Resend (free tier, 3,000 emails/month)  
**Custom Domains:** Start with subdomains only (free), add custom domain support in v2

**What You Don't Need:**
- Kubernetes/Docker (hosts handle containers)
- Separate API server (use Next.js API routes)
- Redis caching (add when pages take >2s to load)
- Load balancers (handled by hosting)

**Monitoring:** Add by week 4 using Vercel Analytics (built-in) + Sentry (10,000 errors/month free)

**Monthly Cost:** $0-20 for first 100 providers and 5,000-10,000 monthly visitors

---

## 5. In-Scope Requirements

### Essential Features (Cannot Ship Without These)

**Directory & Discovery**
- Display browsable list of service providers organized by categories with at least 3 subcategories per main category
- Allow homeowners to search providers by service type and zip code, returning results within 25-mile radius
- Show provider preview cards with business name, primary service, service area, profile photo, and average response time

**Provider Profile Pages**
- Generate public-facing single-page website for each provider at `[provider-name].homeloop.com`
- Include hero section, services list (minimum 3 services with descriptions), photo gallery (6-12 images), and contact form
- Allow providers to edit profile content through WYSIWYG editor without requiring code knowledge
- Display business hours, service areas (by zip code), and at least one contact method

**Lead Generation & Contact**
- Provide contact form capturing homeowner name, email, phone, service needed, and preferred contact time
- Deliver form submissions to providers via email within 5 minutes with formatted information
- Send homeowners confirmation email immediately after submission with provider details and next steps

**Provider Onboarding**
- Allow new providers to create account, select service category, enter business details, upload 1 logo + minimum 3 photos, and publish profile—all within 15 minutes
- Enforce required fields (business name, service category, service area, contact method, minimum 3 services) before publication

**Admin Management**
- Provide admin dashboard to approve/reject new provider signups, flag inappropriate content, and view active provider count and total contact form submissions

### Nice-to-Have (Cut If Behind Schedule)

- Review/rating system
- Provider analytics dashboard
- Photo gallery with lightbox/carousel
- Google My Business integration
- SMS notifications for new leads

### Explicitly v2+ Features

- Payment processing for premium listings
- Calendar/booking system
- Multi-provider comparison tool
- Mobile apps
- AI-powered provider matching
- Background check verification badges

### Launch Criteria

You can ship v1 when:
- ✅ A homeowner can find a provider and submit a contact form in under 3 minutes
- ✅ A provider can set up their complete profile and go live in under 15 minutes
- ✅ 3 real service providers have published profiles with real content
- ✅ All contact forms deliver to correct providers within 5 minutes

---

## 6. Explicit Non-Goals

**Do NOT build in v1:**

1. **Advanced provider analytics dashboard**—Show simple lead count ("7 contact submissions this month"), not traffic charts or heat maps. Add detailed analytics when providers request it 3+ times.

2. **User account system for homeowners**—No registration, login, saved searches, or favorites. Contact forms work without authentication. Every form field reduces conversion by 10-25%.

3. **Review & rating system**—You need 100+ reviews per provider for statistical significance. Link to existing Google/Yelp profiles instead. Add native reviews when you have 50+ active providers.

4. **Native mobile apps (iOS/Android)**—Responsive web works on mobile. 80% of traffic will be mobile web from Google searches. Build apps only when providers explicitly request them.

5. **Multi-language support**—Launch English only. Track zip codes with traction. Add Spanish when 20%+ of traffic comes from bilingual areas. Use Localize.js for quick implementation later.

6. **Advanced booking/scheduling system**—Home service providers typically quote on-site before committing to times. Contact forms asking "preferred contact time" are sufficient. Add booking when 10+ providers specifically request it.

7. **Export features**—No PDF downloads, CSV exports, or printable business cards. Providers don't need these until they have 50+ leads to manage.

---

## 7. Data Model

### Core Entities

**1. Provider**

Home service business (plumber, electrician, etc.)

**Key Fields:**
- `id` (UUID, primary key)
- `created_at` (timestamp)
- `business_name` (string, required)
- `slug` (string, unique)—for `johnsplumbing.homeloop.com`
- `email` (string, required, unique)
- `phone` (string, required)
- `service_category_id` (foreign key → ServiceCategory)
- `service_areas` (array of zip codes)
- `bio` (text, max 500 chars)
- `logo_url` (string)—Cloudinary URL
- `status` (enum: `pending`, `active`, `suspended`)
- `average_response_time` (string)—"Within 2 hours"

**Constraints:**
- `slug` must be URL-safe (lowercase, hyphens only)
- Must have at least 1 service area to publish
- `status` defaults to `pending` until admin approves

---

**2. Service**

What a provider offers (e.g., "Emergency Plumbing")

**Key Fields:**
- `id` (UUID, primary key)
- `created_at` (timestamp)
- `provider_id` (foreign key → Provider)
- `title` (string, required, max 100 chars)
- `description` (text, max 300 chars)
- `display_order` (integer)

**Constraints:**
- Minimum 3 services per provider to publish
- `display_order` must be unique per provider
- `title` cannot be empty or whitespace-only

---

**3. ServiceCategory**

Browsable directory structure (Plumbing, Electrical, etc.)

**Key Fields:**
- `id` (UUID, primary key)
- `created_at` (timestamp)
- `name` (string, required, unique)
- `slug` (string, unique)
- `icon_name` (string)
- `display_order` (integer)
- `parent_category_id` (foreign key → ServiceCategory, nullable)—enables subcategories

**Constraints:**
- Top-level categories have `parent_category_id = null`
- `slug` must be URL-safe
- Cannot delete category if providers are using it
- Maximum 2 levels deep (parent → child, no grandchildren)

---

**4. ContactSubmission**

Lead requests from homeowners to providers

**Key Fields:**
- `id` (UUID, primary key)
- `created_at` (timestamp)
- `provider_id` (foreign key → Provider)
- `homeowner_name` (string, required)
- `homeowner_email` (string, required, validated)
- `homeowner_phone` (string, required)
- `service_needed` (text, required)
- `preferred_contact_time` (string)
- `zip_code` (string, 5 digits)
- `email_sent_at` (timestamp, nullable)
- `email_status` (enum: `pending`, `sent`, `failed`)

**Constraints:**
- `homeowner_email` must match valid email regex pattern
- `zip_code` must be 5 digits
- Cannot submit if `provider.status != "active"`
- Auto-delete submissions older than 90 days

---

### Entity Relationships

**Provider ↔ ServiceCategory:** Many-to-one (each provider has one primary category)

**Provider ↔ Service:** One-to-many (one provider offers multiple services). Cascade delete: if provider deleted, all services deleted.

**Provider ↔ ContactSubmission:** One-to-many (one provider receives multiple submissions). No cascade delete—keep submissions for analytics/compliance even if provider deletes account.

**ServiceCategory ↔ ServiceCategory:** Self-referencing one-to-many (categories can have child categories). Maximum 2 levels deep.

---

## 8. Interfaces

### Primary User Journey: Homeowner Finding a Provider

**Goal:** Submit a contact request in under 3 minutes

1. **Land on homepage** → See headline, featured categories (6-8 cards), and search bar (service dropdown + zip code input)

2. **Select "Plumbing" category** → Click card or use search → Navigate to `/directory/plumbing?zip=02138`

3. **View filtered list** → See 5-12 provider cards showing logo, name, service area, response time, and "View Profile" button. Results sorted by proximity.

4. **Click "View Profile"** → Navigate to `johnsplumbing.homeloop.com` → Page loads in under 2 seconds

5. **Scan provider profile** → Review hero section, services offered, photo gallery (6-12 images), service areas, and business hours

6. **Click "Request Service" button** → Auto-scroll to contact form or open modal

7. **Complete contact form** → Fill name, email, phone, service description, preferred contact time → Click "Send Request"

8. **See confirmation** → Success message appears with expected response time and provider phone number

9. **Receive confirmation email** → Within 1 minute, receive email with request summary, provider contact info, and next steps

10. **Provider contacts user** → Provider receives email notification and calls/emails within 2 hours (transaction happens offline)

---

### Backend APIs

**Public Directory & Search**
- `GET /api/categories` - Fetch all service categories with subcategories
- `GET /api/categories/:slug/providers?zip=02138&radius=25` - Get providers by category and location
- `GET /api/providers/:slug` - Fetch single provider profile with services and gallery

**Contact Form & Lead Generation**
- `POST /api/contact-submissions` - Create contact submission, validate fields, trigger provider email notification

**Provider Onboarding & Management**
- `POST /api/auth/register` - Create provider account
- `POST /api/auth/login` - Authenticate provider
- `GET /api/providers/me` - Fetch logged-in provider's profile
- `PUT /api/providers/me` - Update provider profile
- `POST /api/providers/me/logo` - Upload logo
- `GET /api/providers/me/services` - Fetch services
- `POST /api/providers/me/services` - Add service
- `PUT /api/providers/me/services/:id` - Edit service
- `DELETE /api/providers/me/services/:id` - Remove service
- `POST /api/providers/me/gallery` - Upload gallery image
- `DELETE /api/providers/me/gallery/:id` - Remove gallery image
- `PUT /api/providers/me/publish` - Mark profile ready for review

**Admin Management**
- `POST /api/auth/admin/login` - Admin authentication
- `GET /api/admin/providers?status=pending` - List providers awaiting approval
- `PUT /api/admin/providers/:id/approve` - Activate provider
- `PUT /api/admin/providers/:id/suspend` - Suspend provider
- `GET /api/admin/stats` - Dashboard metrics
- `GET /api/admin/contact-submissions?flagged=true` - View flagged submissions

---

### External Services

**Email Delivery (Resend or Postmark):** Send transactional emails for contact form submissions, provider notifications, and confirmations. Free tier: 3,000 emails/month (Resend) or 100 emails/month (Postmark).

**Image Storage (Cloudinary):** Handle logo and gallery photo uploads with automatic optimization and CDN delivery. Free tier: 25GB storage + bandwidth.

---

## 9. Execution Order

### Phase 1: Foundation (Days 1-2)

**Day 1 - Project Setup**
- Initialize Next.js with TypeScript + Tailwind CSS
- Set up GitHub repo (main/dev branches)
- Configure ESLint + Prettier
- Deploy placeholder page to Vercel
- Set up Railway PostgreSQL database
- Install and configure Prisma ORM

**Day 2 - Database Schema**
- Create Prisma schema with all 4 entities
- Run initial migration
- Seed database with 5-6 service categories
- Create 2 dummy providers for testing

---

### Phase 2: Public Directory (Days 3-6)

**Day 3 - Homepage + Category Browsing**
- Build homepage with hero, search bar, and category grid
- Create `/api/categories` endpoint
- Make category cards navigate to `/directory/[slug]`

**Day 4 - Provider Listing Page**
- Build `/directory/[slug]` page with provider cards
- Create `GET /api/categories/:slug/providers?zip=XXXXX` endpoint
- Implement distance calculation (zip → lat/long → haversine)
- Display provider cards with key information

**Day 5 - Search Functionality**
- Make homepage search form functional
- Redirect to directory with filters on submit
- Add "No providers found" empty state
- Add loading spinner

**Day 6 - Provider Profile Page Shell**
- Create `/providers/[slug]` route
- Create `GET /api/providers/:slug` endpoint
- Build profile layout: hero, services, gallery, contact form placeholder

---

### Phase 3: Lead Generation (Days 7-9)

**Day 7 - Contact Form UI**
- Build contact form component with validation
- Add form to provider profile page
- Wire up to API endpoint (build next day)
- Show success/error messages

**Day 8 - Contact Submission API + Email**
- Create `POST /api/contact-