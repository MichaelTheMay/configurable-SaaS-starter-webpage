// Main application JavaScript
let config = null;
let stripe = null;

// Load configuration on page load
document.addEventListener('DOMContentLoaded', async () => {
  try {
    const response = await axios.get('/api/config');
    config = response.data;
    
    // Initialize Stripe if configured
    if (config.integrations.stripe.publishableKey && config.integrations.stripe.publishableKey !== '{{STRIPE_PUBLISHABLE_KEY}}') {
      stripe = Stripe(config.integrations.stripe.publishableKey);
    }
    
    // Setup lead form handler
    setupLeadForm();
    
    // Setup smooth scrolling
    setupSmoothScrolling();
  } catch (error) {
    console.error('Failed to load config:', error);
  }
});

// Handle subscription checkout
async function handleSubscribe(priceId) {
  if (!stripe) {
    alert('Stripe is not configured. Please set up your Stripe keys in the config file and add STRIPE_SECRET_KEY to your environment.');
    return;
  }
  
  try {
    // Get user email (from form or prompt)
    const email = prompt('Please enter your email address:');
    if (!email) return;
    
    // Create checkout session
    const response = await axios.post('/api/stripe/create-checkout-session', {
      priceId: priceId,
      email: email
    });
    
    // Redirect to Stripe Checkout
    const { error } = await stripe.redirectToCheckout({
      sessionId: response.data.sessionId
    });
    
    if (error) {
      alert('Failed to start checkout: ' + error.message);
    }
  } catch (error) {
    console.error('Subscription error:', error);
    alert('Failed to process subscription. Please try again.');
  }
}

// Setup lead form submission
function setupLeadForm() {
  const form = document.getElementById('leadForm');
  if (!form) return;
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitButton = form.querySelector('button[type="submit"]');
    const messageDiv = document.getElementById('formMessage');
    const originalButtonText = submitButton.textContent;
    
    // Disable button and show loading
    submitButton.disabled = true;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';
    
    // Collect form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    try {
      const response = await axios.post('/api/leads', data);
      
      // Show success message
      messageDiv.className = 'mt-4 text-center text-green-600 font-semibold';
      messageDiv.textContent = response.data.message;
      messageDiv.classList.remove('hidden');
      
      // Reset form
      form.reset();
      
      // Track conversion (if analytics enabled)
      if (typeof gtag !== 'undefined') {
        gtag('event', 'generate_lead', {
          event_category: 'Lead',
          event_label: 'Contact Form'
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      messageDiv.className = 'mt-4 text-center text-red-600 font-semibold';
      messageDiv.textContent = 'Failed to submit form. Please try again.';
      messageDiv.classList.remove('hidden');
    } finally {
      // Re-enable button
      submitButton.disabled = false;
      submitButton.textContent = originalButtonText;
      
      // Hide message after 5 seconds
      setTimeout(() => {
        messageDiv.classList.add('hidden');
      }, 5000);
    }
  });
}

// Setup smooth scrolling for anchor links
function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offset = 80; // Account for fixed header
        const targetPosition = target.offsetTop - offset;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Mobile menu toggle (if needed)
function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenu) {
    mobileMenu.classList.toggle('hidden');
  }
}
