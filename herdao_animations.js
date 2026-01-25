// H.E.R. DAO - GSAP Animations
// All scroll-triggered animations and interactions

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ============================================
// HERO SECTION ANIMATIONS
// ============================================
function animateHero() {
  const tl = gsap.timeline({
    defaults: {
      ease: "power2.out",
      duration: 1
    }
  });

  // Animate subtitle
  tl.from("[data-animate='hero-subtitle']", {
    y: "100%",
    duration: 0.8,
    delay: 0.3
  });

  // Animate first line of headline
  tl.from("[data-animate='hero-line-1']", {
    y: "100%",
    duration: 1.2,
  }, "-=0.5");

  // Animate second line of headline (staggered)
  tl.from("[data-animate='hero-line-2']", {
    y: "100%",
    duration: 1.2,
  }, "-=0.9");

  // Animate description
  tl.from("[data-animate='hero-desc']", {
    y: "100%",
    duration: 1,
  }, "-=0.7");

  // Animate button
  tl.from("[data-animate='hero-btn']", {
    opacity: 0,
    y: 20,
    duration: 0.6
  }, "-=0.4");
}

// Run hero animation on page load
window.addEventListener('DOMContentLoaded', animateHero);

// ============================================
// ABOUT US SECTION ANIMATIONS
// ============================================

// Floating 3D element - Parallax effect
gsap.to("[data-animate='float-element']", {
  scrollTrigger: {
    trigger: ".about-us",
    start: "top bottom",
    end: "bottom top",
    scrub: 1,
  },
  y: -100,
  rotation: 15,
  ease: "none"
});

// Title lines - Staggered reveal
gsap.from("[data-animate^='about-title']", {
  scrollTrigger: {
    trigger: ".about-us",
    start: "top 70%",
  },
  y: "100%",
  stagger: 0.2,
  duration: 0.8,
  ease: "power2.out"
});

// Description fade in
gsap.from("[data-animate='about-desc']", {
  scrollTrigger: {
    trigger: ".about-us",
    start: "top 60%",
  },
  opacity: 0,
  y: 30,
  duration: 0.8
});

// Partner logos - Staggered fade
gsap.from("[data-animate='partner-logos'] .partner-card", {
  scrollTrigger: {
    trigger: "[data-animate='partner-logos']",
    start: "top 80%",
  },
  opacity: 0,
  y: 20,
  stagger: 0.1,
  duration: 0.6
});

// ============================================
// PRODUCTS SECTION 1 - Service Cards
// ============================================

// Title animation
gsap.from("[data-animate='products-title']", {
  scrollTrigger: {
    trigger: ".products-section",
    start: "top 70%",
  },
  y: "100%",
  duration: 0.8,
  ease: "power2.out"
});

// Service cards - Staggered reveal
gsap.from("[data-animate='service-card']", {
  scrollTrigger: {
    trigger: ".service-cards",
    start: "top 70%",
  },
  opacity: 0,
  y: 60,
  stagger: 0.15,
  duration: 0.8,
  ease: "power2.out"
});

// ============================================
// PRODUCTS SECTION 2 - Featured Projects
// ============================================

// Title animation
gsap.from("[data-animate='featured-title']", {
  scrollTrigger: {
    trigger: ".featured-projects",
    start: "top 70%",
  },
  y: "100%",
  duration: 0.8,
  ease: "power2.out"
});

// Project cards - Fade in (sticky effect is CSS)
gsap.from("[data-animate='project-card']", {
  scrollTrigger: {
    trigger: ".project-list",
    start: "top 70%",
  },
  opacity: 0,
  y: 80,
  stagger: 0.3,
  duration: 1,
  ease: "power2.out"
});

// ============================================
// ACHIEVEMENT SECTION
// ============================================

// Title animation
gsap.from("[data-animate='achievement-title']", {
  scrollTrigger: {
    trigger: ".achievement",
    start: "top 70%",
  },
  y: "100%",
  duration: 0.8,
  ease: "power2.out"
});

// Intro text
gsap.from("[data-animate='achievement-intro']", {
  scrollTrigger: {
    trigger: ".achievement",
    start: "top 65%",
  },
  opacity: 0,
  y: 30,
  duration: 0.8,
  delay: 0.2
});

// Stats - Staggered reveal with number count-up
const stats = document.querySelectorAll("[data-animate^='stat-']");
stats.forEach((stat) => {
  gsap.from(stat, {
    scrollTrigger: {
      trigger: ".stats-grid",
      start: "top 75%",
    },
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: "power2.out"
  });
  
  // Number count-up animation
  const numberElement = stat.querySelector('.stat-number');
  if (numberElement) {
    const finalNumber = numberElement.textContent;
    const hasPlus = finalNumber.includes('+');
    const numericValue = parseInt(finalNumber.replace(/\D/g, ''));
    
    ScrollTrigger.create({
      trigger: stat,
      start: "top 80%",
      onEnter: () => {
        gsap.to(numberElement, {
          textContent: numericValue,
          duration: 2,
          ease: "power1.out",
          snap: { textContent: 1 },
          onUpdate: function() {
            numberElement.textContent = Math.ceil(this.targets()[0].textContent) + (hasPlus ? '+' : '');
          }
        });
      },
      once: true
    });
  }
});

// ============================================
// FOOTER ANIMATIONS
// ============================================

// Footer title reveal
gsap.from(".footer-title", {
  scrollTrigger: {
    trigger: ".footer",
    start: "top 70%",
  },
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power2.out"
});

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offset = 100; // Account for fixed navbar
      const targetPosition = target.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ============================================
// MOBILE MENU TOGGLE
// ============================================
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
  });
}

// ============================================
// CURSOR INTERACTION (OPTIONAL)
// ============================================
// Uncomment if you want a custom cursor effect

/*
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.3,
    ease: "power2.out"
  });
});

// Add class to cursor on button hover
document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
});
*/

// ============================================
// REFRESH SCROLLTRIGGER ON WINDOW RESIZE
// ============================================
window.addEventListener('resize', () => {
  ScrollTrigger.refresh();
});

// Log that animations are loaded
console.log('✅ H.E.R. DAO animations loaded');