// Authentication JavaScript

// Handle email/password login
document.getElementById('loginForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const form = e.target;
  const submitButton = form.querySelector('button[type="submit"]');
  const originalText = submitButton.textContent;
  
  submitButton.disabled = true;
  submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Signing in...';
  
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  
  try {
    const response = await axios.post('/api/auth/login', data);
    
    if (response.data.success) {
      // Store token
      localStorage.setItem('authToken', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      
      // Redirect to dashboard
      window.location.href = '/dashboard';
    } else {
      alert('Login failed: ' + response.data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
    alert('Login failed. Please check your credentials and try again.');
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = originalText;
  }
});

// Handle email/password signup
document.getElementById('signupForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const form = e.target;
  const submitButton = form.querySelector('button[type="submit"]');
  const originalText = submitButton.textContent;
  
  submitButton.disabled = true;
  submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Creating account...';
  
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  
  // Validate password strength
  if (data.password.length < 8) {
    alert('Password must be at least 8 characters long');
    submitButton.disabled = false;
    submitButton.textContent = originalText;
    return;
  }
  
  try {
    const response = await axios.post('/api/auth/signup', data);
    
    if (response.data.success) {
      alert('Account created successfully! Please check your email to verify your account.');
      window.location.href = '/login';
    } else {
      alert('Signup failed: ' + response.data.message);
    }
  } catch (error) {
    console.error('Signup error:', error);
    alert('Signup failed. Please try again.');
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = originalText;
  }
});

// Handle Google login
async function handleGoogleLogin() {
  // TODO: Implement Google OAuth flow
  // This requires setting up Google OAuth credentials and implementing the callback
  alert('Google login will be available once you configure OAuth credentials in the Google Cloud Console.\n\nSteps:\n1. Create OAuth credentials\n2. Add authorized redirect URI\n3. Update config.ts with client ID');
}

// Handle GitHub login
async function handleGithubLogin() {
  // TODO: Implement GitHub OAuth flow
  // This requires setting up GitHub OAuth app and implementing the callback
  alert('GitHub login will be available once you configure OAuth in GitHub Developer Settings.\n\nSteps:\n1. Create OAuth App\n2. Add callback URL\n3. Update config.ts with client ID');
}

// Check if user is already logged in
function checkAuth() {
  const token = localStorage.getItem('authToken');
  if (token) {
    // Verify token with backend
    axios.get('/api/auth/verify', {
      headers: { 'Authorization': `Bearer ${token}` }
    }).then(response => {
      if (response.data.valid) {
        // User is authenticated
        return true;
      } else {
        // Token is invalid, clear it
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        return false;
      }
    }).catch(error => {
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
      return false;
    });
  }
  return false;
}

// Logout function
function logout() {
  localStorage.removeItem('authToken');
  localStorage.removeItem('user');
  window.location.href = '/login';
}
