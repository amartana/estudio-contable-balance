const mainMenu = document.getElementById('navbar__menu-icon')
const mainClose = document.getElementById('navbar__menu-close')
const mainNav = document.getElementById('main-nav')
const moreServices = document.getElementById('services__types-title')
const allServices = document.getElementById('services__types')
const closeMoreServices = document.getElementById('services__types-close')
const moreServicesFlecha = document.getElementById('services__types-title-flecha')
const linkWa = document.getElementById('link-whatsapp')
const msjsWa = {
    basic: '¡Hola! Quisiera más información sobre sus servicios.'
}



const linkWaBasic = () => {
    let link = `https://wa.me/5491173636615?text=${encodeURIComponent(msjsWa.basic)}`
    linkWa.href = link
    console.log(link)
}


const toggleMenu = () => {
    mainNav.classList.toggle('inactive-main')
    mainClose.classList.toggle('inactive-main')
}

const toggleAllServices = () => {
    if (allServices.classList.contains('inactive-services')) {
        allServices.classList.toggle('inactive-services')
        moreServicesFlecha.style.transform = 'rotateX(180deg) translate(0px, -2px)'
        allServices.style.boxShadow = ('2px 2px 2px 2px #f5efef')
    } else {
        allServices.classList.toggle('inactive-services')
        moreServicesFlecha.style.transform = 'rotate(0deg)'
        allServices.style.boxShadow = ('none')
    }
}


mainMenu.addEventListener('click', toggleMenu)
mainClose.addEventListener('click', toggleMenu)
moreServices.addEventListener('click', toggleAllServices)
closeMoreServices.addEventListener('click', toggleAllServices)
linkWa.addEventListener('click', linkWaBasic)