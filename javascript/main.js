let header = document.querySelector('.header');
let headerScroll = window.pageXOffset;
let headerMenuBtn = document.querySelector('.header-menu__btn');
let headerSidebar = document.querySelector('.header-sidebar');
let sidebarCloseBtn = document.querySelector('.sidebar-close__btn');
let sidebarShadow = document.querySelector('.sidebar-shadow');

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