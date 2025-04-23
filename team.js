// Team Bio Toggle Function
function toggleBio(card) {
    // Close all other open bios first
    document.querySelectorAll('.team-card').forEach(otherCard => {
        if (otherCard !== card && otherCard.classList.contains('active')) {
            otherCard.classList.remove('active');
        }
    });
    
    // Toggle the clicked card
    card.classList.toggle('active');
    
    // If we're opening the bio, scroll it into view nicely
    if (card.classList.contains('active')) {
        setTimeout(() => {
            card.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest'
            });
        }, 300); // Wait for the flip animation to start
    }
}

// Close bio when clicking outside
document.addEventListener('click', function(event) {
    const teamCards = document.querySelectorAll('.team-card');
    let clickedInside = false;
    
    teamCards.forEach(card => {
        if (card.contains(event.target)) {
            clickedInside = true;
        }
    });
    
    if (!clickedInside) {
        teamCards.forEach(card => {
            card.classList.remove('active');
        });
    }
});

// Add keyboard accessibility
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        document.querySelectorAll('.team-card').forEach(card => {
            card.classList.remove('active');
        });
    }
});