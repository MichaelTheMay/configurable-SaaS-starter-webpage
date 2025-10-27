#!/usr/bin/env node

/**
 * Configuration Validation Script
 * 
 * This script checks your config.ts file for missing placeholders
 * and provides a report of what needs to be configured.
 * 
 * Usage: node validate-config.js
 */

import { siteConfig } from './config.ts';

const PLACEHOLDER_PATTERN = /\{\{[A-Z_]+\}\}/g;

let issues = [];
let warnings = [];
let success = [];

console.log('\n🔍 Validating Configuration...\n');

// Helper to check for placeholders
function hasPlaceholder(value) {
  if (typeof value === 'string') {
    return PLACEHOLDER_PATTERN.test(value);
  }
  return false;
}

// Check company info
console.log('📋 Checking Company Information...');
const companyFields = ['name', 'tagline', 'description', 'email', 'phone', 'address'];
companyFields.forEach(field => {
  if (hasPlaceholder(siteConfig.company[field])) {
    issues.push(`❌ Company ${field} is not configured`);
  } else {
    success.push(`✅ Company ${field} configured`);
  }
});

// Check hero section
console.log('🎯 Checking Hero Section...');
const heroFields = ['headline', 'subheadline'];
heroFields.forEach(field => {
  if (hasPlaceholder(siteConfig.hero[field])) {
    issues.push(`❌ Hero ${field} is not configured`);
  } else {
    success.push(`✅ Hero ${field} configured`);
  }
});

if (hasPlaceholder(siteConfig.hero.ctaButton.text)) {
  issues.push(`❌ Hero CTA button text is not configured`);
}

// Check features
console.log('✨ Checking Features...');
let configuredFeatures = 0;
siteConfig.features.forEach((feature, index) => {
  if (!hasPlaceholder(feature.title) && !hasPlaceholder(feature.description)) {
    configuredFeatures++;
  }
});

if (configuredFeatures === 0) {
  issues.push(`❌ No features are configured`);
} else if (configuredFeatures < 3) {
  warnings.push(`⚠️  Only ${configuredFeatures} features configured (recommend 6)`);
} else {
  success.push(`✅ ${configuredFeatures} features configured`);
}

// Check pricing
console.log('💰 Checking Pricing Plans...');
let configuredPlans = 0;
let plansWithStripe = 0;

siteConfig.pricing.plans.forEach((plan, index) => {
  if (!hasPlaceholder(plan.name) && !hasPlaceholder(plan.price)) {
    configuredPlans++;
    if (!hasPlaceholder(plan.stripePriceId)) {
      plansWithStripe++;
    }
  }
});

if (configuredPlans === 0) {
  issues.push(`❌ No pricing plans are configured`);
} else {
  success.push(`✅ ${configuredPlans} pricing plans configured`);
  if (plansWithStripe < configuredPlans) {
    warnings.push(`⚠️  ${configuredPlans - plansWithStripe} plans missing Stripe Price IDs`);
  }
}

// Check testimonials
console.log('💬 Checking Testimonials...');
let configuredTestimonials = 0;
siteConfig.testimonials.forEach(testimonial => {
  if (!hasPlaceholder(testimonial.name) && !hasPlaceholder(testimonial.content)) {
    configuredTestimonials++;
  }
});

if (configuredTestimonials === 0) {
  warnings.push(`⚠️  No testimonials configured (optional but recommended)`);
} else {
  success.push(`✅ ${configuredTestimonials} testimonials configured`);
}

// Check lead form
console.log('📝 Checking Lead Form...');
if (hasPlaceholder(siteConfig.leadForm.title)) {
  warnings.push(`⚠️  Lead form title not configured`);
} else {
  success.push(`✅ Lead form configured`);
}

// Check SEO
console.log('🔍 Checking SEO Settings...');
const seoFields = ['title', 'description', 'keywords'];
seoFields.forEach(field => {
  if (hasPlaceholder(siteConfig.seo[field])) {
    issues.push(`❌ SEO ${field} is not configured`);
  } else {
    success.push(`✅ SEO ${field} configured`);
  }
});

// Check integrations
console.log('🔌 Checking Integrations...');
if (hasPlaceholder(siteConfig.integrations.stripe.publishableKey)) {
  warnings.push(`⚠️  Stripe publishable key not configured`);
} else {
  success.push(`✅ Stripe publishable key configured`);
}

if (hasPlaceholder(siteConfig.integrations.email.fromEmail) || 
    hasPlaceholder(siteConfig.integrations.email.notificationEmail)) {
  warnings.push(`⚠️  Email addresses not configured`);
} else {
  success.push(`✅ Email addresses configured`);
}

// Check social media
console.log('🌐 Checking Social Media...');
const socialPlatforms = Object.keys(siteConfig.social);
let configuredSocial = socialPlatforms.filter(platform => 
  !hasPlaceholder(siteConfig.social[platform]) && siteConfig.social[platform] !== ''
).length;

if (configuredSocial === 0) {
  warnings.push(`⚠️  No social media links configured (optional)`);
} else {
  success.push(`✅ ${configuredSocial} social media links configured`);
}

// Print results
console.log('\n' + '='.repeat(60));
console.log('📊 VALIDATION RESULTS');
console.log('='.repeat(60) + '\n');

if (issues.length > 0) {
  console.log('🚨 CRITICAL ISSUES (must fix):');
  issues.forEach(issue => console.log('  ' + issue));
  console.log('');
}

if (warnings.length > 0) {
  console.log('⚠️  WARNINGS (recommended to fix):');
  warnings.forEach(warning => console.log('  ' + warning));
  console.log('');
}

console.log('✅ CONFIGURED ITEMS:');
success.forEach(item => console.log('  ' + item));
console.log('');

// Summary
const totalChecks = issues.length + warnings.length + success.length;
const completionRate = Math.round((success.length / totalChecks) * 100);

console.log('='.repeat(60));
console.log(`📈 COMPLETION: ${completionRate}% (${success.length}/${totalChecks})`);
console.log('='.repeat(60));

if (issues.length > 0) {
  console.log('\n❌ Configuration INCOMPLETE - Fix critical issues before deploying');
  console.log('📖 See CONFIGURATION_GUIDE.md for help');
  process.exit(1);
} else if (warnings.length > 0) {
  console.log('\n⚠️  Configuration ACCEPTABLE but has warnings');
  console.log('💡 Consider addressing warnings for best results');
  console.log('📖 See CONFIGURATION_GUIDE.md for help');
  process.exit(0);
} else {
  console.log('\n✅ Configuration COMPLETE - Ready to deploy!');
  console.log('🚀 Run "npm run deploy:prod" to go live');
  process.exit(0);
}
