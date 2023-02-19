$("#myCarousel").carousel({
  interval: false
});

const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    const sectionID = link.getAttribute('href');
    const section = document.querySelector(sectionID);

    section.scrollIntoView({ behavior: 'smooth' });
  });
});
