let header = document.querySelector('.header');
let headerScroll = window.pageXOffset;
let headerMenuBtn = document.querySelector('.header-menu__btn');
let headerSidebar = document.querySelector('.header-sidebar');
let sidebarCloseBtn = document.querySelector('.sidebar-close__btn');
let sidebarShadow = document.querySelector('.sidebar-shadow');
let bookingForm = document.querySelectorAll('.booking-form');
let bookingItems = document.querySelectorAll('.booking-item');
let bookingItemInput = document.querySelector('.booking-item__input');
let bookingItemArrow = document.querySelector('.booking-item__arrow');

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

headerMenuBtn.addEventListener('click', () => {
    headerSidebar.classList.add('sidebarHide');
    sidebarShadow.classList.remove('hide');
})
sidebarCloseBtn.addEventListener('click', () => {
    headerSidebar.classList.remove('sidebarHide');
    sidebarShadow.classList.add('hide');
})
sidebarShadow.addEventListener('click', () => {
    headerSidebar.classList.remove('sidebarHide');
    sidebarShadow.classList.add('hide');
})



// Booking Section

bookingItems.forEach((item) => {
    item.addEventListener('click', () => {
        item.nextElementSibling.classList.toggle('booking-active');
    })
})


// Benefits section Play-Pause

let playBtn = document.querySelector('.benefits-video-play');
let benefitsClip = document.querySelector('.benefits-video-clip');
let count = 0;

benefitsClip.addEventListener('click', () => {
    if(count == 0) {
        count = 1;
        benefitsClip.play();
        playBtn.style.display = 'none';
    }
    else {
        count = 0
        benefitsClip.pause();
        playBtn.style.display = 'block';
    }
})
