(() => {
  const refs = {
    openFranchiseModalBtn: document.querySelector('[data-franchise-modal-open]'),
    closeFranchiseModalBtn: document.querySelector('[data-franchise-modal-close]'),
    modal: document.querySelector('[data-franchise-modal]'),
  };

  refs.openFranchiseModalBtn.addEventListener('click', toggleModal);
  refs.closeFranchiseModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('franchise-modal__is-hidden');
    document.body.classList.toggle('no-scroll');
  }
})();
