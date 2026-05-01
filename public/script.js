// Tab Switching
function switchTab(tabName) {
  // Hide all tab contents
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => tab.classList.remove('active'));

  // Show selected tab
  const selectedTab = document.getElementById(`tab-${tabName}`);
  if (selectedTab) {
    selectedTab.classList.add('active');
    window.scrollTo(0, 0);
  }
}

// Auth Modal
function openAuthModal() {
  document.getElementById('auth-modal').classList.add('active');
}

function closeAuthModal() {
  document.getElementById('auth-modal').classList.remove('active');
}

function loginGoogle() {
  window.location.href = '/auth/google';
}

// Update auth button
async function updateAuthButton() {
  try {
    const response = await fetch('/auth/user');
    const user = await response.json();
    const authBtn = document.getElementById('auth-btn');

    if (user && user.email) {
      authBtn.textContent = `👤 ${user.displayName}`;
      authBtn.onclick = () => window.location.href = '/auth/logout';
    } else {
      authBtn.textContent = 'Sign In';
      authBtn.onclick = loginGoogle;
    }
  } catch (error) {
    console.error('Error checking auth status:', error);
  }
}

// Image Gallery
function openImageWindow(src) {
  const imgWindow = document.getElementById('image-window');
  const enlargedImg = document.getElementById('enlarged-image');
  enlargedImg.src = src;
  imgWindow.classList.add('active');
}

function closeImageWindow() {
  document.getElementById('image-window').classList.remove('active');
}

// Close image window when clicking outside
document.addEventListener('click', function(event) {
  const imgWindow = document.getElementById('image-window');
  if (event.target === imgWindow) {
    closeImageWindow();
  }
});

// Appointment Form
async function submitAppointment(event) {
  event.preventDefault();

  const name = document.getElementById('apt-name').value;
  const email = document.getElementById('apt-email').value;
  const phone = document.getElementById('apt-phone').value;
  const service = document.getElementById('apt-service').value;
  const date = document.getElementById('apt-date').value;
  const time = document.getElementById('apt-time').value;

  try {
    const response = await fetch('/api/appointments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, phone, service, date, time })
    });

    const data = await response.json();
    const statusDiv = document.getElementById('appointment-status');

    if (response.ok) {
      statusDiv.className = 'success';
      statusDiv.textContent = `✅ Appointment scheduled! Confirmation email sent to ${email}`;
      document.getElementById('appointment-form').reset();
    } else {
      statusDiv.className = 'error';
      statusDiv.textContent = `❌ Error: ${data.error}`;
    }
  } catch (error) {
    const statusDiv = document.getElementById('appointment-status');
    statusDiv.className = 'error';
    statusDiv.textContent = `❌ Error scheduling appointment: ${error.message}`;
  }
}

// Contact Form
async function submitContact(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);

  // In production, this would send to a backend service
  console.log('Contact message:', Object.fromEntries(formData));
  alert('Thank you for your message! We will get back to you soon.');
  form.reset();
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  updateAuthButton();
  // Set minimum date to today
  const dateInput = document.getElementById('apt-date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
  }
});
