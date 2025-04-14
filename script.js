// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  // Carousel functionality
  const carouselSlides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.carousel-prev');
  const nextBtn = document.querySelector('.carousel-next');
  let currentSlide = 0;
  const slideCount = carouselSlides.length;

  // Initialize carousel
  function showSlide(index) {
    // Hide all slides
    carouselSlides.forEach(slide => {
      slide.classList.remove('active');
    });

    // Remove active class from all dots
    dots.forEach(dot => {
      dot.classList.remove('active');
    });

    // Show the current slide and activate the corresponding dot
    carouselSlides[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlide = index;
  }

  // Next slide
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slideCount;
    showSlide(currentSlide);
  }

  // Previous slide
  function prevSlide() {
    currentSlide = (currentSlide - 1 + slideCount) % slideCount;
    showSlide(currentSlide);
  }

  // Event listeners for carousel controls
  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
  }

  // Event listeners for dots
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showSlide(index);
    });
  });

  // Auto-advance slides every 5 seconds
  setInterval(nextSlide, 5000);

  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navList = document.querySelector('.nav-list');

  if (mobileMenuBtn && navList) {
    mobileMenuBtn.addEventListener('click', function() {
      navList.classList.toggle('active');
      mobileMenuBtn.classList.toggle('active');
    });
  }

  // Close mobile menu when clicking on a nav link
  const navLinks = document.querySelectorAll('.nav-list a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navList.classList.remove('active');
      mobileMenuBtn.classList.remove('active');
    });
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Form submission handling
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const message = document.getElementById('message').value;

      // Simple form validation
      if (!name || !email || !message) {
        alert('Please fill in all required fields.');
        return;
      }

      // In a real application, you would send this data to a server
      console.log('Form submitted:', { name, email, phone, message });

      // Show success message
      alert('Thank you for your message! We will get back to you soon.');

      // Reset form
      contactForm.reset();
    });
  }

  // Header scroll effect
  const header = document.querySelector('.header');
  let lastScrollTop = 0;

  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    lastScrollTop = scrollTop;
  });
});
