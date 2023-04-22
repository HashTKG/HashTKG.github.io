const toggleIcon = document.querySelector('.toggle-icon');

toggleIcon.addEventListener('click', () =>{
    toggleIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
})

// menu icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

//remove menu icon navbar when click navbar link (scroll)
window.onscroll = () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
