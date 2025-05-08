document.addEventListener('DOMContentLoaded', function() {
    try {
      // Get the SVG path element for the signature
      const signaturePath = document.querySelector('.signature svg path');
      const heroContent = document.querySelector('.hero-content');
      const firstName = document.querySelector('.hero-first-name');
      const lastName = document.querySelector('.hero-last-name');
      const heroTagline = document.querySelector('.hero-tagline');
      const navLinks = document.querySelector('.nav-links');
      const footer = document.querySelector('.footer');
      const decorContainer = document.querySelector('.decor-container');
      
      // Hide names individually
      firstName.style.opacity = '0';
      firstName.style.transform = 'translateY(30px)';
      
      lastName.style.opacity = '0';
      lastName.style.transform = 'translateY(30px)';
      
      // Hide tagline
      heroTagline.style.opacity = '0';
      
      navLinks.style.opacity = '0';
      
      footer.style.opacity = '0';
      
      decorContainer.style.opacity = '0';
  
      // Get the total length of the signature path
      const pathLength = signaturePath.getTotalLength();
  
      // Set up the initial state of the path
      signaturePath.style.strokeDasharray = pathLength;
      signaturePath.style.strokeDashoffset = pathLength;
  
      // Animate signature drawing using CSS transition
      setTimeout(function() {
        signaturePath.style.transition = 'stroke-dashoffset 40s cubic-bezier(0.16, 1, 0.3, 1)';
        signaturePath.style.strokeDashoffset = '0';
  
        // After signature animation completes, fade in the rest of the content
        setTimeout(function() {
          // Animate first name with a slight delay
          setTimeout(function() {
            firstName.style.transition = 'opacity 1s cubic-bezier(0.25, 1, 0.5, 1), transform 1s cubic-bezier(0.25, 1, 0.5, 1)';
            firstName.style.opacity = '1';
            firstName.style.transform = 'translateY(0)';
            
            // Animate last name with a delay after first name
            setTimeout(function() {
              lastName.style.transition = 'opacity 1s cubic-bezier(0.25, 1, 0.5, 1), transform 1s cubic-bezier(0.25, 1, 0.5, 1)';
              lastName.style.opacity = '1';
              lastName.style.transform = 'translateY(0)';
              
              // Animate tagline after names
              setTimeout(function() {
                heroTagline.style.transition = 'opacity 1s cubic-bezier(0.25, 1, 0.5, 1), transform 1s cubic-bezier(0.25, 1, 0.5, 1)';
                heroTagline.style.opacity = '1';
                heroTagline.style.transform = 'translateY(0)';
              }, 100);
            }, 200);
          }, 100);
  
          // Animate navigation links with delay - from bottom
          setTimeout(function() {
            navLinks.style.transition = 'opacity 1s ease-in-out, transform 1s ease-in-out';
            navLinks.style.opacity = '1';
            navLinks.style.transform = 'translateY(0)';
          }, 100);
  
          // Animate footer with delay - from bottom
          setTimeout(function() {
            footer.style.transition = 'opacity 1s ease-in-out, transform 1s ease-in-out';
            footer.style.opacity = '1';
            footer.style.transform = 'translateY(0)';
          }, 100);
  
          // Animate decorations with delay - from bottom
          setTimeout(function() {
            decorContainer.style.transition = 'opacity 1s ease-in-out, transform 1s ease-in-out';
            decorContainer.style.opacity = '1';
            decorContainer.style.transform = 'translateY(0)';
          }, 100);
        }, 1000); // Signature animation duration
      }, 100); // Small delay to ensure styles are applied
    } catch (error) {
      console.error("Animation error:", error);
    }
  });


  // Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const menuClose = document.querySelector('.mobile-menu-close');
  const mobileMenu = document.querySelector('.mobile-menu-panel');
  const mobileLinks = document.querySelectorAll('.mobile-menu-links a');

  // Function to toggle the menu
  function toggleMenu() {
    mobileMenu.classList.toggle('active');
    // Prevent scrolling when menu is open
    document.body.classList.toggle('no-scroll');
  }

  // Event listeners for toggle button
  if (menuToggle) {
    menuToggle.addEventListener('click', toggleMenu);
  }

  // Event listener for close button
  if (menuClose) {
    menuClose.addEventListener('click', toggleMenu);
  }

  // Close menu when a link is clicked
  mobileLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
  });

  // Handle resize events to ensure proper display
  window.addEventListener('resize', function() {
    if (window.innerWidth > 730 && mobileMenu.classList.contains('active')) {
      mobileMenu.classList.remove('active');
      document.body.classList.remove('no-scroll');
    }
  });
});
