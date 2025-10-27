# Custom Pages Guide

Learn how to create unlimited custom pages without writing any code!

## 📄 Overview

The template includes a dynamic page system where you can define pages entirely in `config.ts`. Each page is automatically:
- Routed (e.g., `/about` loads your About page)
- Styled with your theme
- Given navigation and footer
- Made responsive
- SEO optimized

## 🎯 Page Structure

Every page needs these properties:

```typescript
{
  path: "/your-path",          // URL (e.g., "/about", "/pricing")
  title: "Page Title",          // Browser tab title
  inMenu: true,                 // Show in navigation bar?
  content: {                    // Page content definition
    hero: {
      title: "Hero Title",
      subtitle: "Hero Subtitle"
    },
    sections: [/* ... */]       // Content sections
  }
}
```

## 📑 Section Types

### 1. Text Section
Display formatted text content

```typescript
{
  type: "text",
  title: "Section Title",
  content: "Your content here. Can include multiple paragraphs separated by \n newlines."
}
```

**Best For:**
- About us content
- Company history
- Mission statements
- Product descriptions
- Legal text (privacy, terms)

**Example:**
```typescript
{
  type: "text",
  title: "Our Mission",
  content: "We help businesses succeed with powerful tools.\nFounded in 2024, we've served over 1000 customers."
}
```

### 2. Team Section
Display team member profiles

```typescript
{
  type: "team",
  title: "Meet Our Team",
  members: [
    {
      name: "John Doe",
      role: "CEO & Founder",
      bio: "10 years leading tech companies",
      image: "/static/team/john.jpg",
      social: {
        linkedin: "https://linkedin.com/in/johndoe",
        twitter: "https://twitter.com/johndoe"
      }
    },
    // Add more members...
  ]
}
```

**Best For:**
- Team/About pages
- Leadership pages
- Advisory boards
- Staff directories

**Tips:**
- Add team photos to `public/static/team/`
- If no image exists, shows auto-generated avatar
- Social links are optional
- LinkedIn/Twitter supported

### 3. Blog List (Coming Soon)
Placeholder for blog functionality

```typescript
{
  type: "blog_list"
  // No configuration needed
}
```

Shows "Blog Coming Soon" message. You can implement actual blog functionality later.

### 4. Contact Form
Uses your lead form configuration

```typescript
{
  type: "contact_form"
  // Uses leadForm config from main config
}
```

Automatically creates a contact page with your lead generation form.

## 📝 Complete Page Examples

### About Us Page

```typescript
{
  path: "/about",
  title: "About Us",
  inMenu: true,
  content: {
    hero: {
      title: "About CloudFlow",
      subtitle: "Building the future of workflow automation"
    },
    sections: [
      {
        type: "text",
        title: "Our Story",
        content: "CloudFlow was founded in 2024 with a simple mission: make business workflows effortless.\n\nWe started in a garage with just 3 people and a dream. Today, we serve over 10,000 companies worldwide."
      },
      {
        type: "text",
        title: "What We Believe",
        content: "We believe that technology should empower people, not complicate their lives. That's why we focus on simplicity and effectiveness in everything we build."
      },
      {
        type: "team",
        title: "Meet Our Team",
        members: [
          {
            name: "Sarah Johnson",
            role: "CEO & Co-Founder",
            bio: "Former VP at TechCorp, 15 years in SaaS",
            image: "/static/team/sarah.jpg",
            social: {
              linkedin: "https://linkedin.com/in/sarahjohnson",
              twitter: "https://twitter.com/sarahj"
            }
          },
          {
            name: "Mike Chen",
            role: "CTO & Co-Founder",
            bio: "Built scaling systems at Google and Amazon",
            image: "/static/team/mike.jpg",
            social: {
              linkedin: "https://linkedin.com/in/mikechen",
              twitter: "https://twitter.com/mikec"
            }
          },
          {
            name: "Lisa Brown",
            role: "Head of Design",
            bio: "Award-winning designer, ex-Apple",
            image: "/static/team/lisa.jpg",
            social: {
              linkedin: "https://linkedin.com/in/lisabrown"
            }
          }
        ]
      }
    ]
  }
}
```

### Privacy Policy Page

```typescript
{
  path: "/privacy",
  title: "Privacy Policy",
  inMenu: false,  // Don't show in main navigation
  content: {
    hero: {
      title: "Privacy Policy",
      subtitle: "Last updated: January 15, 2024"
    },
    sections: [
      {
        type: "text",
        title: "Information We Collect",
        content: "We collect information you provide directly to us, including:\n- Name and email address\n- Payment information\n- Usage data and analytics\n\nWe use this information to provide and improve our services."
      },
      {
        type: "text",
        title: "How We Use Your Information",
        content: "Your information is used to:\n- Provide our services to you\n- Process payments\n- Send important updates\n- Improve our product\n\nWe never sell your personal information to third parties."
      },
      {
        type: "text",
        title: "Data Security",
        content: "We take security seriously and use industry-standard encryption to protect your data. All data is encrypted in transit and at rest.\n\nWe regularly audit our security practices and comply with SOC 2 standards."
      },
      {
        type: "text",
        title: "Your Rights",
        content: "You have the right to:\n- Access your data\n- Request data deletion\n- Export your data\n- Opt out of marketing\n\nContact us at privacy@yourcompany.com to exercise these rights."
      },
      {
        type: "text",
        title: "Contact Us",
        content: "Questions about this policy? Email us at privacy@yourcompany.com or write to:\n\nYour Company\n123 Main Street\nSan Francisco, CA 94105"
      }
    ]
  }
}
```

### Terms of Service Page

```typescript
{
  path: "/terms",
  title: "Terms of Service",
  inMenu: false,
  content: {
    hero: {
      title: "Terms of Service",
      subtitle: "Last updated: January 15, 2024"
    },
    sections: [
      {
        type: "text",
        title: "Acceptance of Terms",
        content: "By accessing and using this service, you accept and agree to be bound by these Terms of Service.\n\nIf you do not agree to these terms, please do not use our service."
      },
      {
        type: "text",
        title: "Use License",
        content: "We grant you a limited, non-exclusive, non-transferable license to use our service for your business purposes.\n\nYou may not:\n- Resell or redistribute our service\n- Reverse engineer our software\n- Use our service for illegal purposes"
      },
      {
        type: "text",
        title: "User Responsibilities",
        content: "You are responsible for:\n- Maintaining account security\n- All activity under your account\n- Compliance with applicable laws\n- Content you upload to our service"
      },
      {
        type: "text",
        title: "Payment Terms",
        content: "Subscriptions are billed monthly or annually. You authorize us to charge your payment method.\n\nRefunds are provided according to our refund policy. Cancel anytime from your account settings."
      }
    ]
  }
}
```

### Careers Page

```typescript
{
  path: "/careers",
  title: "Careers",
  inMenu: true,
  content: {
    hero: {
      title: "Join Our Team",
      subtitle: "Help us build the future of work"
    },
    sections: [
      {
        type: "text",
        title: "Why Work at CloudFlow?",
        content: "We're a fast-growing startup with a mission to transform how businesses operate.\n\nBenefits include:\n- Competitive salary and equity\n- Health, dental, and vision insurance\n- Unlimited PTO\n- Remote-first culture\n- Learning and development budget"
      },
      {
        type: "text",
        title: "Open Positions",
        content: "We're currently hiring for:\n\n**Engineering**\n- Senior Full-Stack Engineer\n- DevOps Engineer\n- Frontend Developer\n\n**Product**\n- Product Manager\n- Product Designer\n\n**Business**\n- Sales Development Rep\n- Customer Success Manager\n\nSend your resume to careers@yourcompany.com"
      },
      {
        type: "text",
        title: "Our Values",
        content: "**Customer First** - We obsess over customer success\n\n**Move Fast** - We ship quickly and iterate\n\n**Own It** - Take responsibility and drive results\n\n**Grow Together** - We invest in each other's growth"
      }
    ]
  }
}
```

### Contact Page

```typescript
{
  path: "/contact",
  title: "Contact Us",
  inMenu: true,
  content: {
    hero: {
      title: "Get in Touch",
      subtitle: "We'd love to hear from you"
    },
    type: "contact_form"  // Uses your leadForm configuration
  }
}
```

### Blog Page (Placeholder)

```typescript
{
  path: "/blog",
  title: "Blog",
  inMenu: true,
  content: {
    hero: {
      title: "Our Blog",
      subtitle: "Latest updates, insights, and tutorials"
    },
    type: "blog_list"
  }
}
```

## 🎨 Adding Your Pages

1. Open `config.ts`
2. Find the `pages` array
3. Add your page configuration
4. Build and restart:
   ```bash
   npm run build
   pm2 restart webapp
   ```

Your page is now live!

## 🔗 Linking to Pages

Pages are automatically added to:
- **Navigation menu** (if `inMenu: true`)
- **Footer** (manually add to footer config)
- **Direct URL access** (via `path`)

### Add to Footer

```typescript
// config.ts
footer: {
  columns: [
    {
      title: "Company",
      links: [
        { text: "About", url: "/about" },
        { text: "Careers", url: "/careers" },
        { text: "Contact", url: "/contact" },
      ]
    }
  ]
}
```

## 📁 File Organization

Place page-specific assets in:
```
public/static/
  team/           # Team member photos
    sarah.jpg
    mike.jpg
    lisa.jpg
  pages/          # Page-specific images
    about-hero.jpg
    office.jpg
```

## ✨ Pro Tips

1. **Keep content concise** - Web users scan, don't read everything
2. **Use clear headings** - Help users find information quickly
3. **Add social proof** - Include credentials in bios
4. **Update dates** - Keep legal pages current
5. **Test mobile** - Ensure pages work on all devices
6. **SEO-friendly** - Use descriptive titles and content

## 🚀 Advanced: Custom Section Types

Want to add new section types? Edit `src/pages.ts` and add your render logic:

```typescript
function renderPageContent(page: any): string {
  // ...existing code...
  
  switch (section.type) {
    case 'your_custom_type':
      return `<div>Your custom HTML</div>`
    
    // ... other cases
  }
}
```

## 📊 Page Examples by Use Case

### SaaS Company
- Home (built-in)
- About
- Pricing (built-in #pricing section)
- Blog
- Contact
- Privacy
- Terms

### E-Commerce
- Home
- About
- Shipping & Returns
- Contact
- Privacy
- Terms

### Agency
- Home
- Services
- Portfolio/Case Studies
- About/Team
- Contact
- Blog

### Startup
- Home
- Product
- Pricing
- About
- Careers
- Blog
- Contact

## 🆘 Troubleshooting

**Page not showing?**
- Check `path` starts with `/`
- Rebuild: `npm run build`
- Restart: `pm2 restart webapp`

**Navigation link missing?**
- Set `inMenu: true`
- Rebuild and restart

**Images not loading?**
- Check file path is correct
- Files must be in `public/static/`
- Check file name matches exactly (case-sensitive)

**Content not updating?**
- Clear browser cache
- Rebuild project
- Check for syntax errors in config.ts

---

That's it! You now have a powerful page management system without writing any code. Just edit the config and you're done! 🎉
