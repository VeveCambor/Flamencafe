// NAVBAR
document.querySelector('.menu-icon').addEventListener('click', function() {
  document.querySelector('.nav-links').classList.toggle('hide');
});

window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  const sectionHome = document.getElementById('home').offsetTop + document.getElementById('home').offsetHeight;
  const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

  if (scrollPosition >= sectionHome) {
    navbar.classList.add('nav-other-sections');
  } else {
    navbar.classList.remove('nav-other-sections');
  }
});

// CONTACT FORM
const validateForm = () => {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const errorElement = document.getElementById('error-message');
  let errorMessage = '';

  if (name === '' || name == null) {
    errorMessage = 'Name is required';
  }

  if (email === '' || email == null) {
    errorMessage = 'Email is required';
  }

  if (message === '' || message == null) {
    errorMessage = 'Message is required';
  }

  if (errorMessage !== '') {
    errorElement.innerText = errorMessage;
    errorElement.style.display = 'block';
    return false;
  }
}

// document.getElementById('contact-form').addEventListener('submit', validateForm);


//GALLERY
function changeMainImage(src) {
  document.getElementById('mainImage').src = src;
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.prev-arrow').addEventListener('click', () => {
    document.querySelector('.preview-slider').scrollLeft -= 110;
  });

  document.querySelector('.next-arrow').addEventListener('click', () => {
    document.querySelector('.preview-slider').scrollLeft += 110;
  });
});


