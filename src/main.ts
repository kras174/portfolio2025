import './style.css'

// Mobile menu functionality
const mobileMenuBtn = document.getElementById('mobile-menu-btn') as HTMLButtonElement;
const navMenu = document.getElementById('nav-menu') as HTMLElement;
const nav = document.querySelector('nav') as HTMLElement;

if (mobileMenuBtn && navMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('nav__menu--open');
    mobileMenuBtn.classList.toggle('nav__mobile-btn--active');
  });

  // Close mobile menu when clicking on a link
  const navLinks = navMenu.querySelectorAll('.nav__link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('nav__menu--open');
      mobileMenuBtn.classList.remove('nav__mobile-btn--active');
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target as Node)) {
      navMenu.classList.remove('nav__menu--open');
      mobileMenuBtn.classList.remove('nav__mobile-btn--active');
    }
  });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e: Event) => {
    e.preventDefault();
    const target = document.querySelector((e.target as HTMLAnchorElement).getAttribute('href')!) as HTMLElement;
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-fade-in');
    }
  });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

// Add scroll effect to navigation
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    nav.classList.add('shadow');
  } else {
    nav.classList.remove('shadow');
  }
});

// Add loading animation
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

console.log('Portfolio website loaded successfully!');
