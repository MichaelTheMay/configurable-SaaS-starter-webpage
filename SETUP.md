# Quick Setup Guide

Follow these steps to get your SaaS website up and running.

## 🚀 Quick Start (5 Minutes)

### Step 1: Configure Your Website (2 minutes)

Open `config.ts` and replace the placeholders:

```bash
# Minimum required replacements:
1. Company name: {{COMPANY_NAME}} → "Your Company"
2. Company email: {{CONTACT_EMAIL}} → "hello@yourcompany.com"
3. Hero headline: {{HERO_HEADLINE}} → "Your Value Proposition"
4. Hero subheadline: {{HERO_SUBHEADLINE}} → "Explain your benefit"
5. At least one feature with real text
6. At least one pricing plan with real text
```

### Step 2: Setup Environment (1 minute)

```bash
# Copy environment template
cp .dev.vars.example .dev.vars

# Edit .dev.vars and add your keys:
# - STRIPE_SECRET_KEY (from Stripe Dashboard)
# - RESEND_API_KEY (from Resend)
# - JWT_SECRET (generate with: openssl rand -base64 32)
```

### Step 3: Setup Database (1 minute)

```bash
# Create database
npm run db:create

# Copy the database_id from output
# Update wrangler.jsonc with the database_id

# Run migrations
npm run db:migrate:local
```

### Step 4: Build & Run (1 minute)

```bash
# Build
npm run build

# Start server
pm2 start ecosystem.config.cjs

# Test
npm test

# View in browser
# Open http://localhost:3000
```

---

## 🎨 Full Configuration (30 Minutes)

For a production-ready website, configure all sections in `config.ts`:

### Priority 1: Essential Content
- [ ] Company information (name, email, tagline)
- [ ] Hero section (headline, CTA button)
- [ ] 3-6 features with descriptions
- [ ] 2-3 pricing plans
- [ ] Lead form fields
- [ ] SEO title and description

### Priority 2: Branding
- [ ] Add logo to `public/static/logo.png`
- [ ] Add favicon to `public/static/favicon.ico`
- [ ] Update brand colors (if desired)
- [ ] Add social media links

### Priority 3: Integrations
- [ ] Configure Stripe products in dashboard
- [ ] Add Stripe Price IDs to pricing plans
- [ ] Setup Resend domain and API key
- [ ] Configure email sender addresses

### Priority 4: Optional Features
- [ ] Add testimonials with photos
- [ ] Configure OAuth providers (Google, GitHub)
- [ ] Add hero background image
- [ ] Setup Google Analytics

See `CONFIGURATION_GUIDE.md` for detailed instructions.

---

## 💳 Stripe Setup (10 Minutes)

### 1. Create Stripe Account
- Go to https://stripe.com
- Sign up for free account
- Complete business verification (for production)

### 2. Create Products
```
Dashboard → Products → Add Product

For each pricing tier:
1. Create new product
2. Set name (e.g., "Starter Plan")
3. Add price (e.g., $29/month)
4. Copy the Price ID (starts with price_)
5. Paste into config.ts → pricing.plans[].stripePriceId
```

### 3. Get API Keys
```
Dashboard → Developers → API Keys

1. Copy "Publishable key" → config.ts → integrations.stripe.publishableKey
2. Copy "Secret key" → .dev.vars → STRIPE_SECRET_KEY
```

### 4. Test Mode
```
Use test keys (pk_test_ and sk_test_) during development
Use test card: 4242 4242 4242 4242 (any future date, any CVC)
```

---

## 📧 Resend Setup (5 Minutes)

### 1. Create Account
- Go to https://resend.com
- Sign up for free (3,000 emails/month)

### 2. Verify Domain (Production)
```
1. Add your domain in Resend dashboard
2. Add DNS records (MX, TXT, CNAME)
3. Wait for verification (1-24 hours)
```

### 3. Get API Key
```
Dashboard → API Keys → Create API Key

1. Copy API key → .dev.vars → RESEND_API_KEY
2. Update config.ts:
   - integrations.email.fromEmail = "noreply@yourdomain.com"
   - integrations.email.notificationEmail = "leads@yourdomain.com"
```

### 4. Test Locally
```
For local development, you can use onboarding@resend.dev as the from address
```

---

## 🔐 Authentication Setup (Optional)

### Google OAuth

```
1. Go to: https://console.cloud.google.com/apis/credentials
2. Create OAuth 2.0 Client ID
3. Add authorized redirect URI:
   http://localhost:3000/api/auth/google/callback (dev)
   https://yourdomain.com/api/auth/google/callback (prod)
4. Copy Client ID → config.ts → auth.providers.google.clientId
5. Copy Client Secret → .dev.vars → GOOGLE_CLIENT_SECRET
```

### GitHub OAuth

```
1. Go to: https://github.com/settings/developers
2. Create New OAuth App
3. Set callback URL:
   http://localhost:3000/api/auth/github/callback (dev)
   https://yourdomain.com/api/auth/github/callback (prod)
4. Copy Client ID → config.ts → auth.providers.github.clientId
5. Copy Client Secret → .dev.vars → GITHUB_CLIENT_SECRET
```

---

## 🚀 Deployment to Cloudflare Pages (10 Minutes)

### Prerequisites
```bash
# Install Wrangler globally (if needed)
npm install -g wrangler

# Login to Cloudflare
wrangler login
```

### Deploy Steps

```bash
# 1. Build project
npm run build

# 2. Create database (production)
wrangler d1 create webapp-production

# 3. Update wrangler.jsonc with database_id from step 2

# 4. Run production migrations
npm run db:migrate:prod

# 5. Deploy to Cloudflare Pages
npm run deploy:prod

# 6. Add production secrets
wrangler secret put STRIPE_SECRET_KEY --project-name webapp
wrangler secret put RESEND_API_KEY --project-name webapp
wrangler secret put JWT_SECRET --project-name webapp
```

### After Deployment

```
1. You'll get a URL: https://webapp-xyz.pages.dev
2. Update Stripe webhook URL to: https://your-url.pages.dev/api/stripe/webhook
3. Update OAuth redirect URLs to use your production domain
4. Test all functionality
```

---

## 🧪 Testing Checklist

Before going live, test these features:

### Homepage
- [ ] Hero section displays correctly
- [ ] Features section shows all features
- [ ] Pricing cards appear with correct prices
- [ ] Testimonials display
- [ ] Footer links work

### Lead Form
- [ ] Form validation works
- [ ] Required fields are enforced
- [ ] Email notification is sent
- [ ] Success message appears
- [ ] Data is saved to database

### Authentication
- [ ] Signup page loads
- [ ] Login page loads
- [ ] Email/password signup works
- [ ] Email/password login works
- [ ] OAuth buttons appear (if enabled)

### Stripe Integration
- [ ] "Get Started" buttons work
- [ ] Stripe Checkout opens
- [ ] Test payment succeeds (use 4242...)
- [ ] Subscription is created
- [ ] User is redirected to success page

### Database
- [ ] Users are saved on signup
- [ ] Leads are saved on form submission
- [ ] Subscriptions are tracked

---

## 🔧 Development Commands

### Build & Run
```bash
npm run build              # Build for production
npm run dev:sandbox        # Local dev server
pm2 start ecosystem.config.cjs  # Start with PM2
pm2 logs webapp --nostream # View logs
pm2 restart webapp         # Restart server
pm2 delete webapp          # Stop server
```

### Database
```bash
npm run db:migrate:local   # Apply migrations locally
npm run db:migrate:prod    # Apply migrations to production
npm run db:console:local -- --command="SELECT * FROM users"
npm run db:console:prod -- --command="SELECT * FROM leads"
```

### Deployment
```bash
npm run deploy:prod        # Deploy to Cloudflare Pages
wrangler pages deployment list  # List deployments
wrangler pages deployment tail  # View logs
```

### Secrets Management
```bash
wrangler secret put KEY_NAME        # Add secret
wrangler secret list                # List secrets
wrangler secret delete KEY_NAME     # Delete secret
```

---

## 🆘 Troubleshooting

### Build Fails
```bash
# Clean and rebuild
rm -rf dist .wrangler node_modules
npm install
npm run build
```

### Port 3000 in Use
```bash
npm run clean-port
# or
fuser -k 3000/tcp
```

### Database Errors
```bash
# Reset local database
rm -rf .wrangler/state/v3/d1
npm run db:migrate:local
```

### Stripe Not Working
1. Check STRIPE_SECRET_KEY is set in .dev.vars
2. Verify publishableKey in config.ts is correct
3. Confirm stripePriceId matches Stripe Dashboard
4. Restart server after changes

### Email Not Sending
1. Check RESEND_API_KEY is set in .dev.vars
2. Verify fromEmail uses verified domain (or onboarding@resend.dev)
3. Check notificationEmail is correct
4. Look at server logs for errors

---

## 📚 Additional Resources

- **Configuration Guide**: `CONFIGURATION_GUIDE.md` - Detailed config reference
- **Main README**: `README.md` - Full documentation
- **Hono Docs**: https://hono.dev
- **Cloudflare Pages**: https://developers.cloudflare.com/pages
- **Stripe Docs**: https://stripe.com/docs
- **Resend Docs**: https://resend.com/docs

---

## ✅ Pre-Launch Checklist

Before launching to production:

### Content
- [ ] All placeholders replaced in config.ts
- [ ] Logo and favicon added
- [ ] Real company information
- [ ] Actual pricing and features
- [ ] Real testimonials (with permission)
- [ ] Legal pages (privacy, terms)

### Integrations
- [ ] Production Stripe account
- [ ] Real Stripe products created
- [ ] Resend domain verified
- [ ] Email templates customized
- [ ] OAuth apps configured (if using)

### Testing
- [ ] All forms tested
- [ ] Payment flow tested
- [ ] Email notifications received
- [ ] Mobile responsive
- [ ] Cross-browser tested

### Security
- [ ] All secrets in environment variables
- [ ] No API keys in code
- [ ] HTTPS enabled (automatic with Cloudflare)
- [ ] CORS configured correctly

### SEO & Analytics
- [ ] SEO metadata complete
- [ ] OG image added
- [ ] Google Analytics (optional)
- [ ] Sitemap generated

---

Good luck with your SaaS launch! 🚀
