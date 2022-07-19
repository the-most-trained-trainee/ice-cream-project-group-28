(() => {
  const refs = {
    openFranchiseModalBtn: document.querySelector('[franchise-modal-open]'),
    closeFranchiseModalBtn: document.querySelector('[franchise-modal-close]'),
    modal: document.querySelector('[franchise-modal]'),
  };

  refs.openFranchiseModalBtn.addEventListener('click', toggleModal);
  refs.closeFranchiseModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('franchise-modal__is-hidden');
    document.body.classList.toggle('no-scroll');
  }
})();
