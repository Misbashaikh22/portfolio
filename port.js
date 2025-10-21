document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link'); // Select all navbar links
    
    // Add click event to each link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor behavior if needed
            
            const targetId = this.getAttribute('href'); // Get the target section ID, e.g., #home
            const targetSection = document.querySelector(targetId); // Find the section
            
            if (targetSection) {
                // Smooth scroll to the section
                targetSection.scrollIntoView({ behavior: 'smooth' });
                
                // Update active class on navbar
                navLinks.forEach(navLink => navLink.classList.remove('active')); // Remove active from others
                this.classList.add('active'); // Add active to the clicked link
            }
        });
    });
});