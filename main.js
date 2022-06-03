window.addEventListener('scroll', onScroll)
onScroll()

function onScroll(){
    shownavOnScroll()
    showBackToButton()
}

function shownavOnScroll(){
    if(scrollY > 0){
        navi.classList.add('scroll')
    } else{
        navi.classList.remove('scroll')
    }
}

function showBackToButton(){
    if(scrollY > 1370){
        BackToTopButton.classList.add('show')
    } else{
        BackToTopButton.classList.remove('show')
    }
}

function openMenu(){
    document.body.classList.add('menu-expanded')
}

function closeMenu(){
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 800,
}).reveal(`#home,
 #home img, 
 #home .stats, 
 #services,
 #services header,
 #services .card
 #about,
 #about header,
 #about .content`)