let offset = 0; // Смещение от левого края
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', () => {
    offset += 768; 

    if(offset > 2304){
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
})

document.querySelector('.slider-prev').addEventListener('click', () => {
    offset = offset - 768; 

    if(offset < 0){
        offset = 2304;
    }
    sliderLine.style.left = -offset + 'px';
})
