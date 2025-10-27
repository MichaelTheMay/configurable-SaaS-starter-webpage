import { siteConfig } from '../config'

/**
 * Generate comprehensive CSS custom properties from theme config
 */
export function generateThemeCSS(): string {
  const { theme } = siteConfig
  
  return `
    <style>
      :root {
        /* ===== Colors ===== */
        --color-primary: ${theme.colors.primary};
        --color-primary-dark: ${theme.colors.primaryDark};
        --color-primary-light: ${theme.colors.primaryLight};
        --color-secondary: ${theme.colors.secondary};
        --color-secondary-dark: ${theme.colors.secondaryDark};
        --color-secondary-light: ${theme.colors.secondaryLight};
        --color-accent: ${theme.colors.accent};
        --color-success: ${theme.colors.success};
        --color-error: ${theme.colors.error};
        --color-warning: ${theme.colors.warning};
        --color-info: ${theme.colors.info};
        --color-background: ${theme.colors.background};
        --color-background-dark: ${theme.colors.backgroundDark};
        --color-surface: ${theme.colors.surface};
        --color-surface-hover: ${theme.colors.surfaceHover};
        --color-border: ${theme.colors.border};
        --color-border-dark: ${theme.colors.borderDark};
        --color-text-primary: ${theme.colors.text.primary};
        --color-text-secondary: ${theme.colors.text.secondary};
        --color-text-light: ${theme.colors.text.light};
        --color-text-inverse: ${theme.colors.text.inverse};
        
        /* ===== Fonts ===== */
        --font-primary: ${theme.fonts.primary};
        --font-heading: ${theme.fonts.heading};
        --font-mono: ${theme.fonts.mono};
        
        /* ===== Font Sizes ===== */
        --font-size-xs: ${theme.fontSize.xs};
        --font-size-sm: ${theme.fontSize.sm};
        --font-size-base: ${theme.fontSize.base};
        --font-size-lg: ${theme.fontSize.lg};
        --font-size-xl: ${theme.fontSize.xl};
        --font-size-2xl: ${theme.fontSize["2xl"]};
        --font-size-3xl: ${theme.fontSize["3xl"]};
        --font-size-4xl: ${theme.fontSize["4xl"]};
        --font-size-5xl: ${theme.fontSize["5xl"]};
        --font-size-6xl: ${theme.fontSize["6xl"]};
        --font-size-7xl: ${theme.fontSize["7xl"]};
        --font-size-8xl: ${theme.fontSize["8xl"]};
        --font-size-9xl: ${theme.fontSize["9xl"]};
        
        /* ===== Font Weights ===== */
        --font-weight-thin: ${theme.fontWeight.thin};
        --font-weight-extralight: ${theme.fontWeight.extralight};
        --font-weight-light: ${theme.fontWeight.light};
        --font-weight-normal: ${theme.fontWeight.normal};
        --font-weight-medium: ${theme.fontWeight.medium};
        --font-weight-semibold: ${theme.fontWeight.semibold};
        --font-weight-bold: ${theme.fontWeight.bold};
        --font-weight-extrabold: ${theme.fontWeight.extrabold};
        --font-weight-black: ${theme.fontWeight.black};
        
        /* ===== Line Heights ===== */
        --line-height-tight: ${theme.lineHeight.tight};
        --line-height-snug: ${theme.lineHeight.snug};
        --line-height-normal: ${theme.lineHeight.normal};
        --line-height-relaxed: ${theme.lineHeight.relaxed};
        --line-height-loose: ${theme.lineHeight.loose};
        
        /* ===== Letter Spacing ===== */
        --letter-spacing-tighter: ${theme.letterSpacing.tighter};
        --letter-spacing-tight: ${theme.letterSpacing.tight};
        --letter-spacing-normal: ${theme.letterSpacing.normal};
        --letter-spacing-wide: ${theme.letterSpacing.wide};
        --letter-spacing-wider: ${theme.letterSpacing.wider};
        --letter-spacing-widest: ${theme.letterSpacing.widest};
        
        /* ===== Layout ===== */
        --max-width: ${theme.layout.maxWidth};
        --container-padding: ${theme.layout.containerPadding};
        --section-spacing: ${theme.layout.sectionSpacing};
        --header-height: ${theme.layout.headerHeight};
        
        /* ===== Border Radius ===== */
        --radius-none: ${theme.borderRadius.none};
        --radius-sm: ${theme.borderRadius.sm};
        --radius-md: ${theme.borderRadius.md};
        --radius-lg: ${theme.borderRadius.lg};
        --radius-xl: ${theme.borderRadius.xl};
        --radius-2xl: ${theme.borderRadius["2xl"]};
        --radius-3xl: ${theme.borderRadius["3xl"]};
        --radius-full: ${theme.borderRadius.full};
        
        /* ===== Shadows ===== */
        --shadow-none: ${theme.shadows.none};
        --shadow-sm: ${theme.shadows.sm};
        --shadow-md: ${theme.shadows.md};
        --shadow-lg: ${theme.shadows.lg};
        --shadow-xl: ${theme.shadows.xl};
        --shadow-2xl: ${theme.shadows["2xl"]};
        --shadow-inner: ${theme.shadows.inner};
        
        /* ===== Spacing ===== */
        --spacing-px: ${theme.spacing.px};
        --spacing-0: ${theme.spacing["0"]};
        --spacing-1: ${theme.spacing["1"]};
        --spacing-2: ${theme.spacing["2"]};
        --spacing-3: ${theme.spacing["3"]};
        --spacing-4: ${theme.spacing["4"]};
        --spacing-5: ${theme.spacing["5"]};
        --spacing-6: ${theme.spacing["6"]};
        --spacing-8: ${theme.spacing["8"]};
        --spacing-10: ${theme.spacing["10"]};
        --spacing-12: ${theme.spacing["12"]};
        --spacing-16: ${theme.spacing["16"]};
        --spacing-20: ${theme.spacing["20"]};
        --spacing-24: ${theme.spacing["24"]};
        --spacing-32: ${theme.spacing["32"]};
        
        /* ===== Animations ===== */
        --animation-duration-fast: ${theme.animations.duration.fast};
        --animation-duration-normal: ${theme.animations.duration.normal};
        --animation-duration-slow: ${theme.animations.duration.slow};
        --animation-timing: ${theme.animations.timing};
        --animation-hover-scale: ${theme.animations.hoverScale};
        --animation-hover-translate-y: ${theme.animations.hoverTranslateY};
      }
      
      /* ===== Global Styles ===== */
      * {
        box-sizing: border-box;
      }
      
      body {
        font-family: var(--font-primary);
        background-color: var(--color-background);
        color: var(--color-text-primary);
        line-height: var(--line-height-normal);
        font-size: var(--font-size-base);
        margin: 0;
        padding: 0;
      }
      
      h1, h2, h3, h4, h5, h6 {
        font-family: var(--font-heading);
        font-weight: var(--font-weight-bold);
        line-height: var(--line-height-tight);
        margin: 0;
      }
      
      h1 { font-size: var(--font-size-5xl); }
      h2 { font-size: var(--font-size-4xl); }
      h3 { font-size: var(--font-size-3xl); }
      h4 { font-size: var(--font-size-2xl); }
      h5 { font-size: var(--font-size-xl); }
      h6 { font-size: var(--font-size-lg); }
      
      p {
        margin: 0;
        line-height: var(--line-height-relaxed);
      }
      
      a {
        color: var(--color-primary);
        text-decoration: none;
        transition: color var(--animation-duration-normal) var(--animation-timing);
      }
      
      a:hover {
        color: var(--color-primary-dark);
      }
      
      /* ===== Gradient Background ===== */
      .gradient-bg {
        background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
      }
      
      /* ===== Button Variants ===== */
      ${generateButtonStyles('primary', theme.buttons.primary)}
      ${generateButtonStyles('secondary', theme.buttons.secondary)}
      ${generateButtonStyles('ghost', theme.buttons.ghost)}
      ${generateButtonStyles('gradient', theme.buttons.gradient)}
      ${generateButtonStyles('small', theme.buttons.small)}
      ${generateButtonStyles('large', theme.buttons.large)}
      
      /* ===== Card Variants ===== */
      ${generateCardStyles('default', theme.cards.default)}
      ${generateCardStyles('flat', theme.cards.flat)}
      ${generateCardStyles('elevated', theme.cards.elevated)}
      ${generateCardStyles('outlined', theme.cards.outlined)}
      ${generateCardStyles('gradient', theme.cards.gradient)}
      
      /* Generic card class for backward compatibility */
      .card {
        ${getCardCSS(theme.cards.default)}
      }
      
      /* ===== Navigation Bar ===== */
      .navbar {
        background-color: var(--color-${theme.components.navbar.background});
        border-bottom: ${theme.components.navbar.borderBottom};
        border-color: var(--color-${theme.components.navbar.borderColor});
        box-shadow: var(--shadow-${theme.components.navbar.shadow});
        height: ${theme.components.navbar.height};
        padding: ${theme.components.navbar.padding};
        position: ${theme.layout.navPosition};
        top: 0;
        width: 100%;
        z-index: 50;
      }
      
      .navbar-logo {
        height: ${theme.components.navbar.logoSize};
      }
      
      .navbar-link {
        color: var(--color-${theme.components.navbar.linkColor.replace('.', '-')});
        margin: 0 ${theme.components.navbar.linkSpacing};
        transition: color var(--animation-duration-normal) var(--animation-timing);
      }
      
      .navbar-link:hover {
        color: var(--color-${theme.components.navbar.linkHoverColor});
      }
      
      /* ===== Footer ===== */
      .footer {
        background-color: var(--color-${theme.components.footer.background});
        color: var(--color-${theme.components.footer.textColor.replace('.', '-')});
        padding: ${theme.components.footer.padding};
        border-top: ${theme.components.footer.borderTop};
        border-color: var(--color-${theme.components.footer.borderColor});
      }
      
      .footer-link {
        color: var(--color-${theme.components.footer.linkColor.replace('.', '-')});
        transition: color var(--animation-duration-normal) var(--animation-timing);
      }
      
      .footer-link:hover {
        color: var(--color-${theme.components.footer.linkHoverColor});
      }
      
      .footer-columns {
        display: grid;
        gap: ${theme.components.footer.columnGap};
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      }
      
      /* ===== Form Elements ===== */
      .form-input,
      .form-textarea,
      .form-select {
        background-color: var(--color-${theme.components.forms.inputBackground});
        border: ${theme.components.forms.inputBorder};
        border-color: var(--color-${theme.components.forms.inputBorderColor});
        border-radius: var(--radius-${theme.components.forms.inputBorderRadius});
        padding: ${theme.components.forms.inputPadding};
        font-family: var(--font-primary);
        font-size: var(--font-size-base);
        color: var(--color-text-primary);
        width: 100%;
        transition: all var(--animation-duration-normal) var(--animation-timing);
      }
      
      .form-input:focus,
      .form-textarea:focus,
      .form-select:focus {
        outline: none;
        border-color: var(--color-${theme.components.forms.inputFocusBorderColor});
        box-shadow: ${theme.components.forms.inputFocusShadow};
      }
      
      .form-label {
        color: var(--color-${theme.components.forms.labelColor.replace('.', '-')});
        font-weight: var(--font-weight-${theme.components.forms.labelFontWeight});
        margin-bottom: ${theme.components.forms.labelMarginBottom};
        display: block;
      }
      
      .form-error {
        color: var(--color-${theme.components.forms.errorColor});
        font-size: var(--font-size-sm);
        margin-top: 0.25rem;
      }
      
      .form-success {
        color: var(--color-${theme.components.forms.successColor});
        font-size: var(--font-size-sm);
        margin-top: 0.25rem;
      }
      
      /* ===== Hero Section ===== */
      .hero-section {
        min-height: ${theme.components.hero.minHeight};
        background: ${theme.components.hero.background};
        color: var(--color-${theme.components.hero.textColor.replace('.', '-')});
        padding: ${theme.components.hero.padding};
        text-align: ${theme.components.hero.alignment};
      }
      
      .hero-headline {
        font-size: var(--font-size-${theme.components.hero.headlineSize});
      }
      
      .hero-subheadline {
        font-size: var(--font-size-${theme.components.hero.subheadlineSize});
      }
      
      /* ===== Feature Cards ===== */
      .features-grid {
        display: grid;
        grid-template-columns: repeat(${theme.components.features.gridColumns}, 1fr);
        gap: ${theme.components.features.gap};
      }
      
      @media (max-width: 1024px) {
        .features-grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }
      
      @media (max-width: 640px) {
        .features-grid {
          grid-template-columns: 1fr;
        }
      }
      
      .feature-icon {
        font-size: ${theme.components.features.iconSize};
        color: var(--color-${theme.components.features.iconColor});
        background-color: ${theme.components.features.iconBackground};
        border-radius: var(--radius-${theme.components.features.iconBorderRadius});
        width: 4rem;
        height: 4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1rem;
      }
      
      .feature-title {
        font-size: var(--font-size-${theme.components.features.titleSize});
        color: var(--color-${theme.components.features.titleColor.replace('.', '-')});
      }
      
      .feature-description {
        color: var(--color-${theme.components.features.descriptionColor.replace('.', '-')});
      }
      
      /* ===== Pricing Cards ===== */
      .pricing-grid {
        display: grid;
        grid-template-columns: repeat(${theme.components.pricing.gridColumns}, 1fr);
        gap: ${theme.components.pricing.gap};
      }
      
      @media (max-width: 1024px) {
        .pricing-grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }
      
      @media (max-width: 640px) {
        .pricing-grid {
          grid-template-columns: 1fr;
        }
      }
      
      .pricing-card-highlighted {
        border: ${theme.components.pricing.highlightBorder};
        border-color: var(--color-${theme.components.pricing.highlightBorderColor});
      }
      
      .pricing-badge {
        background-color: var(--color-${theme.components.pricing.highlightBadgeBackground});
        color: var(--color-${theme.components.pricing.highlightBadgeText.replace('.', '-')});
      }
      
      .pricing-price {
        font-size: var(--font-size-${theme.components.pricing.priceSize});
        color: var(--color-${theme.components.pricing.priceColor.replace('.', '-')});
      }
      
      .pricing-period {
        color: var(--color-${theme.components.pricing.periodColor.replace('.', '-')});
      }
      
      .pricing-feature-icon {
        color: var(--color-${theme.components.pricing.featureIconColor});
      }
      
      /* ===== Testimonials ===== */
      .testimonials-grid {
        display: grid;
        grid-template-columns: repeat(${theme.components.testimonials.gridColumns}, 1fr);
        gap: ${theme.components.testimonials.gap};
      }
      
      @media (max-width: 1024px) {
        .testimonials-grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }
      
      @media (max-width: 640px) {
        .testimonials-grid {
          grid-template-columns: 1fr;
        }
      }
      
      .testimonial-avatar {
        width: ${theme.components.testimonials.avatarSize};
        height: ${theme.components.testimonials.avatarSize};
        border-radius: var(--radius-${theme.components.testimonials.avatarBorderRadius});
      }
      
      .testimonial-name {
        color: var(--color-${theme.components.testimonials.nameColor.replace('.', '-')});
        font-size: var(--font-size-${theme.components.testimonials.nameSize});
      }
      
      .testimonial-role {
        color: var(--color-${theme.components.testimonials.rolColor.replace('.', '-')});
        font-size: var(--font-size-${theme.components.testimonials.roleSize});
      }
      
      .testimonial-quote {
        color: var(--color-${theme.components.testimonials.quoteColor.replace('.', '-')});
        font-size: var(--font-size-${theme.components.testimonials.quoteSize});
      }
      
      .testimonial-rating {
        color: var(--color-${theme.components.testimonials.ratingColor});
      }
      
      /* ===== Container ===== */
      .container {
        max-width: var(--max-width);
        margin: 0 auto;
        padding: 0 var(--container-padding);
      }
      
      /* ===== Section Spacing ===== */
      .section {
        padding: var(--section-spacing) 0;
      }
      
      /* ===== Animation Utilities ===== */
      ${theme.animations.enabled ? `
      .animate-hover {
        transition: transform var(--animation-duration-normal) var(--animation-timing);
      }
      
      .animate-hover:hover {
        transform: translateY(var(--animation-hover-translate-y));
      }
      
      .animate-scale:hover {
        transform: scale(var(--animation-hover-scale));
      }
      ` : ''}
    </style>
  `
}

/**
 * Helper function to generate button styles
 */
function generateButtonStyles(name: string, config: any): string {
  const bg = config.background.startsWith('linear-gradient') 
    ? config.background 
    : `var(--color-${config.background})`;
  
  const hoverBg = config.hoverBackground.startsWith('linear-gradient') || config.hoverBackground.startsWith('rgba')
    ? config.hoverBackground 
    : `var(--color-${config.hoverBackground})`;
  
  return `
      .btn-${name} {
        background: ${bg};
        color: ${config.textColor};
        padding: ${config.padding};
        border-radius: var(--radius-${config.borderRadius});
        font-size: var(--font-size-${config.fontSize});
        font-weight: var(--font-weight-${config.fontWeight});
        border: ${config.border || 'none'};
        ${config.borderColor ? `border-color: var(--color-${config.borderColor});` : ''}
        box-shadow: var(--shadow-${config.shadow});
        cursor: pointer;
        display: inline-block;
        text-align: center;
        transition: all var(--animation-duration-normal) var(--animation-timing);
      }
      
      .btn-${name}:hover {
        background: ${hoverBg};
        box-shadow: var(--shadow-${config.hoverShadow});
        transform: translateY(-2px);
      }
      
      .btn-${name}:active {
        transform: translateY(0);
      }
  `
}

/**
 * Helper function to generate card styles
 */
function generateCardStyles(name: string, config: any): string {
  const bg = config.background.startsWith('linear-gradient') || config.background.startsWith('rgba')
    ? config.background 
    : `var(--color-${config.background})`;
  
  return `
      .card-${name} {
        ${getCardCSS(config, bg)}
      }
      
      .card-${name}:hover {
        transform: ${config.hoverTransform};
        box-shadow: var(--shadow-${config.hoverShadow});
      }
  `
}

/**
 * Helper function to get card CSS properties
 */
function getCardCSS(config: any, bg?: string): string {
  const background = bg || `var(--color-${config.background})`;
  
  return `
        background: ${background};
        padding: ${config.padding};
        border-radius: var(--radius-${config.borderRadius});
        box-shadow: var(--shadow-${config.shadow});
        border: ${config.border};
        border-color: var(--color-${config.borderColor});
        transition: all var(--animation-duration-normal) var(--animation-timing);
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
              'primary-light': '${theme.colors.primaryLight}',
              secondary: '${theme.colors.secondary}',
              'secondary-dark': '${theme.colors.secondaryDark}',
              'secondary-light': '${theme.colors.secondaryLight}',
              accent: '${theme.colors.accent}',
              success: '${theme.colors.success}',
              error: '${theme.colors.error}',
              warning: '${theme.colors.warning}',
              info: '${theme.colors.info}',
            },
            fontFamily: {
              sans: [${theme.fonts.primary.split(',').map((f: string) => `'${f.trim()}'`).join(', ')}],
              heading: [${theme.fonts.heading.split(',').map((f: string) => `'${f.trim()}'`).join(', ')}],
              mono: [${theme.fonts.mono.split(',').map((f: string) => `'${f.trim()}'`).join(', ')}],
            },
            fontSize: {
              'xs': '${theme.fontSize.xs}',
              'sm': '${theme.fontSize.sm}',
              'base': '${theme.fontSize.base}',
              'lg': '${theme.fontSize.lg}',
              'xl': '${theme.fontSize.xl}',
              '2xl': '${theme.fontSize["2xl"]}',
              '3xl': '${theme.fontSize["3xl"]}',
              '4xl': '${theme.fontSize["4xl"]}',
              '5xl': '${theme.fontSize["5xl"]}',
              '6xl': '${theme.fontSize["6xl"]}',
              '7xl': '${theme.fontSize["7xl"]}',
              '8xl': '${theme.fontSize["8xl"]}',
              '9xl': '${theme.fontSize["9xl"]}',
            },
            borderRadius: {
              'none': '${theme.borderRadius.none}',
              'sm': '${theme.borderRadius.sm}',
              'md': '${theme.borderRadius.md}',
              'lg': '${theme.borderRadius.lg}',
              'xl': '${theme.borderRadius.xl}',
              '2xl': '${theme.borderRadius["2xl"]}',
              '3xl': '${theme.borderRadius["3xl"]}',
            },
            boxShadow: {
              'none': '${theme.shadows.none}',
              'sm': '${theme.shadows.sm}',
              'md': '${theme.shadows.md}',
              'lg': '${theme.shadows.lg}',
              'xl': '${theme.shadows.xl}',
              '2xl': '${theme.shadows["2xl"]}',
              'inner': '${theme.shadows.inner}',
            },
            spacing: {
              'px': '${theme.spacing.px}',
              '0': '${theme.spacing["0"]}',
              '0.5': '${theme.spacing["0.5"]}',
              '1': '${theme.spacing["1"]}',
              '1.5': '${theme.spacing["1.5"]}',
              '2': '${theme.spacing["2"]}',
              '2.5': '${theme.spacing["2.5"]}',
              '3': '${theme.spacing["3"]}',
              '3.5': '${theme.spacing["3.5"]}',
              '4': '${theme.spacing["4"]}',
              '5': '${theme.spacing["5"]}',
              '6': '${theme.spacing["6"]}',
              '8': '${theme.spacing["8"]}',
              '10': '${theme.spacing["10"]}',
              '12': '${theme.spacing["12"]}',
              '16': '${theme.spacing["16"]}',
              '20': '${theme.spacing["20"]}',
              '24': '${theme.spacing["24"]}',
              '32': '${theme.spacing["32"]}'
            }
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
      return `@import url('https://fonts.googleapis.com/css2?family=${googleFontName}:wght@100;200;300;400;500;600;700;800;900&display=swap');`
    })
    .filter(Boolean)
    .join('\n        ')
  
  return fontImports ? `<style>\n        ${fontImports}\n      </style>` : ''
}
