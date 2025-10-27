import { siteConfig } from '../config'

/**
 * Generate CSS custom properties from theme config
 */
export function generateThemeCSS(): string {
  const { theme } = siteConfig
  
  return `
    <style>
      :root {
        /* Colors */
        --color-primary: ${theme.colors.primary};
        --color-primary-dark: ${theme.colors.primaryDark};
        --color-secondary: ${theme.colors.secondary};
        --color-success: ${theme.colors.success};
        --color-error: ${theme.colors.error};
        --color-warning: ${theme.colors.warning};
        --color-background: ${theme.colors.background};
        --color-surface: ${theme.colors.surface};
        --color-text-primary: ${theme.colors.text.primary};
        --color-text-secondary: ${theme.colors.text.secondary};
        --color-text-light: ${theme.colors.text.light};
        
        /* Fonts */
        --font-primary: ${theme.fonts.primary};
        --font-heading: ${theme.fonts.heading};
        --font-mono: ${theme.fonts.mono};
        
        /* Layout */
        --max-width: ${theme.layout.maxWidth};
        --header-height: ${theme.layout.headerHeight};
        
        /* Border Radius */
        --radius-sm: ${theme.borderRadius.sm};
        --radius-md: ${theme.borderRadius.md};
        --radius-lg: ${theme.borderRadius.lg};
        --radius-xl: ${theme.borderRadius.xl};
        --radius-2xl: ${theme.borderRadius["2xl"]};
        --radius-full: ${theme.borderRadius.full};
        
        /* Shadows */
        --shadow-sm: ${theme.shadows.sm};
        --shadow-md: ${theme.shadows.md};
        --shadow-lg: ${theme.shadows.lg};
        --shadow-xl: ${theme.shadows.xl};
      }
      
      /* Apply theme */
      body {
        font-family: var(--font-primary);
        background-color: var(--color-background);
        color: var(--color-text-primary);
      }
      
      h1, h2, h3, h4, h5, h6 {
        font-family: var(--font-heading);
      }
      
      .gradient-bg {
        background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
      }
      
      .btn-primary {
        background-color: var(--color-primary);
        color: white;
        padding: ${theme.buttons.primary.padding};
        border-radius: var(--radius-${theme.buttons.primary.borderRadius});
        transition: all 0.3s ease;
      }
      
      .btn-primary:hover {
        background-color: var(--color-primary-dark);
        transform: translateY(-2px);
        box-shadow: var(--shadow-lg);
      }
      
      .btn-secondary {
        background-color: ${theme.buttons.secondary.background};
        color: var(--color-primary);
        padding: ${theme.buttons.secondary.padding};
        border: ${theme.buttons.secondary.border} var(--color-primary);
        border-radius: var(--radius-${theme.buttons.secondary.borderRadius});
        transition: all 0.3s ease;
      }
      
      .btn-secondary:hover {
        background-color: ${theme.buttons.secondary.hoverBackground};
        transform: translateY(-2px);
      }
      
      .card {
        background-color: var(--color-surface);
        padding: ${theme.cards.padding};
        border-radius: var(--radius-${theme.cards.borderRadius});
        box-shadow: var(--shadow-${theme.cards.shadow});
        transition: all 0.3s ease;
      }
      
      .card:hover {
        transform: ${theme.cards.hoverTransform};
        box-shadow: var(--shadow-xl);
      }
      
      .nav-${theme.layout.navPosition} {
        position: ${theme.layout.navPosition};
        top: 0;
        width: 100%;
        z-index: 50;
      }
    </style>
  `
}

/**
 * Generate Tailwind config override script
 */
export function generateTailwindConfig(): string {
  const { theme } = siteConfig
  
  return `
    <script>
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              primary: '${theme.colors.primary}',
              'primary-dark': '${theme.colors.primaryDark}',
              secondary: '${theme.colors.secondary}',
              success: '${theme.colors.success}',
              error: '${theme.colors.error}',
              warning: '${theme.colors.warning}',
            },
            fontFamily: {
              sans: [${theme.fonts.primary.split(',').map((f: string) => `'${f.trim()}'`).join(', ')}],
              heading: [${theme.fonts.heading.split(',').map((f: string) => `'${f.trim()}'`).join(', ')}],
              mono: [${theme.fonts.mono.split(',').map((f: string) => `'${f.trim()}'`).join(', ')}],
            },
            borderRadius: {
              'sm': '${theme.borderRadius.sm}',
              'md': '${theme.borderRadius.md}',
              'lg': '${theme.borderRadius.lg}',
              'xl': '${theme.borderRadius.xl}',
              '2xl': '${theme.borderRadius["2xl"]}',
            },
            boxShadow: {
              'sm': '${theme.shadows.sm}',
              'md': '${theme.shadows.md}',
              'lg': '${theme.shadows.lg}',
              'xl': '${theme.shadows.xl}',
            },
          }
        }
      }
    </script>
  `
}

/**
 * Get font imports for Google Fonts
 */
export function getFontImports(): string {
  const fonts = [
    siteConfig.theme.fonts.primary,
    siteConfig.theme.fonts.heading,
  ].filter((f, i, arr) => arr.indexOf(f) === i) // Remove duplicates
  
  const fontImports = fonts
    .map(font => {
      // Extract font name from font-family string
      const fontName = font.split(',')[0].replace(/['"]/g, '').trim()
      if (fontName === 'sans-serif' || fontName === 'serif' || fontName === 'monospace') {
        return ''
      }
      // Convert to Google Fonts URL format
      const googleFontName = fontName.replace(/ /g, '+')
      return `@import url('https://fonts.googleapis.com/css2?family=${googleFontName}:wght@400;500;600;700;800;900&display=swap');`
    })
    .filter(Boolean)
    .join('\n        ')
  
  return fontImports ? `<style>\n        ${fontImports}\n      </style>` : ''
}
