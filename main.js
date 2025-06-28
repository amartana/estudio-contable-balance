const mainMenu  = document.getElementById('navbar__menu-icon')
const mainClose  = document.getElementById('navbar__menu-close')
const mainNav  = document.getElementById('main-nav')
const moreServices  = document.getElementById('services__types-title')
const allServices  = document.getElementById('services__types')
const closeMoreServices = document.getElementById('services__types-close')
const moreServicesFlecha = document.getElementById('services__types-title-flecha')



const toggleMenu = () => {
    mainNav.classList.toggle('inactive')
    mainClose.classList.toggle('inactive')
}

const toggleAllServices = () => {
    if(allServices.classList.contains('inactive')) {
       allServices.classList.toggle('inactive')
    moreServicesFlecha.style.transform = 'rotateX(180deg) translate(0px, -2px)' 
    allServices.style.boxShadow = ('2px 2px 2px 2px #f5efef')
    } else {
        allServices.classList.toggle('inactive')
moreServicesFlecha.style.transform = 'rotate(0deg)'
    allServices.style.boxShadow = ('none')
    }
     
    
}


mainMenu.addEventListener('click', toggleMenu)
mainClose.addEventListener('click', toggleMenu)
moreServices.addEventListener('click', toggleAllServices)
closeMoreServices.addEventListener('click', toggleAllServices)