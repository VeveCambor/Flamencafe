document.addEventListener('DOMContentLoaded', () => {
  // === NAVBAR TOGGLE ===
  const menuIcon = document.querySelector('.menu-icon');
  const navLinks = document.querySelector('.nav-links');
  const navbar = document.getElementById('navbar');
  const sectionHome = document.getElementById('uvod'); // Správný ID byl "uvod", ne "home"

  menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('active');
    navLinks.classList.toggle('hide');
  });

  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const homeBottom = sectionHome.offsetTop + sectionHome.offsetHeight;

    navbar.classList.toggle('nav-other-sections', scrollPosition >= homeBottom);
  });

  // === GALLERY MODAL ===
  const modal = document.getElementById('myModal');
  const modalImg = document.getElementById('img01');
  const mainImage = document.getElementById('mainImage');
  const previewPhotos = document.querySelectorAll('.preview-photo');
  const modalClose = modal.querySelector('.close');
  const modalPrev = modal.querySelector('.modal-arrow_p');
  const modalNext = modal.querySelector('.modal-arrow_n');
  const images = Array.from(previewPhotos).map(img => img.src);
  let currentIndex = 0;

  const showModalImage = (src) => {
    modal.style.display = 'block';
    modalImg.src = src;
    navbar.style.visibility = 'hidden';
    currentIndex = images.indexOf(src);
  };

  const closeModal = () => {
    modal.style.display = 'none';
    navbar.style.visibility = 'visible';
  };

  const changeImage = (direction) => {
    currentIndex = (currentIndex + direction + images.length) % images.length;
    modalImg.src = images[currentIndex];
  };

  mainImage.addEventListener('click', () => showModalImage(mainImage.src));
  modalClose.addEventListener('click', closeModal);
  modalImg.addEventListener('click', () => modalImg.classList.toggle('zoomed'));
  previewPhotos.forEach(photo => {
    photo.addEventListener('click', () => (mainImage.src = photo.src));
  });

  document.querySelector('.prev-arrow').addEventListener('click', () => {
    document.querySelector('.preview-slider').scrollLeft -= 120;
  });

  document.querySelector('.next-arrow').addEventListener('click', () => {
    document.querySelector('.preview-slider').scrollLeft += 120;
  });

  modalPrev.addEventListener('click', () => changeImage(-1));
  modalNext.addEventListener('click', () => changeImage(1));

  document.addEventListener('keydown', (event) => {
    if (modal.style.display === 'block') {
      if (event.key === 'ArrowRight') changeImage(1);
      if (event.key === 'ArrowLeft') changeImage(-1);
      if (event.key === 'Escape') closeModal();
    }
  });

  // === SOUNDCLOUD PLAYER ===
  const playButton = document.getElementById('play-soundcloud');
  const playerContainer = document.getElementById('soundcloud-player');
  const trackUrl = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1867969104&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true";

  playButton.addEventListener('click', () => {
    const iframe = playerContainer.querySelector('iframe');

    if (!iframe) {
      const newIframe = document.createElement('iframe');
      newIframe.width = "100%";
      newIframe.height = "170";
      newIframe.scrolling = "no";
      newIframe.frameBorder = "no";
      newIframe.allow = "autoplay";
      newIframe.src = trackUrl;
      playerContainer.appendChild(newIframe);
      playerContainer.style.display = 'block';
    } else {
      if (playerContainer.style.display === 'none') {
        iframe.src = trackUrl;
        playerContainer.style.display = 'block';
      } else {
        iframe.src = '';
        playerContainer.style.display = 'none';
      }
    }
  });
});