# UI Theme Examples

This document provides ready-to-use theme configurations for different styles and industries.

## 🎨 Color Themes

### 1. Modern Blue (Default)
Professional and trustworthy - perfect for B2B SaaS

```typescript
theme: {
  colors: {
    primary: "#667eea",
    primaryDark: "#764ba2",
    secondary: "#4c9aff",
    success: "#10b981",
    error: "#ef4444",
    warning: "#f59e0b",
    background: "#f9fafb",
    surface: "#ffffff",
    text: {
      primary: "#111827",
      secondary: "#6b7280",
      light: "#9ca3af",
    },
  },
}
```

### 2. Vibrant Orange
Energetic and creative - great for startups

```typescript
theme: {
  colors: {
    primary: "#f97316",
    primaryDark: "#ea580c",
    secondary: "#fb923c",
    success: "#10b981",
    error: "#ef4444",
    warning: "#f59e0b",
    background: "#fef3c7",
    surface: "#ffffff",
    text: {
      primary: "#1c1917",
      secondary: "#78716c",
      light: "#a8a29e",
    },
  },
}
```

### 3. Professional Purple
Premium and sophisticated - ideal for enterprise

```typescript
theme: {
  colors: {
    primary: "#8b5cf6",
    primaryDark: "#7c3aed",
    secondary: "#a78bfa",
    success: "#10b981",
    error: "#ef4444",
    warning: "#f59e0b",
    background: "#faf5ff",
    surface: "#ffffff",
    text: {
      primary: "#1f2937",
      secondary: "#6b7280",
      light: "#9ca3af",
    },
  },
}
```

### 4. Fresh Green
Eco-friendly and modern - sustainability focused

```typescript
theme: {
  colors: {
    primary: "#10b981",
    primaryDark: "#059669",
    secondary: "#34d399",
    success: "#22c55e",
    error: "#ef4444",
    warning: "#f59e0b",
    background: "#f0fdf4",
    surface: "#ffffff",
    text: {
      primary: "#064e3b",
      secondary: "#047857",
      light: "#6ee7b7",
    },
  },
}
```

### 5. Elegant Dark
Modern and sleek - tech-forward companies

```typescript
theme: {
  colors: {
    primary: "#8b5cf6",
    primaryDark: "#7c3aed",
    secondary: "#a78bfa",
    success: "#10b981",
    error: "#ef4444",
    warning: "#f59e0b",
    background: "#1f2937",
    surface: "#111827",
    text: {
      primary: "#f9fafb",
      secondary: "#d1d5db",
      light: "#9ca3af",
    },
  },
}
```

### 6. Bold Red
Dynamic and attention-grabbing - consumer apps

```typescript
theme: {
  colors: {
    primary: "#ef4444",
    primaryDark: "#dc2626",
    secondary: "#f87171",
    success: "#10b981",
    error: "#b91c1c",
    warning: "#f59e0b",
    background: "#fef2f2",
    surface: "#ffffff",
    text: {
      primary: "#1f2937",
      secondary: "#6b7280",
      light: "#9ca3af",
    },
  },
}
```

## 🔤 Typography Themes

### 1. Modern Sans-Serif (Default)
Clean and readable - Inter font

```typescript
theme: {
  fonts: {
    primary: "'Inter', sans-serif",
    heading: "'Inter', sans-serif",
    mono: "'Fidelity Mono', monospace",
  },
}
```

### 2. Professional Combo
Elegant headings with readable body - Playfair Display + Open Sans

```typescript
theme: {
  fonts: {
    primary: "'Open Sans', sans-serif",
    heading: "'Playfair Display', serif",
    mono: "'Roboto Mono', monospace",
  },
}
```

### 3. Tech/Startup
Modern and geometric - Poppins

```typescript
theme: {
  fonts: {
    primary: "'Poppins', sans-serif",
    heading: "'Poppins', sans-serif",
    mono: "'Source Code Pro', monospace",
  },
}
```

### 4. Corporate
Professional and authoritative - Lato

```typescript
theme: {
  fonts: {
    primary: "'Lato', sans-serif",
    heading: "'Montserrat', sans-serif",
    mono: "'IBM Plex Mono', monospace",
  },
}
```

### 5. Creative
Unique and memorable - Quicksand

```typescript
theme: {
  fonts: {
    primary: "'Quicksand', sans-serif",
    heading: "'Raleway', sans-serif",
    mono: "'Fira Code', monospace",
  },
}
```

## 🎯 Button Styles

### 1. Rounded Buttons
Friendly and modern

```typescript
theme: {
  buttons: {
    primary: {
      background: "primary",
      hoverBackground: "primaryDark",
      textColor: "#ffffff",
      borderRadius: "full",  // Fully rounded
      padding: "0.75rem 2rem",
    },
    secondary: {
      background: "transparent",
      hoverBackground: "rgba(255,255,255,0.2)",
      textColor: "primary",
      borderRadius: "full",
      border: "2px solid",
      padding: "0.75rem 2rem",
    },
  },
}
```

### 2. Sharp Buttons
Bold and professional

```typescript
theme: {
  buttons: {
    primary: {
      background: "primary",
      hoverBackground: "primaryDark",
      textColor: "#ffffff",
      borderRadius: "sm",  // Slightly rounded
      padding: "0.75rem 2rem",
    },
    secondary: {
      background: "transparent",
      hoverBackground: "rgba(0,0,0,0.05)",
      textColor: "primary",
      borderRadius: "sm",
      border: "2px solid",
      padding: "0.75rem 2rem",
    },
  },
}
```

### 3. Pill Buttons
Trendy and smooth

```typescript
theme: {
  buttons: {
    primary: {
      background: "primary",
      hoverBackground: "primaryDark",
      textColor: "#ffffff",
      borderRadius: "2xl",  // Extra rounded
      padding: "1rem 2.5rem",
    },
    secondary: {
      background: "transparent",
      hoverBackground: "rgba(255,255,255,0.2)",
      textColor: "primary",
      borderRadius: "2xl",
      border: "2px solid",
      padding: "1rem 2.5rem",
    },
  },
}
```

## 📦 Card Styles

### 1. Elevated Cards (Default)
Clear depth and hierarchy

```typescript
theme: {
  cards: {
    borderRadius: "xl",
    shadow: "lg",
    padding: "2rem",
    hoverTransform: "translateY(-5px)",
  },
}
```

### 2. Flat Cards
Minimal and modern

```typescript
theme: {
  cards: {
    borderRadius: "lg",
    shadow: "sm",
    padding: "1.5rem",
    hoverTransform: "scale(1.02)",
  },
}
```

### 3. Bordered Cards
Clean and structured

```typescript
theme: {
  cards: {
    borderRadius: "md",
    shadow: "none",
    padding: "2rem",
    hoverTransform: "translateX(5px)",
    border: "2px solid #e5e7eb",  // Add this to CSS
  },
}
```

## 🏗️ Layout Configurations

### 1. Wide Layout
Maximum content width

```typescript
theme: {
  layout: {
    maxWidth: "1536px",  // Extra wide
    headerHeight: "5rem",
    navPosition: "fixed",
  },
}
```

### 2. Compact Layout
Focused and readable

```typescript
theme: {
  layout: {
    maxWidth: "1024px",  // Narrower
    headerHeight: "4rem",
    navPosition: "sticky",
  },
}
```

### 3. Standard Layout (Default)
Balanced and versatile

```typescript
theme: {
  layout: {
    maxWidth: "1280px",
    headerHeight: "4rem",
    navPosition: "fixed",
  },
}
```

## 🎨 Complete Theme Presets

### Preset 1: SaaS Startup (Modern Blue + Inter)
```typescript
theme: {
  colors: {
    primary: "#667eea",
    primaryDark: "#764ba2",
    secondary: "#4c9aff",
    success: "#10b981",
    error: "#ef4444",
    warning: "#f59e0b",
    background: "#f9fafb",
    surface: "#ffffff",
    text: { primary: "#111827", secondary: "#6b7280", light: "#9ca3af" },
  },
  fonts: {
    primary: "'Inter', sans-serif",
    heading: "'Inter', sans-serif",
    mono: "'Fidelity Mono', monospace",
  },
  borderRadius: { sm: "0.25rem", md: "0.5rem", lg: "0.75rem", xl: "1rem", "2xl": "1.5rem", full: "9999px" },
  buttons: {
    primary: { background: "primary", hoverBackground: "primaryDark", textColor: "#ffffff", borderRadius: "lg", padding: "0.75rem 2rem" },
    secondary: { background: "transparent", hoverBackground: "rgba(255,255,255,0.2)", textColor: "primary", borderRadius: "lg", border: "2px solid", padding: "0.75rem 2rem" },
  },
  layout: { maxWidth: "1280px", headerHeight: "4rem", navPosition: "fixed" },
}
```

### Preset 2: E-commerce (Vibrant Orange + Poppins)
```typescript
theme: {
  colors: {
    primary: "#f97316",
    primaryDark: "#ea580c",
    secondary: "#fb923c",
    success: "#10b981",
    error: "#ef4444",
    warning: "#f59e0b",
    background: "#ffffff",
    surface: "#ffffff",
    text: { primary: "#1c1917", secondary: "#78716c", light: "#a8a29e" },
  },
  fonts: {
    primary: "'Poppins', sans-serif",
    heading: "'Poppins', sans-serif",
    mono: "'Source Code Pro', monospace",
  },
  borderRadius: { sm: "0.375rem", md: "0.5rem", lg: "1rem", xl: "1.5rem", "2xl": "2rem", full: "9999px" },
  buttons: {
    primary: { background: "primary", hoverBackground: "primaryDark", textColor: "#ffffff", borderRadius: "full", padding: "1rem 2.5rem" },
    secondary: { background: "transparent", hoverBackground: "rgba(0,0,0,0.05)", textColor: "primary", borderRadius: "full", border: "2px solid", padding: "1rem 2.5rem" },
  },
  layout: { maxWidth: "1536px", headerHeight: "5rem", navPosition: "sticky" },
}
```

### Preset 3: Enterprise (Professional Purple + Lato)
```typescript
theme: {
  colors: {
    primary: "#8b5cf6",
    primaryDark: "#7c3aed",
    secondary: "#a78bfa",
    success: "#10b981",
    error: "#ef4444",
    warning: "#f59e0b",
    background: "#fafafa",
    surface: "#ffffff",
    text: { primary: "#1f2937", secondary: "#6b7280", light: "#9ca3af" },
  },
  fonts: {
    primary: "'Lato', sans-serif",
    heading: "'Montserrat', sans-serif",
    mono: "'IBM Plex Mono', monospace",
  },
  borderRadius: { sm: "0.25rem", md: "0.375rem", lg: "0.5rem", xl: "0.75rem", "2xl": "1rem", full: "9999px" },
  buttons: {
    primary: { background: "primary", hoverBackground: "primaryDark", textColor: "#ffffff", borderRadius: "md", padding: "0.875rem 2rem" },
    secondary: { background: "transparent", hoverBackground: "rgba(0,0,0,0.05)", textColor: "primary", borderRadius: "md", border: "2px solid", padding: "0.875rem 2rem" },
  },
  layout: { maxWidth: "1280px", headerHeight: "4.5rem", navPosition: "fixed" },
}
```

## 🎨 Industry-Specific Themes

### FinTech
Trust and security focused
```typescript
theme: {
  colors: {
    primary: "#1e40af",  // Deep blue
    primaryDark: "#1e3a8a",
    secondary: "#3b82f6",
    // ...
  },
  fonts: {
    primary: "'IBM Plex Sans', sans-serif",
    heading: "'IBM Plex Sans', sans-serif",
  },
}
```

### Healthcare
Calm and professional
```typescript
theme: {
  colors: {
    primary: "#0891b2",  // Medical teal
    primaryDark: "#0e7490",
    secondary: "#06b6d4",
    // ...
  },
  fonts: {
    primary: "'Lato', sans-serif",
    heading: "'Lato', sans-serif",
  },
}
```

### Education
Friendly and accessible
```typescript
theme: {
  colors: {
    primary: "#f59e0b",  // Warm yellow
    primaryDark: "#d97706",
    secondary: "#fbbf24",
    // ...
  },
  fonts: {
    primary: "'Open Sans', sans-serif",
    heading: "'Quicksand', sans-serif",
  },
}
```

## 💡 Tips for Theme Selection

1. **Brand Consistency**: Match your existing brand colors
2. **Accessibility**: Ensure sufficient contrast ratios
3. **Target Audience**: Choose colors that resonate with your users
4. **Industry Standards**: Follow common patterns in your industry
5. **Test Thoroughly**: View your theme on different devices and screens

## 🔧 How to Apply a Theme

Simply copy any theme configuration from above and replace the `theme` section in your `config.ts` file:

```typescript
// config.ts
export const siteConfig = {
  theme: {
    // Paste theme configuration here
  },
  
  // Rest of your config...
  company: { /* ... */ },
  hero: { /* ... */ },
  // ...
}
```

Then rebuild and restart:
```bash
npm run build
pm2 restart webapp
```

Your entire website will instantly update with the new theme!
