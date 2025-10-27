# Quick Reference Card

## 📂 Key Files

| File | Purpose |
|------|---------|
| `config.ts` | **Main configuration - Edit this to customize EVERYTHING** |
| `CONFIGURATION_GUIDE.md` | Complete guide to all config options |
| `THEME_EXAMPLES.md` | **🎨 NEW: Ready-to-use theme presets** |
| `PAGES_GUIDE.md` | **📄 NEW: How to create custom pages** |
| `SETUP.md` | Step-by-step setup instructions |
| `README.md` | Full technical documentation |
| `PROJECT_SUMMARY.md` | Project overview and status |
| `.dev.vars` | Environment variables (create from .dev.vars.example) |
| `wrangler.jsonc` | Cloudflare Pages configuration |

## 🚀 Common Commands

### Development
```bash
npm run build                    # Build project
pm2 start ecosystem.config.cjs   # Start server
pm2 logs webapp --nostream       # View logs
pm2 restart webapp               # Restart server
pm2 delete webapp                # Stop server
npm run validate                 # Check config
npm test                         # Test server
```

### Database
```bash
npm run db:create                # Create D1 database
npm run db:migrate:local         # Apply migrations (local)
npm run db:migrate:prod          # Apply migrations (production)
npm run db:console:local -- --command="SELECT * FROM users"
```

### Deployment
```bash
npm run deploy:prod              # Deploy to Cloudflare
wrangler secret put KEY_NAME     # Add production secret
wrangler pages deployment list   # List deployments
```

## 🔑 Environment Variables

Create `.dev.vars` file with:

```env
STRIPE_SECRET_KEY=sk_test_xxxxx          # Required for payments
RESEND_API_KEY=re_xxxxx                  # Required for emails
JWT_SECRET=your-random-secret            # Required for auth
GOOGLE_CLIENT_SECRET=xxxxx               # Optional for OAuth
GITHUB_CLIENT_SECRET=xxxxx               # Optional for OAuth
```

## 📝 Configuration Placeholders

All placeholders in `config.ts` follow this pattern: `{{PLACEHOLDER_NAME}}`

### Must Configure
- `{{COMPANY_NAME}}`
- `{{CONTACT_EMAIL}}`
- `{{HERO_HEADLINE}}`
- `{{HERO_SUBHEADLINE}}`
- `{{SEO_TITLE}}`
- `{{SEO_DESCRIPTION}}`

### Recommended
- Features (6 total)
- Pricing plans (3 total)
- Testimonials (3 total)
- Social media links
- Lead form fields

### 🎨 NEW: Theme Customization
- **Colors**: Primary, secondary, backgrounds
- **Fonts**: Body and heading fonts (Google Fonts)
- **Layout**: Max width, nav position
- **Buttons**: Complete button styles
- **Cards**: Card styling and shadows

**Quick Start**: Copy a preset from `THEME_EXAMPLES.md`!

### 📄 NEW: Custom Pages
- Define pages in `pages` array
- Set `inMenu: true` to add to navigation
- Support for text, team, contact, blog sections
- Automatic routing and styling

**Quick Start**: See examples in `PAGES_GUIDE.md`!

## 🔌 Integrations Setup

### Stripe
1. Create account: https://stripe.com
2. Create products in dashboard
3. Copy Price IDs to `config.ts`
4. Add keys to `.dev.vars`

### Resend
1. Create account: https://resend.com
2. Verify domain (or use onboarding@resend.dev)
3. Get API key
4. Add to `.dev.vars`

### Google OAuth
1. Console: https://console.cloud.google.com/apis/credentials
2. Create OAuth Client ID
3. Add redirect URI: `https://yourdomain.com/api/auth/google/callback`
4. Add Client ID to `config.ts`, Secret to `.dev.vars`

### GitHub OAuth
1. Settings: https://github.com/settings/developers
2. Create OAuth App
3. Set callback: `https://yourdomain.com/api/auth/github/callback`
4. Add Client ID to `config.ts`, Secret to `.dev.vars`

## 🎯 Project URLs

### Local Development
- **Homepage**: http://localhost:3000
- **Login**: http://localhost:3000/login
- **Signup**: http://localhost:3000/signup
- **API Config**: http://localhost:3000/api/config

### Current Public URL
https://3000-itbup1iiwmpcejs833zr0-2b54fc91.sandbox.novita.ai

## 📊 API Endpoints

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/config` | GET | Get public configuration |
| `/api/auth/signup` | POST | Create new account |
| `/api/auth/login` | POST | User login |
| `/api/auth/google` | POST | Google OAuth |
| `/api/auth/github` | POST | GitHub OAuth |
| `/api/stripe/create-checkout-session` | POST | Start payment |
| `/api/stripe/webhook` | POST | Stripe webhooks |
| `/api/leads` | POST | Submit contact form |

## 📋 Pre-Deployment Checklist

- [ ] All placeholders replaced in `config.ts`
- [ ] Company logo in `public/static/logo.png`
- [ ] Favicon in `public/static/favicon.ico`
- [ ] Stripe products created
- [ ] Stripe Price IDs in config
- [ ] Resend domain verified
- [ ] All `.dev.vars` keys set
- [ ] Database created (`npm run db:create`)
- [ ] Database ID in `wrangler.jsonc`
- [ ] Migrations applied (`npm run db:migrate:local`)
- [ ] Configuration validated (`npm run validate`)
- [ ] Local testing complete
- [ ] Privacy policy page
- [ ] Terms of service page

## 🆘 Quick Troubleshooting

| Issue | Solution |
|-------|----------|
| Port in use | `npm run clean-port` |
| Build fails | `rm -rf dist .wrangler && npm run build` |
| DB errors | `rm -rf .wrangler/state/v3/d1 && npm run db:migrate:local` |
| Stripe not working | Check keys in `.dev.vars`, verify Price IDs |
| Email not sending | Check Resend key, verify sender email |
| Config errors | Run `npm run validate` |
| Server won't start | Check logs: `pm2 logs webapp --nostream` |

## 💡 Best Practices

1. **Always validate** before deploying: `npm run validate`
2. **Test locally first** before production deployment
3. **Use test mode** for Stripe during development
4. **Keep secrets safe** - never commit `.dev.vars`
5. **Commit frequently** - track your changes
6. **Read the docs** - check CONFIGURATION_GUIDE.md for details

## 📖 Documentation Priority

1. **First Time**: Read `SETUP.md`
2. **Configuring**: Read `CONFIGURATION_GUIDE.md`
3. **Reference**: Use this `QUICK_REFERENCE.md`
4. **Technical**: Check `README.md`
5. **Overview**: See `PROJECT_SUMMARY.md`

## 🎨 Customization Quick Tips

### Change Theme Colors
```typescript
// config.ts → theme.colors
colors: {
  primary: "#f97316",      // Your brand color
  primaryDark: "#ea580c",  // Darker shade
  // ... copy from THEME_EXAMPLES.md
}
```

### Change Fonts
```typescript
// config.ts → theme.fonts
fonts: {
  primary: "'Poppins', sans-serif",
  heading: "'Montserrat', sans-serif",
}
```

### Add a Custom Page
```typescript
// config.ts → pages array
{
  path: "/about",
  title: "About Us",
  inMenu: true,
  content: {
    hero: { title: "About", subtitle: "Our Story" },
    sections: [
      { type: "text", title: "Who We Are", content: "..." }
    ]
  }
}
```

### Add a Feature
```typescript
// config.ts → features array
{
  icon: "fas fa-icon-name",
  title: "Feature Name",
  description: "Feature description"
}
```

### Add a Pricing Plan
```typescript
// config.ts → pricing.plans array
{
  name: "Plan Name",
  price: "$99",
  period: "month",
  stripePriceId: "price_xxxxx",
  features: ["Feature 1", "Feature 2"],
  highlighted: false
}
```

### Add a Lead Form Field
```typescript
// config.ts → leadForm.fields array
{
  name: "field_name",
  label: "Display Label",
  type: "text",
  required: true,
  placeholder: "Placeholder text"
}
```

## 🔗 Useful Links

- **Hono Docs**: https://hono.dev
- **Cloudflare Pages**: https://developers.cloudflare.com/pages
- **Stripe Docs**: https://stripe.com/docs
- **Resend Docs**: https://resend.com/docs
- **Tailwind CSS**: https://tailwindcss.com
- **FontAwesome Icons**: https://fontawesome.com/icons

---

**💡 Pro Tip**: Keep this file open while working on your project!
