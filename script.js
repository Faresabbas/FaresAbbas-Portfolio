// Theme Toggle
const toggleBtn = document.createElement('button');
toggleBtn.textContent = '🌓 Mode';
toggleBtn.className = 'toggle-theme';
toggleBtn.onclick = () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
};
document.body.appendChild(toggleBtn);

// Load stored theme
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
  }
});

// Carousel Functionality
const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

let index = 0;

if (track && prevBtn && nextBtn) {
  nextBtn.addEventListener('click', () => {
    index = Math.min(index + 1, track.children.length - 1);
    track.style.transform = `translateX(-${index * 320}px)`;
  });

  prevBtn.addEventListener('click', () => {
    index = Math.max(index - 1, 0);
    track.style.transform = `translateX(-${index * 320}px)`;
  });
}
