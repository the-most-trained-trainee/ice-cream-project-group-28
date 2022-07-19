(() => {
  const refs = {
    openAboutModalBtn: document.querySelector('[about-modal-open]'),
    closeAboutModalBtn: document.querySelector('[about-modal-close]'),
    modal: document.querySelector('[about-modal]'),
  };

  refs.openAboutModalBtn.addEventListener('click', toggleModal);
  refs.closeAboutModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('about-modal__is-hidden');
    document.body.classList.toggle('no-scroll');
  }
})();

// .no-scroll {
//   overflow: hidden;
// }
