/**
 * SaaS Website Configuration File
 * 
 * This is the single source of truth for all website content and settings.
 * Modify this file to customize your SaaS website without touching the code.
 */

export const siteConfig = {
  // ==================== COMPANY INFORMATION ====================
  company: {
    name: "{{COMPANY_NAME}}",
    tagline: "{{COMPANY_TAGLINE}}",
    description: "{{COMPANY_DESCRIPTION}}",
    logo: "/static/logo.png", // Place your logo in public/static/
    favicon: "/static/favicon.ico",
    email: "{{CONTACT_EMAIL}}",
    phone: "{{CONTACT_PHONE}}",
    address: "{{COMPANY_ADDRESS}}",
  },

  // ==================== HERO SECTION ====================
  hero: {
    headline: "{{HERO_HEADLINE}}",
    subheadline: "{{HERO_SUBHEADLINE}}",
    ctaButton: {
      text: "{{HERO_CTA_TEXT}}",
      link: "/signup",
    },
    secondaryButton: {
      text: "{{HERO_SECONDARY_CTA}}",
      link: "/demo",
    },
    backgroundImage: "/static/hero-bg.jpg", // Optional
  },

  // ==================== FEATURES ====================
  features: [
    {
      icon: "fas fa-rocket",
      title: "{{FEATURE_1_TITLE}}",
      description: "{{FEATURE_1_DESCRIPTION}}",
    },
    {
      icon: "fas fa-shield-alt",
      title: "{{FEATURE_2_TITLE}}",
      description: "{{FEATURE_2_DESCRIPTION}}",
    },
    {
      icon: "fas fa-chart-line",
      title: "{{FEATURE_3_TITLE}}",
      description: "{{FEATURE_3_DESCRIPTION}}",
    },
    {
      icon: "fas fa-users",
      title: "{{FEATURE_4_TITLE}}",
      description: "{{FEATURE_4_DESCRIPTION}}",
    },
    {
      icon: "fas fa-cog",
      title: "{{FEATURE_5_TITLE}}",
      description: "{{FEATURE_5_DESCRIPTION}}",
    },
    {
      icon: "fas fa-headset",
      title: "{{FEATURE_6_TITLE}}",
      description: "{{FEATURE_6_DESCRIPTION}}",
    },
  ],

  // ==================== PRICING PLANS ====================
  pricing: {
    title: "{{PRICING_SECTION_TITLE}}",
    subtitle: "{{PRICING_SECTION_SUBTITLE}}",
    plans: [
      {
        name: "{{PLAN_1_NAME}}",
        price: "{{PLAN_1_PRICE}}",
        period: "{{PLAN_1_PERIOD}}",
        description: "{{PLAN_1_DESCRIPTION}}",
        features: [
          "{{PLAN_1_FEATURE_1}}",
          "{{PLAN_1_FEATURE_2}}",
          "{{PLAN_1_FEATURE_3}}",
          "{{PLAN_1_FEATURE_4}}",
        ],
        stripePriceId: "{{STRIPE_PRICE_ID_PLAN_1}}", // From Stripe Dashboard
        highlighted: false,
      },
      {
        name: "{{PLAN_2_NAME}}",
        price: "{{PLAN_2_PRICE}}",
        period: "{{PLAN_2_PERIOD}}",
        description: "{{PLAN_2_DESCRIPTION}}",
        features: [
          "{{PLAN_2_FEATURE_1}}",
          "{{PLAN_2_FEATURE_2}}",
          "{{PLAN_2_FEATURE_3}}",
          "{{PLAN_2_FEATURE_4}}",
          "{{PLAN_2_FEATURE_5}}",
        ],
        stripePriceId: "{{STRIPE_PRICE_ID_PLAN_2}}",
        highlighted: true, // This plan will be visually emphasized
      },
      {
        name: "{{PLAN_3_NAME}}",
        price: "{{PLAN_3_PRICE}}",
        period: "{{PLAN_3_PERIOD}}",
        description: "{{PLAN_3_DESCRIPTION}}",
        features: [
          "{{PLAN_3_FEATURE_1}}",
          "{{PLAN_3_FEATURE_2}}",
          "{{PLAN_3_FEATURE_3}}",
          "{{PLAN_3_FEATURE_4}}",
          "{{PLAN_3_FEATURE_5}}",
          "{{PLAN_3_FEATURE_6}}",
        ],
        stripePriceId: "{{STRIPE_PRICE_ID_PLAN_3}}",
        highlighted: false,
      },
    ],
  },

  // ==================== TESTIMONIALS ====================
  testimonials: [
    {
      name: "{{TESTIMONIAL_1_NAME}}",
      role: "{{TESTIMONIAL_1_ROLE}}",
      company: "{{TESTIMONIAL_1_COMPANY}}",
      content: "{{TESTIMONIAL_1_CONTENT}}",
      avatar: "/static/avatar1.jpg", // Optional
      rating: 5,
    },
    {
      name: "{{TESTIMONIAL_2_NAME}}",
      role: "{{TESTIMONIAL_2_ROLE}}",
      company: "{{TESTIMONIAL_2_COMPANY}}",
      content: "{{TESTIMONIAL_2_CONTENT}}",
      avatar: "/static/avatar2.jpg",
      rating: 5,
    },
    {
      name: "{{TESTIMONIAL_3_NAME}}",
      role: "{{TESTIMONIAL_3_ROLE}}",
      company: "{{TESTIMONIAL_3_COMPANY}}",
      content: "{{TESTIMONIAL_3_CONTENT}}",
      avatar: "/static/avatar3.jpg",
      rating: 5,
    },
  ],

  // ==================== SOCIAL MEDIA ====================
  social: {
    twitter: "{{TWITTER_URL}}",
    facebook: "{{FACEBOOK_URL}}",
    linkedin: "{{LINKEDIN_URL}}",
    instagram: "{{INSTAGRAM_URL}}",
    github: "{{GITHUB_URL}}",
  },

  // ==================== CALL TO ACTION ====================
  cta: {
    title: "{{CTA_TITLE}}",
    subtitle: "{{CTA_SUBTITLE}}",
    buttonText: "{{CTA_BUTTON_TEXT}}",
    buttonLink: "/signup",
  },

  // ==================== FOOTER ====================
  footer: {
    columns: [
      {
        title: "Product",
        links: [
          { text: "Features", url: "#features" },
          { text: "Pricing", url: "#pricing" },
          { text: "FAQ", url: "#faq" },
          { text: "Roadmap", url: "/roadmap" },
        ],
      },
      {
        title: "Company",
        links: [
          { text: "About", url: "/about" },
          { text: "Blog", url: "/blog" },
          { text: "Careers", url: "/careers" },
          { text: "Contact", url: "/contact" },
        ],
      },
      {
        title: "Legal",
        links: [
          { text: "Privacy Policy", url: "/privacy" },
          { text: "Terms of Service", url: "/terms" },
          { text: "Cookie Policy", url: "/cookies" },
        ],
      },
    ],
    copyright: "{{COPYRIGHT_TEXT}}",
  },

  // ==================== AUTHENTICATION ====================
  auth: {
    providers: {
      google: {
        enabled: true,
        clientId: "{{GOOGLE_CLIENT_ID}}",
      },
      github: {
        enabled: true,
        clientId: "{{GITHUB_CLIENT_ID}}",
      },
      email: {
        enabled: true,
      },
    },
    redirectUrls: {
      success: "/dashboard",
      error: "/login?error=auth_failed",
    },
  },

  // ==================== LEAD GENERATION FORM ====================
  leadForm: {
    title: "{{LEAD_FORM_TITLE}}",
    subtitle: "{{LEAD_FORM_SUBTITLE}}",
    fields: [
      {
        name: "name",
        label: "Full Name",
        type: "text",
        required: true,
        placeholder: "John Doe",
      },
      {
        name: "email",
        label: "Work Email",
        type: "email",
        required: true,
        placeholder: "john@company.com",
      },
      {
        name: "company",
        label: "Company Name",
        type: "text",
        required: true,
        placeholder: "Acme Inc.",
      },
      {
        name: "phone",
        label: "Phone Number",
        type: "tel",
        required: false,
        placeholder: "+1 (555) 123-4567",
      },
      {
        name: "company_size",
        label: "Company Size",
        type: "select",
        required: true,
        options: [
          { value: "1-10", label: "1-10 employees" },
          { value: "11-50", label: "11-50 employees" },
          { value: "51-200", label: "51-200 employees" },
          { value: "201-500", label: "201-500 employees" },
          { value: "501+", label: "501+ employees" },
        ],
      },
      {
        name: "message",
        label: "How can we help?",
        type: "textarea",
        required: false,
        placeholder: "Tell us about your needs...",
      },
    ],
    submitButton: "{{LEAD_FORM_SUBMIT_TEXT}}",
    successMessage: "{{LEAD_FORM_SUCCESS_MESSAGE}}",
  },

  // ==================== SEO & META ====================
  seo: {
    title: "{{SEO_TITLE}}",
    description: "{{SEO_DESCRIPTION}}",
    keywords: "{{SEO_KEYWORDS}}",
    ogImage: "/static/og-image.jpg", // Social media preview image
  },

  // ==================== INTEGRATIONS ====================
  integrations: {
    // Stripe (for payments)
    stripe: {
      publishableKey: "{{STRIPE_PUBLISHABLE_KEY}}",
      // Secret key should be in .dev.vars / Cloudflare secrets
    },
    
    // Analytics (optional)
    googleAnalytics: {
      enabled: false,
      measurementId: "{{GA_MEASUREMENT_ID}}",
    },
    
    // Email service (for lead notifications)
    email: {
      provider: "resend", // or "sendgrid", "mailgun"
      fromEmail: "{{FROM_EMAIL}}",
      notificationEmail: "{{NOTIFICATION_EMAIL}}",
    },
  },
};

// Example populated configuration (for reference)
export const exampleConfig = {
  company: {
    name: "CloudFlow",
    tagline: "Streamline Your Workflow",
    description: "The ultimate SaaS platform for modern teams to collaborate, automate, and scale their business operations.",
    email: "hello@cloudflow.io",
    phone: "+1 (555) 123-4567",
    address: "123 Tech Street, San Francisco, CA 94105",
  },
  hero: {
    headline: "Build Better Products, Faster",
    subheadline: "CloudFlow helps teams ship features 10x faster with our AI-powered workflow automation platform.",
    ctaButton: {
      text: "Start Free Trial",
      link: "/signup",
    },
    secondaryButton: {
      text: "Watch Demo",
      link: "/demo",
    },
  },
  // ... (rest would follow the same pattern)
};
