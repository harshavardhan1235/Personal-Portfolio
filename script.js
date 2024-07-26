


var typed = new Typed('#element', {
    strings: ['<i>Web Developer</i>', '<i>Designer</i>', '<i>Freelancer</i>'],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
  });

  
  document.addEventListener('DOMContentLoaded', () => {
      const form = document.getElementById('contact-form');
      
      form.addEventListener('submit', (event) => {
          event.preventDefault();
          
          const name = document.getElementById('name').value;
          const email = document.getElementById('email').value;
          const message = document.getElementById('message').value;
          
          if (name && email && message) {
              alert('Message sent!');
              form.reset();
          } else {
              alert('Please fill out all fields.');
          }
      });
  });
