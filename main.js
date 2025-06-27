const mainMenu  = document.getElementById('navbar__menu-icon')
const mainClose  = document.getElementById('navbar__menu-close')
const mainNav  = document.getElementById('main-nav')
const moreServices  = document.getElementById('services__types-title')
const allServices  = document.getElementById('services__types')
const closeMoreServices = document.getElementById('services__types-close')


const toggleMenu = () => {
    mainNav.classList.toggle('inactive')
    mainClose.classList.toggle('inactive')
}

const toggleAllServices = () => {
    allServices.classList.toggle('inactive')
}


mainMenu.addEventListener('click', toggleMenu)
mainClose.addEventListener('click', toggleMenu)
moreServices.addEventListener('click', toggleAllServices)
closeMoreServices.addEventListener('click', toggleAllServices)