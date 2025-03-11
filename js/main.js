const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.querySelector('.header__mobile');

menuBtn.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
});