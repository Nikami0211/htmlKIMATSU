document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = link.getAttribute('href'); 
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });