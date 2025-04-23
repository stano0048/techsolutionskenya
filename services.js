document.addEventListener('DOMContentLoaded', function() {
    // Initialize navigation (same as other pages)
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Sticky navbar on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
    
    // Service row animations
    const animateServiceRows = function() {
        const serviceRows = document.querySelectorAll('.service-row');
        
        serviceRows.forEach(row => {
            const rowPosition = row.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (rowPosition < screenPosition) {
                row.style.opacity = '1';
                row.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Initialize service rows with hidden state
    document.querySelectorAll('.service-row').forEach(row => {
        row.style.opacity = '0';
        row.style.transform = 'translateY(50px)';
        row.style.transition = 'all 0.6s ease-out';
    });
    
    // Run on initial load
    animateServiceRows();
    
    // Run on scroll
    window.addEventListener('scroll', animateServiceRows);
    
    // Icon hover effects
    document.querySelectorAll('.icon-circle').forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = this.style.transform + ' scale(1.1)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = this.style.transform.replace(' scale(1.1)', '');
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
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});