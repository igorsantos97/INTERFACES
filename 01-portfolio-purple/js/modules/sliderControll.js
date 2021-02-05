export default function sliderControll() {
  const sliderItens = document.querySelectorAll('[data-slider="item"]');
  const sliderBtns = document.querySelectorAll('[data-slider="btn"] li');

  function activeSlider(index) {
    sliderBtns.forEach((btn) => btn.classList.remove('active'));
    sliderItens.forEach((item) => item.classList.remove('active'));

    sliderItens[index].classList.add('active');
    sliderBtns[index].classList.add('active');
  }

  sliderBtns.forEach((btn, index) =>
    btn.addEventListener('click', function () {
      activeSlider(index);
    }),
  );
}
