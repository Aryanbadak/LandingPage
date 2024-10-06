burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.nav-list')
leftnav = document.querySelector('.left-nav')
burger.addEventListener('click', () => {
    leftnav.classList.toggle('v-class-resp')
    navlist.classList.toggle('v-class-resp')
    navbar.classList.toggle('n-height-resp')

})