// NAVBAR
document.querySelector('.menu-icon').addEventListener('click', function() {
  this.classList.toggle('active');
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


