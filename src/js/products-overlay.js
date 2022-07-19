const buttonsStart = document.querySelectorAll('[js-overlay-start]');
const buttonsReturn = document.querySelectorAll('[js-overlay-return]');

buttonsStart.forEach(button => { 
    button.addEventListener('click', overlayStart);
});

function overlayStart() {
    console.log('overlay starts');
}



// products.forEach(product => {
//     product.onmouseover = () => {
//         // button.classList.toggle('animate__bounce');
//         button.classList.add('animate__animated', 'animate__swing');
//         // button.classList.add('animate__swing');
//     };

//     product.onmouseout = () => {
//         button.classList.remove('animate__animated', 'animate__swing');
//         // button.classList.remove('animate__swing');
//     };

// });
