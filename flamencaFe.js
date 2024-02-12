// JavaScript
document.querySelector('.menu-icon').addEventListener('click', function() {
  document.querySelector('.nav-links').classList.toggle('hide');
});

document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM fully loaded and parsed');
  document.querySelectorAll('.gallery-item').forEach(item => {
    console.log('Adding click event listener to gallery item');
    item.addEventListener('click', event => {
      console.log('Gallery item clicked');
      const mainImage = document.getElementById('mainImage');
      const newImageSrc = event.target.getAttribute('data-img');
      console.log('New image src: ', newImageSrc);
      mainImage.src = newImageSrc;
      mainImage.alt = event.target.alt;
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  AOS.init({
    duration: 2000,
  });
});

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

document.getElementById('contact-form').addEventListener('submit', validateForm);


