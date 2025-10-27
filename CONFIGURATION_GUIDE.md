# Configuration Guide

This guide explains how to customize your SaaS website using the `config.ts` file.

## 📝 Overview

The entire website is driven by a single configuration file: `config.ts`. Every piece of content, from company name to pricing plans, is defined as a placeholder that you can easily replace.

## 🎯 Quick Start

1. Open `config.ts`
2. Search for `{{PLACEHOLDER_NAME}}`
3. Replace with your actual content
4. Save and rebuild

## 📋 Configuration Sections

### 1. Company Information

```typescript
company: {
  name: "{{COMPANY_NAME}}",              // e.g., "CloudFlow"
  tagline: "{{COMPANY_TAGLINE}}",        // e.g., "Streamline Your Workflow"
  description: "{{COMPANY_DESCRIPTION}}", // Full description
  logo: "/static/logo.png",               // Place logo in public/static/
  favicon: "/static/favicon.ico",         // Place favicon in public/static/
  email: "{{CONTACT_EMAIL}}",            // e.g., "hello@cloudflow.io"
  phone: "{{CONTACT_PHONE}}",            // e.g., "+1 (555) 123-4567"
  address: "{{COMPANY_ADDRESS}}",        // Physical address
}
```

**Assets to Prepare:**
- Logo image (PNG/SVG recommended)
- Favicon (ICO or PNG)

---

### 2. Hero Section (Top of Homepage)

```typescript
hero: {
  headline: "{{HERO_HEADLINE}}",
  // Main headline - keep it punchy and benefit-focused
  // Examples:
  // - "Build Better Products, Faster"
  // - "Scale Your Business with Confidence"
  // - "The All-in-One Solution for Teams"
  
  subheadline: "{{HERO_SUBHEADLINE}}",
  // Supporting text - explain the value proposition
  // Examples:
  // - "CloudFlow helps teams ship features 10x faster"
  // - "Join 10,000+ companies automating their workflow"
  
  ctaButton: {
    text: "{{HERO_CTA_TEXT}}",          // e.g., "Start Free Trial"
    link: "/signup",                     // Where button leads
  },
  secondaryButton: {
    text: "{{HERO_SECONDARY_CTA}}",     // e.g., "Watch Demo"
    link: "/demo",
  },
  backgroundImage: "/static/hero-bg.jpg", // Optional hero background
}
```

---

### 3. Features Section

Add/remove/modify features by editing the array:

```typescript
features: [
  {
    icon: "fas fa-rocket",              // FontAwesome icon class
    title: "{{FEATURE_1_TITLE}}",       // e.g., "Lightning Fast"
    description: "{{FEATURE_1_DESCRIPTION}}", // 1-2 sentences
  },
  // Add more features...
]
```

**Popular FontAwesome Icons:**
- `fas fa-rocket` - Speed/Launch
- `fas fa-shield-alt` - Security
- `fas fa-chart-line` - Analytics/Growth
- `fas fa-users` - Team/Collaboration
- `fas fa-cog` - Settings/Automation
- `fas fa-headset` - Support
- `fas fa-lock` - Privacy
- `fas fa-bolt` - Power
- `fas fa-cloud` - Cloud/SaaS
- `fas fa-mobile-alt` - Mobile

Find more at: https://fontawesome.com/icons

---

### 4. Pricing Plans

```typescript
pricing: {
  title: "{{PRICING_SECTION_TITLE}}",     // e.g., "Simple, Transparent Pricing"
  subtitle: "{{PRICING_SECTION_SUBTITLE}}", // e.g., "Choose the plan that fits"
  
  plans: [
    {
      name: "{{PLAN_1_NAME}}",            // e.g., "Starter"
      price: "{{PLAN_1_PRICE}}",          // e.g., "$29" or "Free"
      period: "{{PLAN_1_PERIOD}}",        // e.g., "month", "year", "forever"
      description: "{{PLAN_1_DESCRIPTION}}", // Short plan description
      
      features: [
        "{{PLAN_1_FEATURE_1}}",           // e.g., "Up to 10 projects"
        "{{PLAN_1_FEATURE_2}}",           // e.g., "5GB storage"
        // Add more features...
      ],
      
      stripePriceId: "{{STRIPE_PRICE_ID_PLAN_1}}", // From Stripe Dashboard
      highlighted: false,                  // Set true for "Most Popular"
    },
    // Add more plans...
  ]
}
```

**Stripe Setup:**
1. Create products in Stripe Dashboard
2. Copy the Price ID (starts with `price_`)
3. Paste into `stripePriceId` field

---

### 5. Testimonials

```typescript
testimonials: [
  {
    name: "{{TESTIMONIAL_1_NAME}}",       // Customer name
    role: "{{TESTIMONIAL_1_ROLE}}",       // e.g., "CEO", "Product Manager"
    company: "{{TESTIMONIAL_1_COMPANY}}", // Company name
    content: "{{TESTIMONIAL_1_CONTENT}}", // The testimonial quote
    avatar: "/static/avatar1.jpg",        // Optional avatar image
    rating: 5,                             // 1-5 stars
  },
  // Add more testimonials...
]
```

**Tips:**
- Keep testimonials specific and results-focused
- Include metrics when possible ("increased productivity by 50%")
- Use real customer photos if available
- Falls back to generated avatars if image not found

---

### 6. Social Media Links

```typescript
social: {
  twitter: "{{TWITTER_URL}}",      // e.g., "https://twitter.com/yourcompany"
  facebook: "{{FACEBOOK_URL}}",
  linkedin: "{{LINKEDIN_URL}}",
  instagram: "{{INSTAGRAM_URL}}",
  github: "{{GITHUB_URL}}",
}
```

Leave as empty string `""` to hide icons.

---

### 7. Call-to-Action Section

```typescript
cta: {
  title: "{{CTA_TITLE}}",          // e.g., "Ready to Get Started?"
  subtitle: "{{CTA_SUBTITLE}}",    // e.g., "Join thousands of happy customers"
  buttonText: "{{CTA_BUTTON_TEXT}}", // e.g., "Start Your Free Trial"
  buttonLink: "/signup",
}
```

---

### 8. Footer

```typescript
footer: {
  columns: [
    {
      title: "Product",              // Column heading
      links: [
        { text: "Features", url: "#features" },
        { text: "Pricing", url: "#pricing" },
        // Add/remove links...
      ],
    },
    // Add more columns...
  ],
  copyright: "{{COPYRIGHT_TEXT}}", // e.g., "© 2024 CloudFlow. All rights reserved."
}
```

---

### 9. Lead Generation Form

Customize the contact form fields:

```typescript
leadForm: {
  title: "{{LEAD_FORM_TITLE}}",
  subtitle: "{{LEAD_FORM_SUBTITLE}}",
  
  fields: [
    {
      name: "name",                  // Field name (used in API)
      label: "Full Name",            // Display label
      type: "text",                  // Input type
      required: true,                // Make field mandatory
      placeholder: "John Doe",       // Placeholder text
    },
    {
      name: "company_size",
      label: "Company Size",
      type: "select",                // Dropdown
      required: true,
      options: [
        { value: "1-10", label: "1-10 employees" },
        { value: "11-50", label: "11-50 employees" },
        // Add more options...
      ],
    },
    // Add more fields...
  ],
  
  submitButton: "{{LEAD_FORM_SUBMIT_TEXT}}",
  successMessage: "{{LEAD_FORM_SUCCESS_MESSAGE}}",
}
```

**Field Types:**
- `text` - Single line text input
- `email` - Email input with validation
- `tel` - Phone number input
- `textarea` - Multi-line text
- `select` - Dropdown menu

---

### 10. Authentication Providers

Enable/disable login methods:

```typescript
auth: {
  providers: {
    google: {
      enabled: true,                    // Show Google login button
      clientId: "{{GOOGLE_CLIENT_ID}}", // From Google Cloud Console
    },
    github: {
      enabled: true,                    // Show GitHub login button
      clientId: "{{GITHUB_CLIENT_ID}}", // From GitHub Developer Settings
    },
    email: {
      enabled: true,                    // Show email/password login
    },
  },
  redirectUrls: {
    success: "/dashboard",              // Where to go after login
    error: "/login?error=auth_failed",
  },
}
```

---

### 11. SEO & Metadata

Optimize for search engines:

```typescript
seo: {
  title: "{{SEO_TITLE}}",
  // Page title (appears in browser tab and search results)
  // Keep under 60 characters
  // Example: "CloudFlow - Workflow Automation for Modern Teams"
  
  description: "{{SEO_DESCRIPTION}}",
  // Meta description (appears in search results)
  // Keep under 160 characters
  // Example: "CloudFlow helps teams automate workflows and ship faster..."
  
  keywords: "{{SEO_KEYWORDS}}",
  // Comma-separated keywords
  // Example: "workflow automation, project management, team collaboration"
  
  ogImage: "/static/og-image.jpg",
  // Social media preview image (1200x630px recommended)
}
```

---

### 12. Integrations

Configure third-party services:

```typescript
integrations: {
  stripe: {
    publishableKey: "{{STRIPE_PUBLISHABLE_KEY}}",
    // Starts with pk_test_ (test) or pk_live_ (production)
    // Get from: https://dashboard.stripe.com/apikeys
  },
  
  email: {
    provider: "resend",                  // Email service provider
    fromEmail: "{{FROM_EMAIL}}",         // Sender email address
    notificationEmail: "{{NOTIFICATION_EMAIL}}", // Where to send leads
  },
  
  googleAnalytics: {
    enabled: false,                      // Enable Google Analytics
    measurementId: "{{GA_MEASUREMENT_ID}}", // GA4 Measurement ID
  },
}
```

---

## 🎨 Assets Checklist

Place these files in `public/static/`:

- [ ] `logo.png` - Company logo (transparent PNG recommended)
- [ ] `favicon.ico` - Browser favicon (16x16 or 32x32)
- [ ] `og-image.jpg` - Social media preview (1200x630px)
- [ ] `hero-bg.jpg` - Hero background image (optional)
- [ ] `avatar1.jpg`, `avatar2.jpg`, etc. - Testimonial photos (optional)

---

## 🔑 Environment Variables

After configuring `config.ts`, set up your API keys:

### Required Variables

Create `.dev.vars` file:
```env
STRIPE_SECRET_KEY=sk_test_xxxxx
RESEND_API_KEY=re_xxxxx
JWT_SECRET=your-random-secret
```

### Optional Variables

For OAuth:
```env
GOOGLE_CLIENT_SECRET=xxxxx
GITHUB_CLIENT_SECRET=xxxxx
```

---

## ✅ Configuration Checklist

### Minimum Required
- [ ] Company name, email, phone
- [ ] Hero headline and subheadline
- [ ] At least 3 features
- [ ] At least 1 pricing plan with Stripe Price ID
- [ ] Lead form title and fields
- [ ] SEO title and description
- [ ] Stripe publishable key
- [ ] Email notification address

### Recommended
- [ ] Company logo and favicon
- [ ] All pricing plans (3 recommended)
- [ ] 6 features
- [ ] 3 testimonials
- [ ] Social media links
- [ ] Copyright text
- [ ] Footer columns

### Optional
- [ ] Hero background image
- [ ] Testimonial avatars
- [ ] OG image for social sharing
- [ ] Google Analytics
- [ ] OAuth providers

---

## 🧪 Testing Your Configuration

After configuring:

```bash
# 1. Build the project
npm run build

# 2. Start the server
pm2 start ecosystem.config.cjs

# 3. Open in browser
http://localhost:3000

# 4. Check all sections:
# - Hero displays correct headline
# - Features show properly
# - Pricing plans appear
# - Testimonials render
# - Lead form works
# - Footer links are correct
```

---

## 📖 Example: Complete Configuration

See the `exampleConfig` export in `config.ts` for a fully populated example showing realistic values for a fictional company called "CloudFlow".

---

## 🆘 Common Issues

### Placeholder Still Shows
**Problem:** `{{COMPANY_NAME}}` appears on the website  
**Solution:** Make sure you replaced the placeholder in `config.ts` and rebuilt the project

### Image Not Loading
**Problem:** Logo or avatar doesn't appear  
**Solution:** 
1. Check file exists in `public/static/`
2. Check filename matches exactly (case-sensitive)
3. Rebuild project after adding files

### Stripe Button Not Working
**Problem:** "Get Started" button doesn't work  
**Solution:**
1. Set `STRIPE_SECRET_KEY` in `.dev.vars`
2. Set `publishableKey` in `config.ts`
3. Verify `stripePriceId` matches Stripe Dashboard
4. Restart server after changes

### Form Not Submitting
**Problem:** Lead form shows error  
**Solution:**
1. Set `RESEND_API_KEY` in `.dev.vars`
2. Set `fromEmail` and `notificationEmail` in `config.ts`
3. Check browser console for errors

---

## 💡 Tips

1. **Start Simple**: Configure minimum required fields first, then add extras
2. **Use Examples**: Copy values from `exampleConfig` as a starting point
3. **Test Frequently**: Rebuild and test after each major section
4. **Keep Backups**: Save a copy of your configured `config.ts`
5. **Brand Consistency**: Use same colors/style across all assets

---

## 🚀 Next Steps

After configuration:
1. Review the website in browser
2. Test all forms and buttons
3. Deploy to Cloudflare Pages
4. Set up production secrets
5. Configure custom domain

See `README.md` for deployment instructions.
