import { siteConfig } from '../config'
import { generateThemeCSS, generateTailwindConfig, getFontImports } from './theme'

/**
 * Render a custom page based on config
 */
export function renderCustomPage(path: string): string | null {
  const page = siteConfig.pages.find(p => p.path === path)
  if (!page) return null
  
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${page.title} - ${siteConfig.company.name}</title>
        <meta name="description" content="${siteConfig.seo.description}">
        <link rel="icon" href="${siteConfig.company.favicon}">
        
        ${getFontImports()}
        <script src="https://cdn.tailwindcss.com"></script>
        ${generateTailwindConfig()}
        ${generateThemeCSS()}
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <link href="/static/styles.css" rel="stylesheet">
    </head>
    <body>
        ${renderNavigation()}
        
        <!-- Page Hero -->
        <section class="gradient-bg text-white pt-32 pb-20">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 class="text-5xl font-bold mb-4">${page.content.hero.title}</h1>
                <p class="text-xl text-purple-100">${page.content.hero.subtitle}</p>
            </div>
        </section>
        
        <!-- Page Content -->
        <section class="py-20 bg-white">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                ${renderPageContent(page)}
            </div>
        </section>
        
        ${renderFooter()}
    </body>
    </html>
  `
}

/**
 * Render page content based on type
 */
function renderPageContent(page: any): string {
  if (page.content.type === 'blog_list') {
    return renderBlogList()
  }
  
  if (page.content.type === 'contact_form') {
    return renderContactForm()
  }
  
  // Render sections
  if (!page.content.sections) return ''
  
  return page.content.sections.map((section: any) => {
    switch (section.type) {
      case 'text':
        return `
          <div class="mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">${section.title}</h2>
            <div class="prose prose-lg max-w-none text-gray-700">
              ${section.content.split('\n').map((p: string) => `<p class="mb-4">${p}</p>`).join('')}
            </div>
          </div>
        `
      
      case 'team':
        return `
          <div class="mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">${section.title}</h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              ${section.members.map((member: any) => `
                <div class="card text-center">
                  <img src="${member.image}" alt="${member.name}" 
                       class="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                       onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&size=128'">
                  <h3 class="text-xl font-bold text-gray-900 mb-1">${member.name}</h3>
                  <p class="text-primary font-semibold mb-2">${member.role}</p>
                  <p class="text-gray-600 mb-4">${member.bio}</p>
                  <div class="flex justify-center space-x-4">
                    ${member.social.linkedin ? `<a href="${member.social.linkedin}" class="text-gray-400 hover:text-primary"><i class="fab fa-linkedin"></i></a>` : ''}
                    ${member.social.twitter ? `<a href="${member.social.twitter}" class="text-gray-400 hover:text-primary"><i class="fab fa-twitter"></i></a>` : ''}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `
      
      default:
        return ''
    }
  }).join('')
}

/**
 * Render blog list page
 */
function renderBlogList(): string {
  return `
    <div class="text-center py-12">
      <i class="fas fa-blog text-6xl text-primary mb-4"></i>
      <h2 class="text-3xl font-bold text-gray-900 mb-4">Blog Coming Soon</h2>
      <p class="text-xl text-gray-600">We're working on bringing you great content. Stay tuned!</p>
    </div>
  `
}

/**
 * Render contact form
 */
function renderContactForm(): string {
  return `
    <div class="max-w-2xl mx-auto">
      <form id="contactForm" class="card">
        ${siteConfig.leadForm.fields.map(field => {
          if (field.type === 'select') {
            return `
              <div class="mb-6">
                  <label class="block text-gray-700 font-semibold mb-2">${field.label}${field.required ? ' *' : ''}</label>
                  <select name="${field.name}" ${field.required ? 'required' : ''} 
                          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                      <option value="">Select ${field.label}</option>
                      ${field.options?.map(opt => `<option value="${opt.value}">${opt.label}</option>`).join('')}
                  </select>
              </div>
            `
          } else if (field.type === 'textarea') {
            return `
              <div class="mb-6">
                  <label class="block text-gray-700 font-semibold mb-2">${field.label}${field.required ? ' *' : ''}</label>
                  <textarea name="${field.name}" ${field.required ? 'required' : ''} rows="4" 
                            placeholder="${field.placeholder}" 
                            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"></textarea>
              </div>
            `
          } else {
            return `
              <div class="mb-6">
                  <label class="block text-gray-700 font-semibold mb-2">${field.label}${field.required ? ' *' : ''}</label>
                  <input type="${field.type}" name="${field.name}" ${field.required ? 'required' : ''} 
                         placeholder="${field.placeholder}" 
                         class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
              </div>
            `
          }
        }).join('')}
        <button type="submit" class="w-full btn-primary">
            ${siteConfig.leadForm.submitButton}
        </button>
        <div id="formMessage" class="mt-4 text-center hidden"></div>
      </form>
    </div>
    <script src="/static/app.js"></script>
  `
}

/**
 * Render navigation (shared across all pages)
 */
export function renderNavigation(): string {
  const menuPages = siteConfig.pages.filter(p => p.inMenu)
  
  return `
    <nav class="bg-white shadow-sm nav-${siteConfig.theme.layout.navPosition} top-0 z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16 items-center">
                <div class="flex items-center">
                    <img src="${siteConfig.company.logo}" alt="${siteConfig.company.name}" 
                         class="h-8 w-auto mr-2"
                         onerror="this.style.display='none'">
                    <span class="text-xl font-bold text-gray-800">${siteConfig.company.name}</span>
                </div>
                <div class="hidden md:flex space-x-8">
                    <a href="/" class="text-gray-600 hover:text-gray-900">Home</a>
                    <a href="/#features" class="text-gray-600 hover:text-gray-900">Features</a>
                    <a href="/#pricing" class="text-gray-600 hover:text-gray-900">Pricing</a>
                    ${menuPages.map(page => 
                      `<a href="${page.path}" class="text-gray-600 hover:text-gray-900">${page.title}</a>`
                    ).join('')}
                </div>
                <div class="flex space-x-4">
                    <a href="/login" class="text-gray-600 hover:text-gray-900">Login</a>
                    <a href="/signup" class="btn-primary">Sign Up</a>
                </div>
            </div>
        </div>
    </nav>
  `
}

/**
 * Render footer (shared across all pages)
 */
export function renderFooter(): string {
  return `
    <footer class="bg-gray-900 text-white py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-4 gap-8 mb-8">
                <div>
                    <div class="flex items-center mb-4">
                        <img src="${siteConfig.company.logo}" alt="${siteConfig.company.name}" 
                             class="h-8 w-auto mr-2 brightness-0 invert"
                             onerror="this.style.display='none'">
                        <span class="text-xl font-bold">${siteConfig.company.name}</span>
                    </div>
                    <p class="text-gray-400 mb-4">${siteConfig.company.tagline}</p>
                    <div class="flex space-x-4">
                        ${siteConfig.social.twitter ? `<a href="${siteConfig.social.twitter}" class="text-gray-400 hover:text-white"><i class="fab fa-twitter"></i></a>` : ''}
                        ${siteConfig.social.facebook ? `<a href="${siteConfig.social.facebook}" class="text-gray-400 hover:text-white"><i class="fab fa-facebook"></i></a>` : ''}
                        ${siteConfig.social.linkedin ? `<a href="${siteConfig.social.linkedin}" class="text-gray-400 hover:text-white"><i class="fab fa-linkedin"></i></a>` : ''}
                        ${siteConfig.social.github ? `<a href="${siteConfig.social.github}" class="text-gray-400 hover:text-white"><i class="fab fa-github"></i></a>` : ''}
                    </div>
                </div>
                ${siteConfig.footer.columns.map(column => `
                    <div>
                        <h3 class="font-semibold mb-4">${column.title}</h3>
                        <ul class="space-y-2">
                            ${column.links.map(link => `
                                <li><a href="${link.url}" class="text-gray-400 hover:text-white">${link.text}</a></li>
                            `).join('')}
                        </ul>
                    </div>
                `).join('')}
            </div>
            <div class="border-t border-gray-800 pt-8 text-center text-gray-400">
                <p>${siteConfig.footer.copyright}</p>
            </div>
        </div>
    </footer>
  `
}
