export default function animationScroll() {
  const elements = document.querySelectorAll('[data-animation-scroll]');
  const windowHalf = window.innerHeight * 0.5;

  function animaScroll() {
    elements.forEach((element) => {
      const sectionTop = element.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - windowHalf < 0;

      if (isSectionVisible) {
        element.classList.add('active');
      } else {
        element.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', animaScroll);

  animaScroll();
}
