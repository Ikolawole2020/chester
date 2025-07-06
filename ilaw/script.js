const nav = document.querySelector('nav');
const title = document.getElementById('nav-title')

window.addEventListener('scroll', () => {
    if (window.scrollY > 0){
        nav.classList.add('fixed');

        title.style.display = 'inline-block';
    }else{
        nav.classList.remove('fixed')
        title.style.display = 'none';
    }
    
})

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.practice-area .card');
    const cardFour = document.querySelector('.card-four');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const cardDetails = card.querySelector('.card-details');
            if (!cardDetails) return;

            // Hide original card-four
            cardFour.style.display = 'none';

            // Create or select replacement container
            let replacement = document.querySelector('.card-details-replacement');
            if (!replacement) {
                replacement = document.createElement('div');
                replacement.className = 'card-details-replacement';
                cardFour.parentNode.insertBefore(replacement, cardFour.nextSibling);
            }

            // Set replacement content and style
            replacement.innerHTML = cardDetails.innerHTML;
            replacement.style.display = 'block';
            replacement.style.border = '1px solid rgba(31, 45, 42, 0.96)';
            replacement.style.padding = '15px';
            replacement.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
            replacement.style.width = '450px'
        });
    });

    // Scroll to top functionality for footer up arrow
    const upArrow = document.querySelector('.footer-arrow');
    if (upArrow) {
        upArrow.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Partners section image slider
    const recognitions = document.querySelector('.recognitions');
    const navigation = document.querySelector('.partners .title .navigation');
    const leftArrow = navigation.querySelector('.fa-arrow-left');
    const rightArrow = navigation.querySelector('.fa-arrow-right');

    const imageWidth = 100 + 10 + 20; 
    let currentPosition = 0; // 0 means showing first 8 images, 1 means shifted to show last 2

    rightArrow.addEventListener('click', () => {
        if (currentPosition === 0) {
            recognitions.style.transform = `translateX(-${imageWidth * 2}px)`;
            currentPosition = 1;
        }
    });

    leftArrow.addEventListener('click', () => {
        if (currentPosition === 1) {
            recognitions.style.transform = 'translateX(0)';
            currentPosition = 0;
        }
    });
});
