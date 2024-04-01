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

// CONTACT FORM
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Zabrání klasickému odeslání formuláře

    var formData = new FormData(this);
    var errorMessage = document.getElementById('error-message');

    fetch('sendEmail.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text()) // Převede odpověď na text
    .then(data => {
        // Zpracování odpovědi serveru
        errorMessage.style.display = 'block';
        errorMessage.textContent = data;
        errorMessage.style.color = 'green'; // Nastaví text zprávy na zelenou, pokud je vše v pořádku
        // Vymaže formulář po úspěšném odeslání
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    })
    .catch((error) => {
        // Zpracování chyby
        errorMessage.style.display = 'block';
        errorMessage.style.color = 'red'; // Zobrazí chybovou zprávu v červené barvě
        errorMessage.textContent = 'Něco se pokazilo, zkuste to prosím znovu.';
    });
});


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


