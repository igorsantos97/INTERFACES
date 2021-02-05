export default function modal() {
  const containerModal = document.querySelector('[data-modal="container"]');
  const openBtn = document.querySelector('[data-modal="abrir"]');
  const closeBtn = document.querySelector('[data-modal="fechar"]');

  function toggleModal() {
    containerModal.classList.toggle('active');
  }

  openBtn.addEventListener('click', toggleModal);
  closeBtn.addEventListener('click', toggleModal);
  containerModal.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-container')) toggleModal();
  });
}
