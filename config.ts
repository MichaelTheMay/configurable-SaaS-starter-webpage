/**
 * SaaS Website Configuration File
 * 
 * This is the single source of truth for all website content and settings.
 * Modify this file to customize your SaaS website without touching the code.
 */

export const siteConfig = {
  // ==================== UI THEME CONFIGURATION ====================
  theme: {
    // Color Scheme
    colors: {
      primary: "#667eea",        // Main brand color (buttons, links, accents)
      primaryDark: "#764ba2",    // Darker shade for gradients
      secondary: "#4c9aff",      // Secondary accent color
      success: "#10b981",        // Success messages
      error: "#ef4444",          // Error messages
      warning: "#f59e0b",        // Warning messages
      background: "#f9fafb",     // Page background
      surface: "#ffffff",        // Card/surface background
      text: {
        primary: "#111827",      // Main text color
        secondary: "#6b7280",    // Secondary text color
        light: "#9ca3af",        // Light text color
      },
    },
    
    // Typography
    fonts: {
      primary: "'Inter', sans-serif",     // Main font family
      heading: "'Inter', sans-serif",     // Heading font family
      mono: "'Fidelity Mono', monospace", // Monospace font
    },
    
    // Font Sizes (Tailwind scale)
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
    },
    
    // Border Radius
    borderRadius: {
      sm: "0.25rem",
      md: "0.5rem",
      lg: "0.75rem",
      xl: "1rem",
      "2xl": "1.5rem",
      full: "9999px",
    },
    
    // Shadows
    shadows: {
      sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      md: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
      lg: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
      xl: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
    },
    
    // Layout
    layout: {
      maxWidth: "1280px",        // Max content width
      headerHeight: "4rem",      // Header height
      navPosition: "fixed",      // fixed, sticky, or relative
    },
    
    // Button Styles
    buttons: {
      primary: {
        background: "primary",
        hoverBackground: "primaryDark",
        textColor: "#ffffff",
        borderRadius: "lg",
        padding: "0.75rem 2rem",
      },
      secondary: {
        background: "transparent",
        hoverBackground: "rgba(255,255,255,0.2)",
        textColor: "primary",
        borderRadius: "lg",
        border: "2px solid",
        padding: "0.75rem 2rem",
      },
    },
    
    // Card Styles
    cards: {
      borderRadius: "xl",
      shadow: "lg",
      padding: "2rem",
      hoverTransform: "translateY(-5px)",
    },
  },

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

  // ==================== CUSTOM PAGES ====================
  pages: [
    {
      path: "/about",
      title: "About Us",
      inMenu: true,
      content: {
        hero: {
          title: "{{ABOUT_PAGE_TITLE}}",
          subtitle: "{{ABOUT_PAGE_SUBTITLE}}",
        },
        sections: [
          {
            type: "text",
            title: "{{ABOUT_SECTION_1_TITLE}}",
            content: "{{ABOUT_SECTION_1_CONTENT}}",
          },
          {
            type: "team",
            title: "Meet Our Team",
            members: [
              {
                name: "{{TEAM_MEMBER_1_NAME}}",
                role: "{{TEAM_MEMBER_1_ROLE}}",
                bio: "{{TEAM_MEMBER_1_BIO}}",
                image: "/static/team/member1.jpg",
                social: {
                  linkedin: "{{TEAM_MEMBER_1_LINKEDIN}}",
                  twitter: "{{TEAM_MEMBER_1_TWITTER}}",
                },
              },
            ],
          },
        ],
      },
    },
    {
      path: "/privacy",
      title: "Privacy Policy",
      inMenu: false,
      content: {
        hero: {
          title: "Privacy Policy",
          subtitle: "Last updated: {{PRIVACY_LAST_UPDATED}}",
        },
        sections: [
          {
            type: "text",
            title: "Information We Collect",
            content: "{{PRIVACY_SECTION_1}}",
          },
          {
            type: "text",
            title: "How We Use Your Information",
            content: "{{PRIVACY_SECTION_2}}",
          },
          {
            type: "text",
            title: "Data Security",
            content: "{{PRIVACY_SECTION_3}}",
          },
        ],
      },
    },
    {
      path: "/terms",
      title: "Terms of Service",
      inMenu: false,
      content: {
        hero: {
          title: "Terms of Service",
          subtitle: "Last updated: {{TERMS_LAST_UPDATED}}",
        },
        sections: [
          {
            type: "text",
            title: "Acceptance of Terms",
            content: "{{TERMS_SECTION_1}}",
          },
          {
            type: "text",
            title: "Use License",
            content: "{{TERMS_SECTION_2}}",
          },
        ],
      },
    },
    {
      path: "/blog",
      title: "Blog",
      inMenu: true,
      content: {
        hero: {
          title: "Our Blog",
          subtitle: "Latest updates and insights",
        },
        type: "blog_list",
      },
    },
    {
      path: "/contact",
      title: "Contact Us",
      inMenu: true,
      content: {
        hero: {
          title: "Get in Touch",
          subtitle: "We'd love to hear from you",
        },
        type: "contact_form",
      },
    },
  ],
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
