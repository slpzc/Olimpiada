// анимация появления навигации при скролле ^_^

const navigationBar = document.querySelector('nav')
let scrolltop = pageYOffset;

window.addEventListener('scroll', function(){
  if (pageYOffset > scrolltop) { 
    navigationBar.classList.remove('scrolled')
  } else {
    navigationBar.classList.add('scrolled')
  }
  scrolltop = pageYOffset; 
});