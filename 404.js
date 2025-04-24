document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('nav ul');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('show');
            this.classList.toggle('open');
        });
    }

    // Add floating animation to astronaut on hover
    const astronaut = document.querySelector('.astronaut');
    if (astronaut) {
        astronaut.addEventListener('mouseenter', () => {
            astronaut.style.animation = 'float 3s ease-in-out infinite';
        });
        
        astronaut.addEventListener('mouseleave', () => {
            astronaut.style.animation = 'float 6s ease-in-out infinite';
        });
    }

    // Button hover effects
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = '';
        });
    });
});