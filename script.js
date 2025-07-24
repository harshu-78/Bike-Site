const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

const cookiePopup = document.getElementById('cookie-popup');
const acceptCookie = document.getElementById('accept-cookie');

const authModal = document.getElementById('auth-modal');
const openAuth = document.getElementById('open-auth');
const closeAuth = document.getElementById('close-auth');

const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const showSignup = document.getElementById('show-signup');
const showLogin = document.getElementById('show-login');

openAuth.addEventListener('click', () => {
  authModal.classList.add('show');
  loginForm.classList.remove('hidden');
  signupForm.classList.add('hidden');
});

closeAuth.addEventListener('click', () => {
  authModal.classList.remove('show');
});

showSignup.addEventListener('click', () => {
  loginForm.classList.add('hidden');
  signupForm.classList.remove('hidden');
});

showLogin.addEventListener('click', () => {
  signupForm.classList.add('hidden');
  loginForm.classList.remove('hidden');
});

window.addEventListener('click', (e) => {
  if (e.target === authModal) {
    authModal.classList.remove('show');
  }
});



if (!localStorage.getItem('cookieAccepted')) {
  cookiePopup.style.display = 'flex';
}

acceptCookie.addEventListener('click', () => {
  cookiePopup.style.display = 'none';
  localStorage.setItem('cookieAccepted', true);
});


  const swiper = new Swiper('.swiper', {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    grabCursor: true,

    breakpoints: {
      0: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      }
    },
  });


menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__container .section__description", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__link", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".shop__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
  interval: 500,
});
ScrollReveal().reveal(".about__stats", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".banner__container p", {
  duration: 1000,
  interval: 500,
});






