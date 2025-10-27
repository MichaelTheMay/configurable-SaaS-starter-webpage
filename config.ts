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
      primaryLight: "#818cf8",   // Lighter shade for hover states
      secondary: "#4c9aff",      // Secondary accent color
      secondaryDark: "#2684FF",  // Darker secondary
      secondaryLight: "#7AB8FF", // Lighter secondary
      accent: "#f59e0b",         // Accent color for highlights
      success: "#10b981",        // Success messages
      error: "#ef4444",          // Error messages
      warning: "#f59e0b",        // Warning messages
      info: "#3b82f6",           // Info messages
      background: "#f9fafb",     // Page background
      backgroundDark: "#f3f4f6", // Darker background for sections
      surface: "#ffffff",        // Card/surface background
      surfaceHover: "#f9fafb",   // Surface hover state
      border: "#e5e7eb",         // Border color
      borderDark: "#d1d5db",     // Darker border
      text: {
        primary: "#111827",      // Main text color
        secondary: "#6b7280",    // Secondary text color
        light: "#9ca3af",        // Light text color
        inverse: "#ffffff",      // Text on dark backgrounds
      },
    },
    
    // Typography
    fonts: {
      primary: "'Inter', sans-serif",     // Main font family
      heading: "'Inter', sans-serif",     // Heading font family
      mono: "'Fidelity Mono', monospace", // Monospace font
    },
    
    // Font Sizes (Tailwind scale) - Fully customizable
    fontSize: {
      xs: "0.75rem",      // 12px
      sm: "0.875rem",     // 14px
      base: "1rem",       // 16px
      lg: "1.125rem",     // 18px
      xl: "1.25rem",      // 20px
      "2xl": "1.5rem",    // 24px
      "3xl": "1.875rem",  // 30px
      "4xl": "2.25rem",   // 36px
      "5xl": "3rem",      // 48px
      "6xl": "3.75rem",   // 60px
      "7xl": "4.5rem",    // 72px
      "8xl": "6rem",      // 96px
      "9xl": "8rem",      // 128px
    },
    
    // Font Weights
    fontWeight: {
      thin: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },
    
    // Line Heights
    lineHeight: {
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2",
    },
    
    // Letter Spacing
    letterSpacing: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em",
    },
    
    // Border Radius
    borderRadius: {
      none: "0",
      sm: "0.25rem",
      md: "0.5rem",
      lg: "0.75rem",
      xl: "1rem",
      "2xl": "1.5rem",
      "3xl": "2rem",
      full: "9999px",
    },
    
    // Shadows
    shadows: {
      none: "none",
      sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      md: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
      lg: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
      xl: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
      "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
      inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
    },
    
    // Spacing Scale (for padding, margin, gaps)
    spacing: {
      px: "1px",
      "0": "0",
      "0.5": "0.125rem",  // 2px
      "1": "0.25rem",     // 4px
      "1.5": "0.375rem",  // 6px
      "2": "0.5rem",      // 8px
      "2.5": "0.625rem",  // 10px
      "3": "0.75rem",     // 12px
      "3.5": "0.875rem",  // 14px
      "4": "1rem",        // 16px
      "5": "1.25rem",     // 20px
      "6": "1.5rem",      // 24px
      "7": "1.75rem",     // 28px
      "8": "2rem",        // 32px
      "9": "2.25rem",     // 36px
      "10": "2.5rem",     // 40px
      "12": "3rem",       // 48px
      "14": "3.5rem",     // 56px
      "16": "4rem",       // 64px
      "20": "5rem",       // 80px
      "24": "6rem",       // 96px
      "32": "8rem",       // 128px
      "40": "10rem",      // 160px
      "48": "12rem",      // 192px
      "56": "14rem",      // 224px
      "64": "16rem",      // 256px
    },
    
    // Layout
    layout: {
      maxWidth: "1280px",        // Max content width
      containerPadding: "2rem",  // Container side padding
      sectionSpacing: "5rem",    // Space between sections
      headerHeight: "4rem",      // Header height
      navPosition: "fixed",      // fixed, sticky, or relative
    },
    
    // Animation Settings
    animations: {
      enabled: true,                    // Master toggle for animations
      duration: {
        fast: "150ms",
        normal: "300ms",
        slow: "500ms",
      },
      timing: "cubic-bezier(0.4, 0, 0.2, 1)", // Easing function
      hoverScale: "1.05",                // Scale on hover
      hoverTranslateY: "-5px",           // Lift on hover
    },
    
    // Button Styles with Multiple Variants
    buttons: {
      // Solid Primary Button
      primary: {
        variant: "solid",
        background: "primary",
        hoverBackground: "primaryDark",
        textColor: "#ffffff",
        borderRadius: "lg",
        padding: "0.75rem 2rem",
        fontSize: "base",
        fontWeight: "semibold",
        shadow: "md",
        hoverShadow: "lg",
        border: "none",
      },
      // Outline Secondary Button
      secondary: {
        variant: "outline",
        background: "transparent",
        hoverBackground: "rgba(102, 126, 234, 0.1)",
        textColor: "primary",
        borderRadius: "lg",
        border: "2px solid",
        borderColor: "primary",
        padding: "0.75rem 2rem",
        fontSize: "base",
        fontWeight: "semibold",
        shadow: "none",
        hoverShadow: "md",
      },
      // Ghost Button
      ghost: {
        variant: "ghost",
        background: "transparent",
        hoverBackground: "rgba(102, 126, 234, 0.1)",
        textColor: "primary",
        borderRadius: "lg",
        border: "none",
        padding: "0.75rem 2rem",
        fontSize: "base",
        fontWeight: "medium",
        shadow: "none",
        hoverShadow: "none",
      },
      // Gradient Button
      gradient: {
        variant: "gradient",
        background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)",
        hoverBackground: "linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 100%)",
        textColor: "#ffffff",
        borderRadius: "xl",
        padding: "0.875rem 2.5rem",
        fontSize: "base",
        fontWeight: "bold",
        shadow: "lg",
        hoverShadow: "xl",
        border: "none",
      },
      // Small Button
      small: {
        variant: "solid",
        background: "primary",
        hoverBackground: "primaryDark",
        textColor: "#ffffff",
        borderRadius: "md",
        padding: "0.5rem 1rem",
        fontSize: "sm",
        fontWeight: "medium",
        shadow: "sm",
        hoverShadow: "md",
        border: "none",
      },
      // Large Button
      large: {
        variant: "solid",
        background: "primary",
        hoverBackground: "primaryDark",
        textColor: "#ffffff",
        borderRadius: "xl",
        padding: "1rem 3rem",
        fontSize: "lg",
        fontWeight: "bold",
        shadow: "lg",
        hoverShadow: "xl",
        border: "none",
      },
    },
    
    // Card Styles with Multiple Variants
    cards: {
      // Default Card
      default: {
        background: "surface",
        borderRadius: "xl",
        shadow: "lg",
        padding: "2rem",
        border: "1px solid",
        borderColor: "border",
        hoverTransform: "translateY(-5px)",
        hoverShadow: "xl",
      },
      // Flat Card
      flat: {
        background: "surface",
        borderRadius: "lg",
        shadow: "none",
        padding: "1.5rem",
        border: "1px solid",
        borderColor: "border",
        hoverTransform: "none",
        hoverShadow: "md",
      },
      // Elevated Card
      elevated: {
        background: "surface",
        borderRadius: "2xl",
        shadow: "2xl",
        padding: "2.5rem",
        border: "none",
        borderColor: "transparent",
        hoverTransform: "translateY(-8px) scale(1.02)",
        hoverShadow: "2xl",
      },
      // Outlined Card
      outlined: {
        background: "transparent",
        borderRadius: "xl",
        shadow: "none",
        padding: "2rem",
        border: "2px solid",
        borderColor: "border",
        hoverTransform: "translateY(-3px)",
        hoverShadow: "lg",
      },
      // Gradient Card
      gradient: {
        background: "linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)",
        borderRadius: "2xl",
        shadow: "md",
        padding: "2rem",
        border: "1px solid",
        borderColor: "rgba(102, 126, 234, 0.2)",
        hoverTransform: "translateY(-5px)",
        hoverShadow: "xl",
      },
    },
    
    // Component-Specific Styling
    components: {
      // Navigation Bar
      navbar: {
        background: "surface",
        borderBottom: "1px solid",
        borderColor: "border",
        shadow: "sm",
        height: "4rem",
        padding: "0 2rem",
        logoSize: "2rem",
        linkSpacing: "2rem",
        linkColor: "text.secondary",
        linkHoverColor: "primary",
        mobileBreakpoint: "768px",
      },
      // Footer
      footer: {
        background: "backgroundDark",
        textColor: "text.secondary",
        padding: "4rem 2rem",
        borderTop: "1px solid",
        borderColor: "border",
        linkColor: "text.primary",
        linkHoverColor: "primary",
        columnGap: "4rem",
      },
      // Forms
      forms: {
        inputBackground: "surface",
        inputBorder: "1px solid",
        inputBorderColor: "border",
        inputBorderRadius: "md",
        inputPadding: "0.75rem 1rem",
        inputFocusBorderColor: "primary",
        inputFocusShadow: "0 0 0 3px rgba(102, 126, 234, 0.1)",
        labelColor: "text.primary",
        labelFontWeight: "medium",
        labelMarginBottom: "0.5rem",
        errorColor: "error",
        successColor: "success",
      },
      // Hero Section
      hero: {
        minHeight: "600px",
        background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)",
        textColor: "text.inverse",
        headlineSize: "5xl",
        subheadlineSize: "xl",
        padding: "6rem 2rem",
        alignment: "center",  // center, left, right
      },
      // Feature Cards
      features: {
        cardStyle: "default",     // References cards config
        iconSize: "3rem",
        iconColor: "primary",
        iconBackground: "rgba(102, 126, 234, 0.1)",
        iconBorderRadius: "xl",
        titleSize: "xl",
        titleColor: "text.primary",
        descriptionColor: "text.secondary",
        gridColumns: "3",         // 2, 3, or 4
        gap: "2rem",
      },
      // Pricing Cards
      pricing: {
        cardStyle: "elevated",    // References cards config
        highlightBorder: "2px solid",
        highlightBorderColor: "primary",
        highlightBadgeBackground: "primary",
        highlightBadgeText: "text.inverse",
        priceSize: "4xl",
        priceColor: "text.primary",
        periodColor: "text.secondary",
        featureIconColor: "success",
        gridColumns: "3",
        gap: "2rem",
      },
      // Testimonials
      testimonials: {
        cardStyle: "flat",        // References cards config
        avatarSize: "4rem",
        avatarBorderRadius: "full",
        nameColor: "text.primary",
        nameSize: "lg",
        rolColor: "text.secondary",
        roleSize: "sm",
        quoteColor: "text.primary",
        quoteSize: "base",
        ratingColor: "warning",
        gridColumns: "3",
        gap: "2rem",
      },
    },
  },

  // ==================== COMPANY INFORMATION ====================
  company: {
    name: "SaaS Starter Template",
    tagline: "Build Your SaaS Website in Minutes, Not Months",
    description: "A production-ready, fully configurable SaaS website template with integrated authentication, payments, and lead generation. Everything controlled from a single config file - no code required.",
    logo: "/static/logo.png",
    favicon: "/static/favicon.ico",
    email: "hello@saas-template.dev",
    phone: "+1 (555) 123-4567",
    address: "Built with Hono + Cloudflare Pages",
  },

  // ==================== HERO SECTION ====================
  hero: {
    headline: "Launch Your SaaS Website in Minutes",
    subheadline: "Fully configurable template with UI theming, dynamic pages, authentication, and payments. Everything controlled from one config file. No code required.",
    ctaButton: {
      text: "Get Started Free",
      link: "https://github.com/MichaelTheMay/configurable-SaaS-starter-webpage",
    },
    secondaryButton: {
      text: "View Documentation",
      link: "https://github.com/MichaelTheMay/configurable-SaaS-starter-webpage#readme",
    },
    backgroundImage: "/static/hero-bg.jpg",
  },

  // ==================== FEATURES ====================
  features: [
    {
      icon: "fas fa-palette",
      title: "Complete UI Theme System",
      description: "Customize colors, fonts, shadows, borders, and layouts from config. 6+ ready-to-use themes included. Change your entire brand in seconds.",
    },
    {
      icon: "fas fa-file-alt",
      title: "Dynamic Page Routing",
      description: "Create unlimited custom pages without code. Add About, Blog, Contact, Legal pages with simple config. Automatic routing and navigation.",
    },
    {
      icon: "fas fa-credit-card",
      title: "Stripe Integration",
      description: "Built-in payment processing with subscription management. Multiple pricing tiers, checkout flow, and webhook handling included.",
    },
    {
      icon: "fas fa-lock",
      title: "Authentication Ready",
      description: "Email/password + OAuth (Google, GitHub) authentication. JWT sessions, signup/login pages, and user management included.",
    },
    {
      icon: "fas fa-database",
      title: "Database & Storage",
      description: "Cloudflare D1, KV, and R2 storage integration. SQL migrations, key-value cache, and object storage ready to use.",
    },
    {
      icon: "fas fa-envelope",
      title: "Lead Generation",
      description: "Customizable contact forms with email notifications via Resend. Capture leads and get notified instantly.",
    },
  ],

  // ==================== PRICING PLANS ====================
  pricing: {
    title: "Free & Open Source",
    subtitle: "This template is completely free. Choose how you want to use it.",
    plans: [
      {
        name: "Basic Template",
        price: "Free",
        period: "forever",
        description: "Perfect for getting started quickly",
        features: [
          "✅ Complete source code",
          "✅ All features included",
          "✅ Theme system",
          "✅ Dynamic pages",
          "✅ Authentication setup",
          "✅ MIT License",
        ],
        stripePriceId: "",
        highlighted: false,
      },
      {
        name: "With Documentation",
        price: "Free",
        period: "forever",
        description: "Full template with comprehensive guides",
        features: [
          "✅ Everything in Basic",
          "✅ 8 detailed guides",
          "✅ Theme examples (6 presets)",
          "✅ Page templates",
          "✅ Configuration guide",
          "✅ Troubleshooting help",
          "✅ Best practices",
        ],
        stripePriceId: "",
        highlighted: true,
      },
      {
        name: "Production Ready",
        price: "Free",
        period: "forever",
        description: "Deploy to production immediately",
        features: [
          "✅ Everything in With Docs",
          "✅ Cloudflare Pages config",
          "✅ Database migrations",
          "✅ Deployment guide",
          "✅ Environment setup",
          "✅ CI/CD ready",
          "✅ Production tested",
          "✅ Live demo included",
        ],
        stripePriceId: "",
        highlighted: false,
      },
    ],
  },

  // ==================== TESTIMONIALS ====================
  testimonials: [
    {
      name: "Sarah Chen",
      role: "Founder",
      company: "TechFlow",
      content: "This template saved me weeks of development. I had my SaaS landing page live in under 2 hours. The theme system is incredibly powerful!",
      avatar: "/static/avatar1.jpg",
      rating: 5,
    },
    {
      name: "Marcus Johnson",
      role: "CTO",
      company: "CloudSync",
      content: "The configuration-driven approach is genius. We can rebrand our entire site by changing a few lines in config.ts. No more digging through HTML and CSS files.",
      avatar: "/static/avatar2.jpg",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager",
      company: "DataViz Pro",
      content: "Best part? It's completely free and open source. The documentation is thorough, and the dynamic page system makes adding new pages a breeze.",
      avatar: "/static/avatar3.jpg",
      rating: 5,
    },
  ],

  // ==================== SOCIAL MEDIA ====================
  social: {
    twitter: "",
    facebook: "",
    linkedin: "",
    instagram: "",
    github: "https://github.com/MichaelTheMay/configurable-SaaS-starter-webpage",
  },

  // ==================== CALL TO ACTION ====================
  cta: {
    title: "Ready to Build Your SaaS?",
    subtitle: "Get started in minutes with our free, open-source template. No credit card required.",
    buttonText: "Clone on GitHub",
    buttonLink: "https://github.com/MichaelTheMay/configurable-SaaS-starter-webpage",
  },

  // ==================== FOOTER ====================
  footer: {
    columns: [
      {
        title: "Resources",
        links: [
          { text: "Documentation", url: "https://github.com/MichaelTheMay/configurable-SaaS-starter-webpage#readme" },
          { text: "Theme Examples", url: "https://github.com/MichaelTheMay/configurable-SaaS-starter-webpage/blob/main/THEME_EXAMPLES.md" },
          { text: "Page Guide", url: "https://github.com/MichaelTheMay/configurable-SaaS-starter-webpage/blob/main/PAGES_GUIDE.md" },
          { text: "Setup Guide", url: "https://github.com/MichaelTheMay/configurable-SaaS-starter-webpage/blob/main/SETUP.md" },
        ],
      },
      {
        title: "Pages",
        links: [
          { text: "About", url: "/about" },
          { text: "Blog", url: "/blog" },
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
