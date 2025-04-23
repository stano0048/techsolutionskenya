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
    
    // Initialize maps
    function initMaps() {
        // Ngong coordinates (approximate)
        const ngongCoords = [-1.3616, 36.6546];
        
        // Mini Map
        if (document.getElementById('mini-map')) {
            const miniMap = L.map('mini-map').setView(ngongCoords, 13);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(miniMap);
            
            L.marker(ngongCoords).addTo(miniMap)
                .bindPopup('Tech Ascent Kenya<br>Ngong Town, Nairobi')
                .openPopup();
        }
        
        // Full Map
        if (document.getElementById('full-map')) {
            const fullMap = L.map('full-map').setView(ngongCoords, 15);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(fullMap);
            
            L.marker(ngongCoords).addTo(fullMap)
                .bindPopup('<b>Tech Ascent Kenya</b><br>Ngong Town, Nairobi<br><a href="https://www.google.com/maps/place/Vet+stop/@-1.3596004,36.6319913,13.48z/data=!4m15!1m8!3m7!1s0x182f02e428edc063:0xd8c5ba0ad5a3c153!2sNgong!3b1!8m2!3d-1.3562118!4d36.6687545!16s%2Fm%2F025w5qg!3m5!1s0x182f1ccc56e71489:0x64efe42e14fc4003!8m2!3d-1.3424266!4d36.6665402!16s%2Fg%2F1tcvln9w?entry=ttu&g_ep=EgoyMDI1MDQyMC4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D" target="_blank">Get Directions</a>')
                .openPopup();
        }
    }
    
    // Load maps when page is fully loaded
    window.addEventListener('load', initMaps);
    
    // Form validation and submission
    const projectForm = document.getElementById('project-form');
    const careersForm = document.getElementById('careers-form');
    const meetingForm = document.getElementById('meeting-form');
    
    if (projectForm) {
        projectForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const submitBtn = this.querySelector('.submit-btn');
            const btnText = submitBtn.querySelector('.btn-text');
            
            // Change button state
            btnText.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission (replace with actual AJAX call)
            setTimeout(() => {
                btnText.textContent = 'Message Sent!';
                submitBtn.style.backgroundColor = '#10b981';
                
                // Reset form
                setTimeout(() => {
                    projectForm.reset();
                    btnText.textContent = 'Send Message';
                    submitBtn.style.backgroundColor = '';
                    submitBtn.disabled = false;
                    
                    // Show success message
                    alert('Thank you! Your message has been sent. We will get back to you within 24 hours.');
                }, 2000);
            }, 1500);
        });
    }
    
    if (careersForm) {
        careersForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const submitBtn = this.querySelector('.submit-btn');
            const btnText = submitBtn.querySelector('.btn-text');
            
            // Change button state
            btnText.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission (replace with actual AJAX call)
            setTimeout(() => {
                btnText.textContent = 'Application Sent!';
                submitBtn.style.backgroundColor = '#10b981';
                
                // Reset form
                setTimeout(() => {
                    careersForm.reset();
                    btnText.textContent = 'Apply Now';
                    submitBtn.style.backgroundColor = '';
                    submitBtn.disabled = false;
                    
                    // Show success message
                    alert('Thank you for your application! We will review your information and get back to you soon.');
                }, 2000);
            }, 1500);
        });
    }
    
    if (meetingForm) {
        meetingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const submitBtn = this.querySelector('.submit-btn');
            const btnText = submitBtn.querySelector('.btn-text');
            
            // Change button state
            btnText.textContent = 'Scheduling...';
            submitBtn.disabled = true;
            
            // Simulate form submission (replace with actual AJAX call)
            setTimeout(() => {
                btnText.textContent = 'Meeting Scheduled!';
                submitBtn.style.backgroundColor = '#10b981';
                
                // Reset form
                setTimeout(() => {
                    meetingForm.reset();
                    btnText.textContent = 'Schedule Meeting';
                    submitBtn.style.backgroundColor = '';
                    submitBtn.disabled = false;
                    
                    // Show success message
                    alert('Your meeting has been scheduled! You will receive a confirmation email with the details shortly.');
                }, 2000);
            }, 1500);
        });
    }
    
    // File upload styling
    const fileUploads = document.querySelectorAll('.file-upload');
    
    fileUploads.forEach(upload => {
        const input = upload.parentElement.querySelector('input[type="file"]');
        
        input.addEventListener('change', function() {
            if (this.files.length > 0) {
                upload.querySelector('span').textContent = this.files[0].name;
            }
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