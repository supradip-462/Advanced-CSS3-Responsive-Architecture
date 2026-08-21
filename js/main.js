/**
 * MAIN INTERACTIVITY MODULE
 * Author: Supradip Bhattacharjee
 * Features:
 * 1. Mobile Navigation Hamburger Menu Toggle
 * 2. Active Page Link Indicator
 * 3. Animated Skill Progress Bars (Intersection Observer)
 * 4. Animated Number Counters
 * 5. Interactive Project Filtering Tabs
 * 6. Modal Window Trigger & Detail Rendering
 * 7. Interactive Form Validation with Feedback
 * 8. Back To Top Floating Scroll Button
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ------------------------------------------------------------------------
  // 1. Footer Copyright Year Dynamic Update
  // ------------------------------------------------------------------------
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ------------------------------------------------------------------------
  // 2. Mobile Hamburger Menu Toggle
  // ------------------------------------------------------------------------
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileNav = document.getElementById('mobile-nav');

  if (hamburgerBtn && mobileNav) {
    hamburgerBtn.addEventListener('click', () => {
      const isOpen = mobileNav.classList.contains('active');
      hamburgerBtn.classList.toggle('active');
      mobileNav.classList.toggle('active');
      hamburgerBtn.setAttribute('aria-expanded', !isOpen);
      mobileNav.setAttribute('aria-hidden', isOpen);
    });

    // Close mobile menu on clicking any link
    const mobileLinks = mobileNav.querySelectorAll('.mobile-nav-link');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburgerBtn.classList.remove('active');
        mobileNav.classList.remove('active');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        mobileNav.setAttribute('aria-hidden', 'true');
      });
    });
  }

  // ------------------------------------------------------------------------
  // 3. Skill Progress Bar Observer Animation
  // ------------------------------------------------------------------------
  const skillCards = document.querySelectorAll('.skill-card');
  if (skillCards.length > 0) {
    const skillObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const fill = entry.target.querySelector('.skill-fill');
          if (fill) {
            const targetWidth = fill.getAttribute('data-target') || fill.style.getPropertyValue('--fill') || '85%';
            fill.style.width = targetWidth;
          }
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    skillCards.forEach(card => skillObserver.observe(card));
  }

  // ------------------------------------------------------------------------
  // 4. Number Counters Observer Animation
  // ------------------------------------------------------------------------
  const statNumbers = document.querySelectorAll('.stat-number');
  if (statNumbers.length > 0) {
    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = parseInt(entry.target.getAttribute('data-target'), 10) || 0;
          const suffix = entry.target.getAttribute('data-suffix') || '+';
          let count = 0;
          const step = Math.max(1, Math.ceil(target / 40));
          const timer = setInterval(() => {
            count += step;
            if (count >= target) {
              count = target;
              clearInterval(timer);
            }
            entry.target.textContent = count + suffix;
          }, 30);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => counterObserver.observe(stat));
  }

  // ------------------------------------------------------------------------
  // 5. Interactive Project Filtering System
  // ------------------------------------------------------------------------
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (filterBtns.length > 0 && projectCards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Active tab switch
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
          const cardCategory = card.getAttribute('data-category');
          if (category === 'all' || cardCategory === category) {
            card.style.display = 'flex';
            card.classList.add('fade-in-up');
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // ------------------------------------------------------------------------
  // 6. Project Details Modal Window Trigger
  // ------------------------------------------------------------------------
  const modalBackdrop = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close');
  const modalTitle = document.getElementById('modal-title');
  const modalCategory = document.getElementById('modal-category');
  const modalDesc = document.getElementById('modal-desc');
  const modalTags = document.getElementById('modal-tags');
  const modalFeatureList = document.getElementById('modal-features');
  const modalDemoLink = document.getElementById('modal-demo-link');
  const modalRepoLink = document.getElementById('modal-repo-link');

  const projectDetailsMap = {
    'shopnow': {
      title: 'ShopNow E-Commerce Platform',
      category: 'Full Stack Web App',
      description: 'A full-featured modern e-commerce solution with dynamic product search, category filtering, real-time cart state management, and simulated payment gateway integrated with full administrative controls.',
      tags: ['React', 'Node.js', 'MongoDB', 'Express', 'CSS3 Grid'],
      features: [
        'Responsive 2D product grid with instant filter & search',
        'Secure user authentication & JWT session management',
        'Stripe payment sandbox integration',
        'Dark & light mode dashboard analytics view'
      ],
      demo: '#',
      repo: '#'
    },
    'analytics': {
      title: 'Analytics Dashboard System',
      category: 'Data Visualization & Frontend',
      description: 'Interactive data analytics platform offering clean visualization widgets, real-time WebSocket metrics updates, modular responsive grid drag-and-drop layout, and CSV reporting export.',
      tags: ['Vue.js', 'D3.js', 'Flexbox', 'CSS Variables', 'Chart.js'],
      features: [
        'Real-time line charts, bar graphs, and heatmaps',
        'Custom CSS variables dark theme customization',
        'Export data reports to PDF and CSV formats',
        'Accessible high contrast screen reader support'
      ],
      demo: '#',
      repo: '#'
    },
    'portfolio': {
      title: 'Advanced CSS3 Portfolio',
      category: 'UI/UX & Modern Architecture',
      description: 'Pixel-perfect, ultra-fast portfolio site constructed with semantic HTML5, pure CSS3 architecture (Grid & Flexbox), fluid typography, dark/light theme switcher, and WCAG AA accessibility standard compliance.',
      tags: ['HTML5', 'CSS3 Grid', 'Flexbox', 'JavaScript', 'CSS Tokens'],
      features: [
        '100/100 Lighthouse score performance & accessibility',
        'Dynamic Light and Dark theme state persistence',
        'Pure CSS Grid two-dimensional responsive architecture',
        'Fluid micro-interactions and smooth scroll animations'
      ],
      demo: '#',
      repo: '#'
    },
    'ai-assistant': {
      title: 'AI Companion Interface',
      category: 'Full Stack & AI Integration',
      description: 'Intelligent desktop & web companion UI featuring voice command synthesis, contextual prompt memory, natural language processing feedback, and responsive multi-pane layout.',
      tags: ['JavaScript', 'Web Speech API', 'Python', 'CSS Glassmorphism'],
      features: [
        'Voice command recognition and audio playback',
        'Glassmorphism dark UI with glowing background accents',
        'History log search with instant filter tabs',
        'Custom shortcut binding for power users'
      ],
      demo: '#',
      repo: '#'
    }
  };

  const projectButtons = document.querySelectorAll('.open-modal-btn');
  if (projectButtons.length > 0 && modalBackdrop) {
    projectButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const projectId = btn.getAttribute('data-project-id');
        const data = projectDetailsMap[projectId];

        if (data) {
          if (modalTitle) modalTitle.textContent = data.title;
          if (modalCategory) modalCategory.textContent = data.category;
          if (modalDesc) modalDesc.textContent = data.description;
          
          if (modalTags) {
            modalTags.innerHTML = data.tags.map(t => `<span class="tag-chip">${t}</span>`).join('');
          }
          
          if (modalFeatureList) {
            modalFeatureList.innerHTML = data.features.map(f => `<li>⚡ ${f}</li>`).join('');
          }

          if (modalDemoLink) modalDemoLink.href = data.demo;
          if (modalRepoLink) modalRepoLink.href = data.repo;

          modalBackdrop.classList.add('active');
          document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }
      });
    });

    const closeModal = () => {
      modalBackdrop.classList.remove('active');
      document.body.style.overflow = '';
    };

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalBackdrop.classList.contains('active')) closeModal();
    });
  }

  // ------------------------------------------------------------------------
  // 7. Contact Form Interactive Validation
  // ------------------------------------------------------------------------
  const contactForm = document.getElementById('contact-form');
  const toastNotification = document.getElementById('toast-notification');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;
      const nameInput = document.getElementById('form-name');
      const emailInput = document.getElementById('form-email');
      const subjectInput = document.getElementById('form-subject');
      const messageInput = document.getElementById('form-message');

      // Helper function to show error
      const setError = (input, isErr) => {
        const group = input.closest('.form-group');
        if (group) {
          if (isErr) {
            group.classList.add('error');
          } else {
            group.classList.remove('error');
          }
        }
      };

      // Name validation
      if (!nameInput.value.trim()) {
        setError(nameInput, true);
        isValid = false;
      } else {
        setError(nameInput, false);
      }

      // Email validation regex
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim() || !emailPattern.test(emailInput.value.trim())) {
        setError(emailInput, true);
        isValid = false;
      } else {
        setError(emailInput, false);
      }

      // Subject validation
      if (!subjectInput.value.trim()) {
        setError(subjectInput, true);
        isValid = false;
      } else {
        setError(subjectInput, false);
      }

      // Message validation
      if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
        setError(messageInput, true);
        isValid = false;
      } else {
        setError(messageInput, false);
      }

      if (isValid) {
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        if (submitBtn) {
          const originalText = submitBtn.textContent;
          submitBtn.textContent = 'Sending Message...';
          submitBtn.disabled = true;

          setTimeout(() => {
            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;

            if (toastNotification) {
              toastNotification.classList.add('active');
              setTimeout(() => {
                toastNotification.classList.remove('active');
              }, 4000);
            } else {
              alert('Thank you! Your message has been sent successfully.');
            }
          }, 1200);
        }
      }
    });
  }

  // ------------------------------------------------------------------------
  // 8. Back to Top Floating Button Scroll Behavior
  // ------------------------------------------------------------------------
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
