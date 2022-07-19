const products = document.querySelectorAll('.card');
const button = document.querySelector('#animated-button');


products.forEach(product => {
    product.onmouseover = () => {
        // button.classList.toggle('animate__bounce');
        button.classList.add('animate__animated', 'animate__swing');
        // button.classList.add('animate__swing');
    };

    product.onmouseout = () => {
        button.classList.remove('animate__animated', 'animate__swing');
        // button.classList.remove('animate__swing');
    };

});


