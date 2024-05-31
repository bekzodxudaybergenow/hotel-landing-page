let header = document.querySelector('.header');
let headerScroll = window.pageXOffset;

window.addEventListener('scroll', () => {
    let currentScroll = window.pageYOffset;

    if (headerScroll < currentScroll) {
        header.style = 'top: -290px';
    }
    else if (currentScroll == 0) {
        header.style = 'box-shadow: none;';
    }
    else {
        header.style = 'top: 0';
    }
    headerScroll = currentScroll;
})