document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelectorAll('.nav__link');

  navToggle.addEventListener('click', function () {
      document.body.classList.toggle('nav-open');
  });

  navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
          document.body.classList.remove('nav-open');
      });
  });
});

// Dark Mode Toggle Functionality
const darkModeToggle = document.querySelector('.dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode'); // Toggle dark mode class on body
    darkModeToggle.classList.toggle('light-mode'); // Toggle light mode class on button
});
