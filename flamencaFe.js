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


