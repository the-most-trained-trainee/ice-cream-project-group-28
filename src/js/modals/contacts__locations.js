(() => {
  const refs = {
    openLocationsModalBtn: document.querySelector('[data-locations-modal-open]'),
    closeLocationsModalBtn: document.querySelector('[data-locations-modal-close]'),
    modal: document.querySelector('[data-locations-modal]'),
  };

  refs.openLocationsModalBtn.addEventListener('click', toggleModal);
  refs.closeLocationsModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('locations-modal__is-hidden');
    document.body.classList.toggle('no-scroll');
  }
})();
