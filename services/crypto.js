document.addEventListener('DOMContentLoaded', function() {
    // Scroll animations
    const animateElements = document.querySelectorAll('.content-wrapper, .expertise-card, .process-step, .pricing-card, .case-study-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('image-content')) {
                    entry.target.querySelector('img').classList.add('zoom-in');
                } else {
                    entry.target.classList.add('animate-in');
                }
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });
    
    animateElements.forEach(element => {
        observer.observe(element);
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
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Parallax effect for hero image
    const heroImage = document.querySelector('.hero-image img');
    if (heroImage) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            heroImage.style.transform = `translateY(${scrollPosition * 0.2}px)`;
        });
    }
    
    // Highlight pricing card on hover
    const pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            if (!this.classList.contains('featured')) {
                this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            if (!this.classList.contains('featured')) {
                this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
            }
        });
    });
});