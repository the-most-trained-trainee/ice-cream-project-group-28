const startButtons = document.querySelectorAll('[js-overlay-start]');
const returnButtons = document.querySelectorAll('[js-overlay-return]');
const cards = document.querySelectorAll('.card__wrapper');

cards.forEach(card => {
    
    let cardBgColor = getComputedStyle(card).backgroundColor ;
    let overlay = card.querySelector('.products__overlay');
    overlay.style.backgroundColor = cardBgColor;
});

startButtons.forEach(button => { 
    button.addEventListener('click', function (event) { 
        event.preventDefault;
        let target = event.target;
        
        // console.log(target.closest('.card__wrapper').querySelector('.products__overlay'));
        
        let overlay = target.closest('.card__wrapper').querySelector('.products__overlay');
        
        overlay.classList.add('products__overlay--start');

    });
});

returnButtons.forEach(button => { 
    button.addEventListener('click', function (event) { 
        event.preventDefault;
        let target = event.target;
        
        // console.log(target.closest('.card__wrapper').querySelector('.products__overlay'));
        let overlay = target.closest('.products__overlay');
        
        overlay.classList.remove('products__overlay--start');

    });
});


