// function toggleMenu() {
//   var navLinks = document.querySelector('.nav-links');
//   navLinks.classList.toggle('active');
// }

// JavaScript
// document.querySelector('.menu-icon').addEventListener('click', function() {
//   var navLinks = document.querySelector('.nav-links');
//   if (navLinks.style.display === 'none') {
//     navLinks.style.display = 'block';
//   } else {
//     navLinks.style.display = 'none';
//   }
// });

// JavaScript
document.querySelector('.menu-icon').addEventListener('click', function() {
  document.querySelector('.nav-links').classList.toggle('hide');
});