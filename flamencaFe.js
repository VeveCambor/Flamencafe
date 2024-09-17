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
// function changeMainImage(src) {
//   document.getElementById('mainImage').src = src;
// }

// document.addEventListener('DOMContentLoaded', function() {
//   document.querySelector('.prev-arrow').addEventListener('click', () => {
//     document.querySelector('.preview-slider').scrollLeft -= 110;
//   });

//   document.querySelector('.next-arrow').addEventListener('click', () => {
//     document.querySelector('.preview-slider').scrollLeft += 110;
//   });
// });
document.addEventListener('DOMContentLoaded', function() {
  // Získání modálního okna a obrázku
  const modal = document.getElementById("myModal");
  const modalImg = document.getElementById("img01");

  // Přidání události onclick pro hlavní obrázek
  const mainImage = document.getElementById('mainImage');
  mainImage.addEventListener('click', function(){
    modal.style.display = "block";
    modalImg.src = this.src;
  
    // Skryje navigaci
    document.getElementById('navbar').style.visibility = 'hidden';
  });
  
  const span = document.getElementsByClassName("close")[0];
  span.addEventListener('click', function() { 
    modal.style.display = "none";
    // Zobrazí navigaci
    document.getElementById('navbar').style.visibility = 'visible';
  });

  modalImg.addEventListener('click', function() {
    this.classList.toggle('zoomed');
  });

  // Přidání události onclick pro všechny náhledové obrázky
  const previewPhotos = document.getElementsByClassName("preview-photo");
  for (let photo of previewPhotos) {
    photo.addEventListener('click', function() {
      mainImage.src = this.src;
    });
  }

  document.querySelector('.prev-arrow').addEventListener('click', () => {
    document.querySelector('.preview-slider').scrollLeft -= 110;
  });

  document.querySelector('.next-arrow').addEventListener('click', () => {
    document.querySelector('.preview-slider').scrollLeft += 110;
  });

  //SOUNDCLOUD
  document.getElementById('play-soundcloud').addEventListener('click', () => {
  const playerContainer = document.getElementById('soundcloud-player');
  const trackUrl = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1867969104&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true";
  let iframe = playerContainer.querySelector('iframe');

  if (playerContainer.style.display === 'none' || !iframe) {
      playerContainer.style.display = 'block';
      isPlayerOpen = true;

      if (!iframe) {
          iframe = document.createElement('iframe');
          iframe.width = "100%";
          iframe.height = "170";
          iframe.scrolling = "no";
          iframe.frameBorder = "no";
          iframe.allow = "autoplay";
          playerContainer.appendChild(iframe);
      }

      iframe.src = trackUrl;
  } else {
      playerContainer.style.display = 'none';
      isPlayerOpen = false;
      iframe.src = '';
  }
}); 
});
