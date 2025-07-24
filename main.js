
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

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



menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});
