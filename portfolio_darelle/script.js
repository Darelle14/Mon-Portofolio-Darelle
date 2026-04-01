/* ═══════════════════════════════════════════
   PORTFOLIO — DARELLE KAMCHE FOTSO
   JavaScript partagé
═══════════════════════════════════════════ */

// Marquer le lien actif dans la nav
document.addEventListener('DOMContentLoaded', () => {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === page) link.classList.add('active');
  });

  // Scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(
    '.timeline-item, .e5-card, .project-card, .option-card, .card'
  ).forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
});

// File attachment feedback
function attachFile(event, inputId) {
  const file = event.target.files[0];
  if (file) {
    const btn = event.target.previousElementSibling;
    btn.textContent = '✅ ' + file.name;
    btn.style.borderColor = '#1a6b6b';
    btn.style.color = '#1a6b6b';
  }
}

// CV open in new tab
function openCV(event) {
  const file = event.target.files[0];
  if (file) {
    const url = URL.createObjectURL(file);
    window.open(url, '_blank');
  }
}

// Contact form feedback
function sendMessage() {
  const btn = document.querySelector('.btn-send');
  btn.textContent = '✅ Message envoyé !';
  btn.style.background = '#1a6b6b';
  btn.style.color = 'white';
  setTimeout(() => {
    btn.textContent = 'Envoyer le message ✉️';
    btn.style.background = '';
    btn.style.color = '';
  }, 3000);
}
