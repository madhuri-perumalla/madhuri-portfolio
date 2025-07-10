// When the document is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get all navigation links
  const navLinks = document.querySelectorAll('.main-nav a');
  
  // Add click event listener to each navigation link
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Remove active class from all links
      navLinks.forEach(link => link.classList.remove('active'));
      
      // Add active class to the clicked link
      this.classList.add('active');
    });
  });
  
  // Set active navigation based on scroll position
  window.addEventListener('scroll', function() {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (pageYOffset >= (sectionTop - 200)) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === current) {
        link.classList.add('active');
      }
    });
  });
  
  // Set the first nav link as active by default
  if (navLinks.length > 0) {
    navLinks[0].classList.add('active');
  }

  // Initialize skill levels
  document.querySelectorAll('.skill-level').forEach(skill => {
    const level = skill.getAttribute('data-level');
    skill.style.setProperty('--width', level + '%');
  });
});
