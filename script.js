// Modal elements
const modal = document.getElementById('iframeModal');
const modalIframe = document.getElementById('modal-iframe');
const modalExternalLink = document.getElementById('modal-external-link');
const modalBackBtn = document.getElementById('modal-back-btn');
const iframeLoader = document.getElementById('iframeLoader');
let currentIframeUrl = '';

// Helper to close modal and return to main page
function closeModalAndReturn() {
  if (!modal) return;
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
  // Stop iframe loading
  modalIframe.src = '';
  iframeLoader.style.display = 'flex';
  // Reset external link
  modalExternalLink.href = '#';
  currentIframeUrl = '';
  // Re-focus on main content for accessibility (optional)
  document.getElementById('main-content')?.focus();
}

// Helper to open modal with given URL
function openModalWithUrl(url) {
  if (!modal) return;
  currentIframeUrl = url;
  modalIframe.src = url;
  modalExternalLink.href = url;
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
  iframeLoader.style.display = 'flex';
  // When iframe loads, hide loader
  modalIframe.onload = () => {
    iframeLoader.style.display = 'none';
  };
  modalIframe.onerror = () => {
    iframeLoader.innerHTML = '<div class="error-placeholder">⚠️ Não foi possível carregar o projeto. Tente abrir em nova aba.</div>';
  };
}

// Event listeners for modal controls
if (modalBackBtn) {
  modalBackBtn.addEventListener('click', closeModalAndReturn);
}
// ESC key to close modal and go back
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
    closeModalAndReturn();
    event.preventDefault();
  }
});

// Intercept links with data-iframe="true" (github.io projects)
document.querySelectorAll('.card-button[data-iframe="true"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetUrl = link.getAttribute('href');
    if (targetUrl) {
      openModalWithUrl(targetUrl);
    }
  });
});

// Preserve original card click/toggle behavior but avoid interfering with buttons
const cards = document.querySelectorAll('.card');
cards.forEach((card) => {
  card.addEventListener('click', (event) => {
    if (event.target.closest('.card-button')) return;
    card.classList.toggle('is-active');
  });
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      card.classList.toggle('is-active');
    }
  });
});

