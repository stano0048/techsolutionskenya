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
    
    // Portfolio Filter Functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const searchInput = document.getElementById('project-search');
    
    // Filter by category
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category').includes(filterValue)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
            
            // Trigger animation for visible items
            animatePortfolioItems();
        });
    });
    
    // Search functionality
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        
        portfolioItems.forEach(item => {
            const itemText = item.textContent.toLowerCase();
            const isVisible = itemText.includes(searchTerm);
            
            item.style.display = isVisible ? 'block' : 'none';
        });
    });
    
    // Animate portfolio items on scroll
    function animatePortfolioItems() {
        const visibleItems = document.querySelectorAll('.portfolio-item[style="display: block;"], .portfolio-item:not([style])');
        
        visibleItems.forEach((item, index) => {
            setTimeout(() => {
                if (isElementInViewport(item)) {
                    item.classList.add('visible');
                }
            }, index * 100);
        });
    }
    
    // Check if element is in viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }
    
    // Initialize animations
    window.addEventListener('load', animatePortfolioItems);
    window.addEventListener('scroll', animatePortfolioItems);
    
    // Project Modal Functionality
    const modal = document.getElementById('project-modal');
    const closeModal = document.querySelector('.close-modal');
    const portfolioLinks = document.querySelectorAll('.portfolio-link[title="View Screenshot"]');
    
    // Open modal when clicking on view screenshot
    portfolioLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get project details from parent card
            const card = this.closest('.portfolio-card');
            const title = card.querySelector('h3').textContent;
            const imageSrc = card.querySelector('img').src;
            const description = card.querySelector('p').textContent;
            const features = card.querySelector('.portfolio-features').innerHTML;
            
            // Populate modal content
            const modalBody = document.querySelector('.modal-body');
            modalBody.innerHTML = `
                <div class="modal-image">
                    <img src="${imageSrc}" alt="${title}">
                </div>
                <div class="modal-details">
                    <h2>${title}</h2>
                    <p>${description}</p>
                    ${features}
                    <a href="#" class="btn primary">Get a Quote for Similar Project</a>
                </div>
            `;
            
            // Show modal
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close modal
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close modal with ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});