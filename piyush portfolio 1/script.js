// This is where you would add your interactive JavaScript code.
// The code provided below is a simple example to get you started.

document.addEventListener('DOMContentLoaded', () => {
  console.log("Welcome to Piyush Jangid's portfolio website!");
  // You can add more complex functionality here. For example:
  //
  // 1. Smooth scroll for navigation links:
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // 2. Simple animation or element manipulation:
  // Example: Change hero text color on a timer
  const heroText = document.querySelector('.hero-text h2');
  let colors = ['#00ffab', '#ff6347', '#ffd700'];
  let colorIndex = 0;

  setInterval(() => {
    colorIndex = (colorIndex + 1) % colors.length;
    heroText.style.color = colors[colorIndex];
    heroText.style.transition = 'color 1s ease';
  }, 3000);
});