import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'
import { siteConfig } from '../config'

type Bindings = {
  DB?: D1Database;
  STRIPE_SECRET_KEY?: string;
  RESEND_API_KEY?: string;
  JWT_SECRET?: string;
}

const app = new Hono<{ Bindings: Bindings }>()

// Enable CORS for API routes
app.use('/api/*', cors())

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))

// ==================== MAIN PAGE ====================
app.get('/', (c) => {
  return c.html(renderHomePage())
})

// ==================== AUTH ROUTES ====================
app.get('/login', (c) => {
  return c.html(renderLoginPage())
})

app.get('/signup', (c) => {
  return c.html(renderSignupPage())
})

app.post('/api/auth/signup', async (c) => {
  const { email, password, name } = await c.req.json()
  
  // TODO: Implement user creation logic with password hashing
  // For now, return mock response
  
  return c.json({ 
    success: true, 
    message: 'Account created successfully',
    userId: 'user_' + Date.now()
  })
})

app.post('/api/auth/login', async (c) => {
  const { email, password } = await c.req.json()
  
  // TODO: Implement authentication logic
  // For now, return mock response
  
  return c.json({ 
    success: true, 
    token: 'jwt_token_here',
    user: { email, name: 'User' }
  })
})

app.post('/api/auth/google', async (c) => {
  const { credential } = await c.req.json()
  
  // TODO: Verify Google JWT and create/login user
  
  return c.json({ 
    success: true, 
    message: 'Google authentication successful' 
  })
})

app.post('/api/auth/github', async (c) => {
  const { code } = await c.req.json()
  
  // TODO: Exchange GitHub code for token and create/login user
  
  return c.json({ 
    success: true, 
    message: 'GitHub authentication successful' 
  })
})

// ==================== STRIPE ROUTES ====================
app.post('/api/stripe/create-checkout-session', async (c) => {
  const { priceId, email } = await c.req.json()
  const stripeKey = c.env.STRIPE_SECRET_KEY
  
  if (!stripeKey) {
    return c.json({ error: 'Stripe not configured' }, 500)
  }
  
  try {
    // Create Stripe checkout session
    const response = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${stripeKey}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        'success_url': `${c.req.url.split('/api')[0]}/success?session_id={CHECKOUT_SESSION_ID}`,
        'cancel_url': `${c.req.url.split('/api')[0]}/#pricing`,
        'mode': 'subscription',
        'line_items[0][price]': priceId,
        'line_items[0][quantity]': '1',
        'customer_email': email,
      }),
    })
    
    const session = await response.json()
    
    return c.json({ sessionId: session.id, url: session.url })
  } catch (error) {
    return c.json({ error: 'Failed to create checkout session' }, 500)
  }
})

app.post('/api/stripe/webhook', async (c) => {
  // TODO: Implement Stripe webhook handler
  // Verify webhook signature and process events
  
  return c.json({ received: true })
})

// ==================== LEAD GENERATION ====================
app.post('/api/leads', async (c) => {
  const formData = await c.req.json()
  const resendKey = c.env.RESEND_API_KEY
  
  // TODO: Save to database if DB binding exists
  if (c.env.DB) {
    try {
      await c.env.DB.prepare(`
        INSERT INTO leads (name, email, company, phone, company_size, message, created_at)
        VALUES (?, ?, ?, ?, ?, ?, datetime('now'))
      `).bind(
        formData.name,
        formData.email,
        formData.company,
        formData.phone || null,
        formData.company_size,
        formData.message || null
      ).run()
    } catch (error) {
      console.error('Database error:', error)
    }
  }
  
  // Send notification email
  if (resendKey) {
    try {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: siteConfig.integrations.email.fromEmail,
          to: siteConfig.integrations.email.notificationEmail,
          subject: `New Lead: ${formData.name} from ${formData.company}`,
          html: `
            <h2>New Lead Submission</h2>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Company:</strong> ${formData.company}</p>
            <p><strong>Phone:</strong> ${formData.phone || 'N/A'}</p>
            <p><strong>Company Size:</strong> ${formData.company_size}</p>
            <p><strong>Message:</strong> ${formData.message || 'N/A'}</p>
          `,
        }),
      })
    } catch (error) {
      console.error('Email error:', error)
    }
  }
  
  return c.json({ 
    success: true, 
    message: siteConfig.leadForm.successMessage 
  })
})

// ==================== CONFIG API ====================
app.get('/api/config', (c) => {
  // Return public configuration (exclude sensitive keys)
  return c.json({
    company: siteConfig.company,
    hero: siteConfig.hero,
    features: siteConfig.features,
    pricing: siteConfig.pricing,
    testimonials: siteConfig.testimonials,
    social: siteConfig.social,
    cta: siteConfig.cta,
    leadForm: siteConfig.leadForm,
    auth: {
      providers: {
        google: { enabled: siteConfig.auth.providers.google.enabled },
        github: { enabled: siteConfig.auth.providers.github.enabled },
        email: { enabled: siteConfig.auth.providers.email.enabled },
      }
    },
    integrations: {
      stripe: {
        publishableKey: siteConfig.integrations.stripe.publishableKey
      }
    }
  })
})

// ==================== HTML RENDERERS ====================
function renderHomePage() {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${siteConfig.seo.title}</title>
        <meta name="description" content="${siteConfig.seo.description}">
        <meta name="keywords" content="${siteConfig.seo.keywords}">
        <meta property="og:image" content="${siteConfig.seo.ogImage}">
        <link rel="icon" href="${siteConfig.company.favicon}">
        
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
        <script src="https://js.stripe.com/v3/"></script>
        
        <style>
          .gradient-bg {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          }
          .glass-effect {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
          }
        </style>
    </head>
    <body class="bg-gray-50">
        <!-- Navigation -->
        <nav class="bg-white shadow-sm fixed w-full top-0 z-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16 items-center">
                    <div class="flex items-center">
                        <img src="${siteConfig.company.logo}" alt="${siteConfig.company.name}" class="h-8 w-auto mr-2">
                        <span class="text-xl font-bold text-gray-800">${siteConfig.company.name}</span>
                    </div>
                    <div class="hidden md:flex space-x-8">
                        <a href="#features" class="text-gray-600 hover:text-gray-900">Features</a>
                        <a href="#pricing" class="text-gray-600 hover:text-gray-900">Pricing</a>
                        <a href="#testimonials" class="text-gray-600 hover:text-gray-900">Testimonials</a>
                        <a href="#contact" class="text-gray-600 hover:text-gray-900">Contact</a>
                    </div>
                    <div class="flex space-x-4">
                        <a href="/login" class="text-gray-600 hover:text-gray-900">Login</a>
                        <a href="/signup" class="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">Sign Up</a>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Hero Section -->
        <section class="gradient-bg text-white pt-32 pb-20">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 class="text-5xl md:text-6xl font-bold mb-6">${siteConfig.hero.headline}</h1>
                <p class="text-xl md:text-2xl mb-8 text-purple-100">${siteConfig.hero.subheadline}</p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="${siteConfig.hero.ctaButton.link}" class="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition">
                        ${siteConfig.hero.ctaButton.text}
                    </a>
                    <a href="${siteConfig.hero.secondaryButton.link}" class="glass-effect text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:bg-opacity-20 transition">
                        ${siteConfig.hero.secondaryButton.text}
                    </a>
                </div>
            </div>
        </section>

        <!-- Features Section -->
        <section id="features" class="py-20 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-4xl font-bold text-gray-900 mb-4">Features</h2>
                    <p class="text-xl text-gray-600">Everything you need to succeed</p>
                </div>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    ${siteConfig.features.map(feature => `
                        <div class="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition">
                            <i class="${feature.icon} text-4xl text-purple-600 mb-4"></i>
                            <h3 class="text-xl font-bold text-gray-900 mb-2">${feature.title}</h3>
                            <p class="text-gray-600">${feature.description}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <!-- Pricing Section -->
        <section id="pricing" class="py-20 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-4xl font-bold text-gray-900 mb-4">${siteConfig.pricing.title}</h2>
                    <p class="text-xl text-gray-600">${siteConfig.pricing.subtitle}</p>
                </div>
                <div class="grid md:grid-cols-3 gap-8">
                    ${siteConfig.pricing.plans.map(plan => `
                        <div class="bg-white rounded-xl shadow-lg p-8 ${plan.highlighted ? 'ring-4 ring-purple-600 transform scale-105' : ''}">
                            ${plan.highlighted ? '<div class="bg-purple-600 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">Most Popular</div>' : ''}
                            <h3 class="text-2xl font-bold text-gray-900 mb-2">${plan.name}</h3>
                            <p class="text-gray-600 mb-4">${plan.description}</p>
                            <div class="mb-6">
                                <span class="text-5xl font-bold text-gray-900">${plan.price}</span>
                                <span class="text-gray-600">/${plan.period}</span>
                            </div>
                            <button onclick="handleSubscribe('${plan.stripePriceId}')" class="w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition mb-6">
                                Get Started
                            </button>
                            <ul class="space-y-3">
                                ${plan.features.map(feature => `
                                    <li class="flex items-start">
                                        <i class="fas fa-check text-green-500 mr-2 mt-1"></i>
                                        <span class="text-gray-700">${feature}</span>
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <!-- Testimonials Section -->
        <section id="testimonials" class="py-20 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
                    <p class="text-xl text-gray-600">Trusted by thousands of companies worldwide</p>
                </div>
                <div class="grid md:grid-cols-3 gap-8">
                    ${siteConfig.testimonials.map(testimonial => `
                        <div class="bg-gray-50 p-8 rounded-xl">
                            <div class="flex items-center mb-4">
                                ${Array(testimonial.rating).fill('<i class="fas fa-star text-yellow-400"></i>').join('')}
                            </div>
                            <p class="text-gray-700 mb-6 italic">"${testimonial.content}"</p>
                            <div class="flex items-center">
                                <img src="${testimonial.avatar}" alt="${testimonial.name}" class="w-12 h-12 rounded-full mr-4" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}'">
                                <div>
                                    <div class="font-semibold text-gray-900">${testimonial.name}</div>
                                    <div class="text-gray-600 text-sm">${testimonial.role} at ${testimonial.company}</div>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <!-- Lead Form Section -->
        <section id="contact" class="py-20 bg-gray-50">
            <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12">
                    <h2 class="text-4xl font-bold text-gray-900 mb-4">${siteConfig.leadForm.title}</h2>
                    <p class="text-xl text-gray-600">${siteConfig.leadForm.subtitle}</p>
                </div>
                <form id="leadForm" class="bg-white p-8 rounded-xl shadow-lg">
                    ${siteConfig.leadForm.fields.map(field => {
                      if (field.type === 'select') {
                        return `
                          <div class="mb-6">
                              <label class="block text-gray-700 font-semibold mb-2">${field.label}${field.required ? ' *' : ''}</label>
                              <select name="${field.name}" ${field.required ? 'required' : ''} class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                                  <option value="">Select ${field.label}</option>
                                  ${field.options?.map(opt => `<option value="${opt.value}">${opt.label}</option>`).join('')}
                              </select>
                          </div>
                        `
                      } else if (field.type === 'textarea') {
                        return `
                          <div class="mb-6">
                              <label class="block text-gray-700 font-semibold mb-2">${field.label}${field.required ? ' *' : ''}</label>
                              <textarea name="${field.name}" ${field.required ? 'required' : ''} rows="4" placeholder="${field.placeholder}" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"></textarea>
                          </div>
                        `
                      } else {
                        return `
                          <div class="mb-6">
                              <label class="block text-gray-700 font-semibold mb-2">${field.label}${field.required ? ' *' : ''}</label>
                              <input type="${field.type}" name="${field.name}" ${field.required ? 'required' : ''} placeholder="${field.placeholder}" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                          </div>
                        `
                      }
                    }).join('')}
                    <button type="submit" class="w-full bg-purple-600 text-white px-6 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition">
                        ${siteConfig.leadForm.submitButton}
                    </button>
                    <div id="formMessage" class="mt-4 text-center hidden"></div>
                </form>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="gradient-bg text-white py-20">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 class="text-4xl font-bold mb-4">${siteConfig.cta.title}</h2>
                <p class="text-xl mb-8 text-purple-100">${siteConfig.cta.subtitle}</p>
                <a href="${siteConfig.cta.buttonLink}" class="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold inline-block hover:bg-gray-100 transition">
                    ${siteConfig.cta.buttonText}
                </a>
            </div>
        </section>

        <!-- Footer -->
        <footer class="bg-gray-900 text-white py-12">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <div class="flex items-center mb-4">
                            <img src="${siteConfig.company.logo}" alt="${siteConfig.company.name}" class="h-8 w-auto mr-2 brightness-0 invert">
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

        <script src="/static/app.js"></script>
    </body>
    </html>
  `
}

function renderLoginPage() {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Login - ${siteConfig.company.name}</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
        <script src="https://accounts.google.com/gsi/client" async defer></script>
    </head>
    <body class="bg-gray-50">
        <div class="min-h-screen flex items-center justify-center px-4">
            <div class="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
                <div class="text-center mb-8">
                    <h1 class="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
                    <p class="text-gray-600">Sign in to your account</p>
                </div>

                <!-- Social Login -->
                <div class="space-y-3 mb-6">
                    ${siteConfig.auth.providers.google.enabled ? `
                    <button onclick="handleGoogleLogin()" class="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                        <i class="fab fa-google text-red-500 mr-2"></i>
                        Continue with Google
                    </button>
                    ` : ''}
                    ${siteConfig.auth.providers.github.enabled ? `
                    <button onclick="handleGithubLogin()" class="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                        <i class="fab fa-github mr-2"></i>
                        Continue with GitHub
                    </button>
                    ` : ''}
                </div>

                <div class="relative mb-6">
                    <div class="absolute inset-0 flex items-center">
                        <div class="w-full border-t border-gray-300"></div>
                    </div>
                    <div class="relative flex justify-center text-sm">
                        <span class="px-2 bg-white text-gray-500">Or continue with email</span>
                    </div>
                </div>

                <!-- Email Login Form -->
                <form id="loginForm" class="space-y-4">
                    <div>
                        <label class="block text-gray-700 font-semibold mb-2">Email</label>
                        <input type="email" name="email" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                    </div>
                    <div>
                        <label class="block text-gray-700 font-semibold mb-2">Password</label>
                        <input type="password" name="password" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                    </div>
                    <div class="flex items-center justify-between">
                        <label class="flex items-center">
                            <input type="checkbox" class="rounded text-purple-600">
                            <span class="ml-2 text-sm text-gray-600">Remember me</span>
                        </label>
                        <a href="/forgot-password" class="text-sm text-purple-600 hover:text-purple-700">Forgot password?</a>
                    </div>
                    <button type="submit" class="w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition">
                        Sign In
                    </button>
                </form>

                <p class="mt-6 text-center text-gray-600">
                    Don't have an account? <a href="/signup" class="text-purple-600 hover:text-purple-700 font-semibold">Sign up</a>
                </p>
            </div>
        </div>

        <script src="/static/auth.js"></script>
    </body>
    </html>
  `
}

function renderSignupPage() {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Sign Up - ${siteConfig.company.name}</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
        <script src="https://accounts.google.com/gsi/client" async defer></script>
    </head>
    <body class="bg-gray-50">
        <div class="min-h-screen flex items-center justify-center px-4 py-8">
            <div class="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
                <div class="text-center mb-8">
                    <h1 class="text-3xl font-bold text-gray-900 mb-2">Get Started</h1>
                    <p class="text-gray-600">Create your account</p>
                </div>

                <!-- Social Signup -->
                <div class="space-y-3 mb-6">
                    ${siteConfig.auth.providers.google.enabled ? `
                    <button onclick="handleGoogleLogin()" class="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                        <i class="fab fa-google text-red-500 mr-2"></i>
                        Continue with Google
                    </button>
                    ` : ''}
                    ${siteConfig.auth.providers.github.enabled ? `
                    <button onclick="handleGithubLogin()" class="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                        <i class="fab fa-github mr-2"></i>
                        Continue with GitHub
                    </button>
                    ` : ''}
                </div>

                <div class="relative mb-6">
                    <div class="absolute inset-0 flex items-center">
                        <div class="w-full border-t border-gray-300"></div>
                    </div>
                    <div class="relative flex justify-center text-sm">
                        <span class="px-2 bg-white text-gray-500">Or sign up with email</span>
                    </div>
                </div>

                <!-- Email Signup Form -->
                <form id="signupForm" class="space-y-4">
                    <div>
                        <label class="block text-gray-700 font-semibold mb-2">Full Name</label>
                        <input type="text" name="name" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                    </div>
                    <div>
                        <label class="block text-gray-700 font-semibold mb-2">Email</label>
                        <input type="email" name="email" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                    </div>
                    <div>
                        <label class="block text-gray-700 font-semibold mb-2">Password</label>
                        <input type="password" name="password" required minlength="8" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                        <p class="text-sm text-gray-500 mt-1">At least 8 characters</p>
                    </div>
                    <div>
                        <label class="flex items-start">
                            <input type="checkbox" required class="rounded text-purple-600 mt-1">
                            <span class="ml-2 text-sm text-gray-600">
                                I agree to the <a href="/terms" class="text-purple-600 hover:text-purple-700">Terms of Service</a> and <a href="/privacy" class="text-purple-600 hover:text-purple-700">Privacy Policy</a>
                            </span>
                        </label>
                    </div>
                    <button type="submit" class="w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition">
                        Create Account
                    </button>
                </form>

                <p class="mt-6 text-center text-gray-600">
                    Already have an account? <a href="/login" class="text-purple-600 hover:text-purple-700 font-semibold">Sign in</a>
                </p>
            </div>
        </div>

        <script src="/static/auth.js"></script>
    </body>
    </html>
  `
}

export default app
