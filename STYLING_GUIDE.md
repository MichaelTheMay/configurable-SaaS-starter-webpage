# Complete Styling Configuration Guide

This template provides **extensive styling configuration** through the `config.ts` file. Every visual aspect of your website can be customized without touching any code.

## Table of Contents

1. [Quick Start](#quick-start)
2. [Color System](#color-system)
3. [Typography](#typography)
4. [Layout & Spacing](#layout--spacing)
5. [Button Variants](#button-variants)
6. [Card Variants](#card-variants)
7. [Component Styling](#component-styling)
8. [Animation Settings](#animation-settings)
9. [Complete Examples](#complete-examples)

---

## Quick Start

All styling is configured in `config.ts` under the `theme` object:

```typescript
export const siteConfig = {
  theme: {
    colors: { /* ... */ },
    fonts: { /* ... */ },
    buttons: { /* ... */ },
    cards: { /* ... */ },
    components: { /* ... */ },
    animations: { /* ... */ },
  }
}
```

---

## Color System

### Primary Colors
Configure your brand colors with automatic shade variations:

```typescript
colors: {
  primary: "#667eea",        // Main brand color
  primaryDark: "#764ba2",    // Darker shade for gradients
  primaryLight: "#818cf8",   // Lighter shade for hover states
  secondary: "#4c9aff",      // Secondary accent color
  secondaryDark: "#2684FF",  // Darker secondary
  secondaryLight: "#7AB8FF", // Lighter secondary
  accent: "#f59e0b",         // Accent color for highlights
}
```

### Status Colors
Feedback colors for success, error, warning, and info states:

```typescript
success: "#10b981",  // Green for success
error: "#ef4444",    // Red for errors
warning: "#f59e0b",  // Orange for warnings
info: "#3b82f6",     // Blue for info messages
```

### Surface & Background Colors
Control backgrounds and surfaces with multiple layers:

```typescript
background: "#f9fafb",        // Main page background
backgroundDark: "#f3f4f6",    // Darker sections
surface: "#ffffff",           // Card/component background
surfaceHover: "#f9fafb",      // Surface hover state
border: "#e5e7eb",            // Border color
borderDark: "#d1d5db",        // Darker borders
```

### Text Colors
Four levels of text hierarchy:

```typescript
text: {
  primary: "#111827",    // Main text color
  secondary: "#6b7280",  // Secondary text
  light: "#9ca3af",      // Subtle text
  inverse: "#ffffff",    // Text on dark backgrounds
}
```

---

## Typography

### Font Families
Configure font stacks with Google Fonts support:

```typescript
fonts: {
  primary: "'Inter', sans-serif",       // Body text
  heading: "'Inter', sans-serif",       // Headings
  mono: "'Fidelity Mono', monospace",   // Code blocks
}
```

**Google Fonts are automatically loaded!** Just specify the font name.

### Font Sizes
Complete size scale from xs to 9xl:

```typescript
fontSize: {
  xs: "0.75rem",    // 12px
  sm: "0.875rem",   // 14px
  base: "1rem",     // 16px
  lg: "1.125rem",   // 18px
  xl: "1.25rem",    // 20px
  "2xl": "1.5rem",  // 24px
  "3xl": "1.875rem",// 30px
  "4xl": "2.25rem", // 36px
  "5xl": "3rem",    // 48px
  "6xl": "3.75rem", // 60px
  "7xl": "4.5rem",  // 72px
  "8xl": "6rem",    // 96px
  "9xl": "8rem",    // 128px
}
```

### Font Weights
Nine weight options from thin to black:

```typescript
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
}
```

### Line Heights & Letter Spacing

```typescript
lineHeight: {
  tight: "1.25",    // Headings
  snug: "1.375",
  normal: "1.5",    // Body text
  relaxed: "1.625",
  loose: "2",       // Spacious
}

letterSpacing: {
  tighter: "-0.05em",
  tight: "-0.025em",
  normal: "0",
  wide: "0.025em",
  wider: "0.05em",
  widest: "0.1em",
}
```

---

## Layout & Spacing

### Layout Configuration

```typescript
layout: {
  maxWidth: "1280px",        // Max content width
  containerPadding: "2rem",  // Container side padding
  sectionSpacing: "5rem",    // Space between sections
  headerHeight: "4rem",      // Header height
  navPosition: "fixed",      // fixed, sticky, or relative
}
```

### Spacing Scale
Comprehensive spacing scale for padding, margin, and gaps:

```typescript
spacing: {
  px: "1px",
  "0": "0",
  "1": "0.25rem",   // 4px
  "2": "0.5rem",    // 8px
  "3": "0.75rem",   // 12px
  "4": "1rem",      // 16px
  "5": "1.25rem",   // 20px
  "6": "1.5rem",    // 24px
  "8": "2rem",      // 32px
  "10": "2.5rem",   // 40px
  "12": "3rem",     // 48px
  "16": "4rem",     // 64px
  "20": "5rem",     // 80px
  "24": "6rem",     // 96px
  "32": "8rem",     // 128px
  // ... up to 64
}
```

### Border Radius

```typescript
borderRadius: {
  none: "0",
  sm: "0.25rem",
  md: "0.5rem",
  lg: "0.75rem",
  xl: "1rem",
  "2xl": "1.5rem",
  "3xl": "2rem",
  full: "9999px",   // Perfect circles
}
```

### Shadows

```typescript
shadows: {
  none: "none",
  sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  md: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
  lg: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
  xl: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
  "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
  inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
}
```

---

## Button Variants

### 6 Pre-Configured Button Styles

#### 1. Primary (Solid)
```typescript
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
}
```

**Usage:** `<button class="btn-primary">Click Me</button>`

#### 2. Secondary (Outline)
```typescript
secondary: {
  variant: "outline",
  background: "transparent",
  hoverBackground: "rgba(102, 126, 234, 0.1)",
  textColor: "primary",
  border: "2px solid",
  borderColor: "primary",
  // ...
}
```

**Usage:** `<button class="btn-secondary">Learn More</button>`

#### 3. Ghost (Minimal)
```typescript
ghost: {
  variant: "ghost",
  background: "transparent",
  hoverBackground: "rgba(102, 126, 234, 0.1)",
  textColor: "primary",
  border: "none",
  // ...
}
```

**Usage:** `<button class="btn-ghost">Cancel</button>`

#### 4. Gradient (Eye-catching)
```typescript
gradient: {
  variant: "gradient",
  background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)",
  hoverBackground: "linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 100%)",
  borderRadius: "xl",
  padding: "0.875rem 2.5rem",
  shadow: "lg",
  hoverShadow: "xl",
}
```

**Usage:** `<button class="btn-gradient">Get Started</button>`

#### 5. Small
Compact button for tight spaces:
```typescript
small: {
  padding: "0.5rem 1rem",
  fontSize: "sm",
  // ...
}
```

**Usage:** `<button class="btn-small">Save</button>`

#### 6. Large
Bold, prominent button:
```typescript
large: {
  padding: "1rem 3rem",
  fontSize: "lg",
  fontWeight: "bold",
  // ...
}
```

**Usage:** `<button class="btn-large">Start Free Trial</button>`

---

## Card Variants

### 5 Pre-Configured Card Styles

#### 1. Default
Standard card with medium elevation:
```typescript
default: {
  background: "surface",
  borderRadius: "xl",
  shadow: "lg",
  padding: "2rem",
  border: "1px solid",
  borderColor: "border",
  hoverTransform: "translateY(-5px)",
  hoverShadow: "xl",
}
```

**Usage:** `<div class="card-default">Content</div>`

#### 2. Flat
Minimal card with no shadow:
```typescript
flat: {
  shadow: "none",
  borderRadius: "lg",
  padding: "1.5rem",
  hoverShadow: "md",
}
```

**Usage:** `<div class="card-flat">Content</div>`

#### 3. Elevated
High elevation for emphasis:
```typescript
elevated: {
  borderRadius: "2xl",
  shadow: "2xl",
  padding: "2.5rem",
  border: "none",
  hoverTransform: "translateY(-8px) scale(1.02)",
}
```

**Usage:** `<div class="card-elevated">Premium Content</div>`

#### 4. Outlined
Transparent with border:
```typescript
outlined: {
  background: "transparent",
  shadow: "none",
  border: "2px solid",
  borderColor: "border",
  hoverShadow: "lg",
}
```

**Usage:** `<div class="card-outlined">Content</div>`

#### 5. Gradient
Subtle gradient background:
```typescript
gradient: {
  background: "linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)",
  borderRadius: "2xl",
  borderColor: "rgba(102, 126, 234, 0.2)",
}
```

**Usage:** `<div class="card-gradient">Special Content</div>`

---

## Component Styling

### Navigation Bar

```typescript
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
}
```

### Footer

```typescript
footer: {
  background: "backgroundDark",
  textColor: "text.secondary",
  padding: "4rem 2rem",
  borderTop: "1px solid",
  borderColor: "border",
  linkColor: "text.primary",
  linkHoverColor: "primary",
  columnGap: "4rem",
}
```

### Forms

```typescript
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
  errorColor: "error",
  successColor: "success",
}
```

### Hero Section

```typescript
hero: {
  minHeight: "600px",
  background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)",
  textColor: "text.inverse",
  headlineSize: "5xl",
  subheadlineSize: "xl",
  padding: "6rem 2rem",
  alignment: "center",  // center, left, right
}
```

### Feature Cards

```typescript
features: {
  cardStyle: "default",     // References cards config
  iconSize: "3rem",
  iconColor: "primary",
  iconBackground: "rgba(102, 126, 234, 0.1)",
  iconBorderRadius: "xl",
  titleSize: "xl",
  gridColumns: "3",         // 2, 3, or 4
  gap: "2rem",
}
```

### Pricing Cards

```typescript
pricing: {
  cardStyle: "elevated",
  highlightBorder: "2px solid",
  highlightBorderColor: "primary",
  highlightBadgeBackground: "primary",
  priceSize: "4xl",
  gridColumns: "3",
  gap: "2rem",
}
```

### Testimonials

```typescript
testimonials: {
  cardStyle: "flat",
  avatarSize: "4rem",
  avatarBorderRadius: "full",
  nameSize: "lg",
  roleSize: "sm",
  quoteSize: "base",
  ratingColor: "warning",
  gridColumns: "3",
  gap: "2rem",
}
```

---

## Animation Settings

### Master Animation Control

```typescript
animations: {
  enabled: true,  // Toggle all animations on/off
  duration: {
    fast: "150ms",
    normal: "300ms",
    slow: "500ms",
  },
  timing: "cubic-bezier(0.4, 0, 0.2, 1)",  // Easing function
  hoverScale: "1.05",                       // Scale on hover
  hoverTranslateY: "-5px",                  // Lift on hover
}
```

### Animation Classes

```html
<!-- Hover lift effect -->
<div class="animate-hover">Lifts on hover</div>

<!-- Hover scale effect -->
<div class="animate-scale">Scales on hover</div>
```

---

## Complete Examples

### Example 1: Modern Blue Theme (Current)

```typescript
colors: {
  primary: "#667eea",
  primaryDark: "#764ba2",
  // ... rest of current config
}
```

### Example 2: Professional Corporate

```typescript
theme: {
  colors: {
    primary: "#1e40af",        // Deep blue
    primaryDark: "#1e3a8a",
    primaryLight: "#3b82f6",
    secondary: "#0ea5e9",
    accent: "#f59e0b",
    background: "#ffffff",
    backgroundDark: "#f8fafc",
    // ...
  },
  fonts: {
    primary: "'Inter', sans-serif",
    heading: "'Poppins', sans-serif",
  },
  buttons: {
    primary: {
      borderRadius: "md",      // Less rounded
      shadow: "sm",            // Subtle shadows
      fontWeight: "semibold",
    }
  },
  cards: {
    default: {
      borderRadius: "lg",      // Less rounded
      shadow: "md",            // Moderate shadows
    }
  }
}
```

### Example 3: Vibrant Startup

```typescript
theme: {
  colors: {
    primary: "#ec4899",        // Pink
    primaryDark: "#db2777",
    primaryLight: "#f472b6",
    secondary: "#8b5cf6",      // Purple
    accent: "#f59e0b",         // Orange
    background: "#fef3c7",     // Warm background
    // ...
  },
  buttons: {
    gradient: {
      background: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)",
      borderRadius: "2xl",     // Very rounded
      shadow: "2xl",           // High elevation
    }
  },
  animations: {
    enabled: true,
    hoverScale: "1.08",        // More dramatic
    hoverTranslateY: "-8px",
  }
}
```

### Example 4: Minimalist Dark

```typescript
theme: {
  colors: {
    primary: "#22c55e",        // Green accent
    primaryDark: "#16a34a",
    secondary: "#3b82f6",
    background: "#0f172a",     // Dark background
    backgroundDark: "#020617",
    surface: "#1e293b",
    text: {
      primary: "#f1f5f9",      // Light text
      secondary: "#94a3b8",
      light: "#64748b",
      inverse: "#0f172a",
    },
  },
  cards: {
    default: {
      background: "surface",
      shadow: "none",          // Flat design
      border: "1px solid",
      borderColor: "#334155",
      hoverTransform: "none",  // No animations
    }
  },
  animations: {
    enabled: false,            // Disable animations
  }
}
```

---

## CSS Custom Properties

All theme values are exposed as CSS custom properties:

```css
/* Colors */
var(--color-primary)
var(--color-primary-dark)
var(--color-text-primary)

/* Typography */
var(--font-primary)
var(--font-size-base)
var(--font-weight-bold)
var(--line-height-normal)

/* Layout */
var(--max-width)
var(--spacing-4)
var(--radius-lg)
var(--shadow-md)

/* Animations */
var(--animation-duration-normal)
var(--animation-timing)
```

### Using Custom Properties

```html
<style>
  .my-custom-element {
    color: var(--color-primary);
    font-size: var(--font-size-xl);
    padding: var(--spacing-4);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-md);
  }
</style>
```

---

## Tips & Best Practices

### 1. Start with a Preset
Copy a complete theme example and modify from there.

### 2. Maintain Color Consistency
Keep primary/secondary colors coordinated with proper light/dark variants.

### 3. Test Accessibility
Ensure sufficient contrast between text and backgrounds (WCAG AA: 4.5:1).

### 4. Use Semantic Naming
Use success/error/warning colors appropriately for user feedback.

### 5. Responsive Design
Component grid columns automatically adjust:
- Desktop: 3 columns
- Tablet: 2 columns  
- Mobile: 1 column

### 6. Performance
- Animations can be disabled globally with `animations.enabled: false`
- Google Fonts are loaded asynchronously
- CSS is generated once at build time

### 7. Version Control
Commit your theme changes to track different brand variations.

---

## Need Help?

- **GitHub Issues:** Report bugs or request features
- **Examples:** See `THEME_EXAMPLES.md` for 6+ ready-to-use themes
- **Documentation:** Full config reference in `README.md`

---

**Next Steps:**
1. Choose a theme example from `THEME_EXAMPLES.md`
2. Copy the config to `config.ts`
3. Customize colors and fonts to match your brand
4. Build and deploy: `npm run build && npm run deploy`
