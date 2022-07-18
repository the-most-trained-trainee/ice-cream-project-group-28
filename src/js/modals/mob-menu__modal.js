(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),

    // menu: document.querySelector(".backdrop-mob"),
    menu: document.querySelector('.header__menu--js'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleMenu() {
    refs.menu.classList.toggle('is-open');
    refs.body.classList.toggle('no-scroll');
  }

  function toggleModal() {
    refs.modal.classList.toggle('mob-menu-modal__is-hidden');
    if (refs.menu.classList.contains('is-open')) {
      toggleMenu();
    }
  }
})();

const productsCounterContainers = document.getElementsByClassName('stepper');

for (const productsCounterContainer of productsCounterContainers) {
  const [plusButton] =
    productsCounterContainer.getElementsByClassName('plus-button');
  const [minusButton] =
    productsCounterContainer.getElementsByClassName('minus-button');
  const [inputCounter] =
    productsCounterContainer.getElementsByClassName('products-counter');

  plusButton.addEventListener('click', () => {
    changeInputCount(inputCounter, true);
  });
  minusButton.addEventListener('click', () => {
    changeInputCount(inputCounter, false);
  });
}

function changeInputCount(inputContainer, isIncrement) {
  const min = inputContainer.getAttribute('min');
  const max = inputContainer.getAttribute('max');
  const step = parseInt(inputContainer.getAttribute('step'));
  const inputValue = parseInt(inputContainer.value);

  if (isIncrement && inputValue < max) {
    inputContainer.value = inputValue + step;
  } else if (inputValue > min) {
    inputContainer.value = inputValue - step;
  }
}
