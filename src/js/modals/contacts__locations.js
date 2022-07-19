(() => {
  const refs = {
    openLocationsModalBtn: document.querySelector('[locations-modal-open]'),
    closeLocationsModalBtn: document.querySelector('[locations-modal-close]'),
    modal: document.querySelector('[locations-modal]'),
  };

  refs.openLocationsModalBtn.addEventListener('click', toggleModal);
  refs.closeLocationsModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('locations-modal__is-hidden');
    document.body.classList.toggle('no-scroll');
  }
})();
