document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
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

  // Animated Counters
  const counters = document.querySelectorAll('.counter span[data-count]');

  const options = {
    threshold: 0.5
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const countTo = parseInt(target.getAttribute('data-count'));
        let count = 0;
        const speed = Math.floor(2000 / countTo);

        const updateCount = () => {
          if (count < countTo) {
            count += Math.ceil(countTo / 100);
            if (count > countTo) count = countTo;
            target.innerText = count.toLocaleString();
            setTimeout(updateCount, speed);
          }
        };

        updateCount();
        observer.unobserve(target);
      }
    });
  }, options);

  counters.forEach(counter => {
    observer.observe(counter);
  });

  // Testimonial Slider
  const slides = document.querySelectorAll('.testimonial-slide');
  const dots = document.querySelectorAll('.testimonial-dots .dot');
  const prevBtn = document.querySelector('.testimonial-prev');
  const nextBtn = document.querySelector('.testimonial-next');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlide = index;
  }

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    });

    nextBtn.addEventListener('click', () => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    });
  }

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showSlide(index);
    });
  });

  // Auto-advance slides every 5 seconds
  setInterval(() => {
    if (document.visibilityState === 'visible' && slides.length > 0) {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
  }, 5000);

  // Case Study Modal
  const caseStudyBtns = document.querySelectorAll('.case-study-btn');
  const caseStudyModal = document.getElementById('caseStudyModal');
  const modalClose = document.querySelector('.modal-close');

  const caseStudies = [
    {
      id: 1,
      title: 'National Fundraising Campaign',
      client: 'Hope Foundation - Non-Profit',
      image: 'https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      leads: '5,000+',
      conversion: '18.5%',
      roi: '310%',
      quote: 'SIG Solutions transformed our fundraising approach. Their team\'s dedication and strategic calling methods helped us reach our annual target in just 4 months.',
      author: 'Sarah Johnson',
      position: 'Director of Development, Hope Foundation',
      report: 'Our comprehensive campaign for Hope Foundation focused on reconnecting with lapsed donors and finding new supporters. Using a data-driven approach, we segmented the audience based on previous giving patterns and interest areas. Our specialized fundraising team conducted over 15,000 calls, resulting in 5,000+ qualified leads and an 18.5% conversion rate to monthly donors. The campaign achieved a 310% ROI within the first year, with an average donation value increase of 28% compared to previous campaigns.'
    },
    {
      id: 2,
      title: 'B2B Sales Acceleration',
      client: 'TechGrowth Solutions - Technology',
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      leads: '350+',
      conversion: '34.2%',
      roi: '275%',
      quote: 'The quality of leads delivered by SIG Solutions exceeded our expectations. Their team\'s ability to understand our complex product offering and communicate it effectively to prospects was impressive.',
      author: 'Michael Chen',
      position: 'Sales Director, TechGrowth Solutions',
      report: 'For TechGrowth Solutions, we developed a targeted B2B outreach campaign focused on mid to large enterprises in the financial and healthcare sectors. Our team conducted extensive research to identify decision-makers and created customized scripts addressing specific pain points in their operations. Through 1,200+ calls, we generated 350+ qualified leads and secured 120 sales appointments. The campaign achieved a 34.2% conversion rate from lead to appointment, resulting in 28 new client acquisitions and a 275% ROI within 6 months.'
    },
    {
      id: 3,
      title: 'Customer Retention Program',
      client: 'Lifestyle Fitness - Health & Fitness',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      leads: '2,800+',
      conversion: '62.5%',
      roi: '420%',
      quote: 'SIG Solutions helped us identify at-risk members and reconnect with them before they cancelled. Their retention specialists truly understand how to communicate value and address concerns.',
      author: 'Lisa Ndlovu',
      position: 'Membership Director, Lifestyle Fitness',
      report: 'Lifestyle Fitness was experiencing a high rate of membership cancellations, particularly after the first three months. We implemented a proactive retention program that identified at-risk members through usage patterns and engagement metrics. Our retention specialists conducted personalized outreach to 2,800+ members, addressing specific concerns and highlighting underutilized benefits. The campaign resulted in a 45% reduction in cancellations, with 62.5% of contacted members renewing their memberships. Additionally, we generated 420+ upsells to premium membership tiers, delivering a 420% ROI on the campaign investment.'
    }
  ];

  caseStudyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const caseId = parseInt(btn.getAttribute('data-id'));
      const caseStudy = caseStudies.find(cs => cs.id === caseId);

      if (caseStudy && caseStudyModal) {
        document.getElementById('modalTitle').textContent = caseStudy.title;
        document.getElementById('modalImage').style.backgroundImage = `url(${caseStudy.image})`;
        document.getElementById('modalLeads').textContent = caseStudy.leads;
        document.getElementById('modalConversion').textContent = caseStudy.conversion;
        document.getElementById('modalROI').textContent = caseStudy.roi;
        document.getElementById('modalClient').textContent = caseStudy.client;
        document.getElementById('modalReport').textContent = caseStudy.report;
        document.getElementById('modalQuote').textContent = `"${caseStudy.quote}"`;
        document.getElementById('modalAuthor').textContent = caseStudy.author;
        document.getElementById('modalPosition').textContent = caseStudy.position;

        caseStudyModal.classList.add('show');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  if (modalClose) {
    modalClose.addEventListener('click', () => {
      caseStudyModal.classList.remove('show');
      document.body.style.overflow = 'auto';
    });
  }

  // Contact Form Modal
  const contactForm = document.getElementById('contactForm');
  const contactModal = document.getElementById('contactModal');
  const contactModalClose = document.querySelectorAll('.modal-close, .modal-close-btn');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      // Form validation
      let isValid = true;
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const messageInput = document.getElementById('message');

      // Reset error messages
      document.querySelectorAll('.error-message').forEach(el => el.textContent = '');

      if (!nameInput.value.trim()) {
        document.getElementById('name-error').textContent = 'Name is required';
        isValid = false;
      }

      if (!emailInput.value.trim()) {
        document.getElementById('email-error').textContent = 'Email is required';
        isValid = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
        document.getElementById('email-error').textContent = 'Please enter a valid email address';
        isValid = false;
      }

      if (!messageInput.value.trim()) {
        document.getElementById('message-error').textContent = 'Message is required';
        isValid = false;
      }

      if (isValid) {
        // Show success modal
        contactModal.classList.add('show');
        document.body.style.overflow = 'hidden';

        // Reset form
        contactForm.reset();
      }
    });
  }

  contactModalClose.forEach(btn => {
    btn.addEventListener('click', () => {
      contactModal.classList.remove('show');
      document.body.style.overflow = 'auto';
    });
  });

  // Back to Top Button
  const backToTopBtn = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Animated Wave Canvas
  const canvas = document.getElementById('waveCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');

    // Set canvas dimensions
    function setCanvasDimensions() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }

    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);

    // Animation variables
    const wavePoints = [];
    const waveCount = Math.floor(canvas.width / 50);

    // Initialize wave points
    for (let i = 0; i < waveCount; i++) {
      wavePoints.push({
        x: i * (canvas.width / waveCount),
        y: canvas.height / 2,
        originalY: canvas.height / 2,
        speed: 0.05 + Math.random() * 0.05
      });
    }

    // Animation function
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw waves
      ctx.beginPath();
      ctx.moveTo(0, canvas.height);

      for (let i = 0; i < wavePoints.length; i++) {
        const point = wavePoints[i];
        point.y = point.originalY + Math.sin(Date.now() * 0.001 * point.speed) * 15;

        if (i === 0) {
          ctx.lineTo(point.x, point.y);
        } else {
          const prevPoint = wavePoints[i - 1];
          const xc = (prevPoint.x + point.x) / 2;
          const yc = (prevPoint.y + point.y) / 2;
          ctx.quadraticCurveTo(prevPoint.x, prevPoint.y, xc, yc);
        }
      }

      ctx.lineTo(canvas.width, canvas.height);
      ctx.lineTo(0, canvas.height);
      ctx.closePath();

      // Create gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, 'rgba(0, 31, 84, 0.1)');
      gradient.addColorStop(1, 'rgba(0, 31, 84, 0.02)');

      ctx.fillStyle = gradient;
      ctx.fill();

      requestAnimationFrame(animate);
    }

    animate();
  }

  // Smooth Scrolling for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerHeight = 80; // Approximate header height
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        // Close mobile menu if open
        if (navList && navList.classList.contains('active')) {
          navList.classList.remove('active');
          mobileMenuBtn.classList.remove('active');
        }
      }
    });
  });

  // Header scroll effect
  const header = document.querySelector('.header');

  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
});
