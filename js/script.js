// Mobile navigation functionality
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on nav links
    document.querySelectorAll('.nav-link').forEach(function(navLink) {
      navLink.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  }
});