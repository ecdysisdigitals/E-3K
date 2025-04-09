// Toggle navigation menu for mobile
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth scrolling for "start button"
document.getElementById('start-reading').addEventListener('click', () => {
  document.getElementById('komiks').scrollIntoView({ behavior: 'smooth' });
});

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default anchor behavior

    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });

      // Remove 'active' class from all links
      document.querySelectorAll('.nav-links a').forEach(navLink => {
        navLink.classList.remove('active');
      });

      // Add 'active' class to the clicked link
      link.classList.add('active');
    }

    // Close the mobile menu
    navLinks.classList.remove('active');
  });
});

// Highlight active navigation link based on scroll position
document.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinksList = document.querySelectorAll('.nav-links a');

  let currentSection = '';

  for (let section of sections) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop - sectionHeight * 0.25 &&
      window.scrollY < sectionTop + sectionHeight - sectionHeight * 0.25
    ) {
      currentSection = section.getAttribute('id');
      break; // Stop after the first matching section
    }
  }

  navLinksList.forEach(link => {
    link.classList.remove('active');

    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
});

// Animation for Komiks Section
document.addEventListener("DOMContentLoaded", () => {
  const komiksPanels = document.querySelectorAll(".komiks-panel");

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top < window.innerHeight &&
      rect.bottom > 0
    );
  }

  function triggerAnimations() {
    komiksPanels.forEach(panel => {
      if (isInViewport(panel)) {
        panel.classList.add("active");
      } else {
        panel.classList.remove("active");
      }
    });
  }

  window.addEventListener("scroll", triggerAnimations);
  window.addEventListener("resize", triggerAnimations);
  triggerAnimations(); // Initial check
});

// Set initial active link on page load
document.addEventListener('DOMContentLoaded', () => {
  const homeLink = document.querySelector('.nav-links a[href="#home"]');
  if (homeLink) {
    homeLink.classList.add('active');
  }
});