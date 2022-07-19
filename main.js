window.addEventListener("scroll", onScroll);
onScroll();

function onScroll() {
  shownavOnScroll();
  showBackToButton();

  activateMenuAtCurrentSection(home);
  activateMenuAtCurrentSection(services);
  activateMenuAtCurrentSection(about);
  activateMenuAtCurrentSection(contact);
}

function activateMenuAtCurrentSection(section) {
  
  //linha alvo
  const targetLine = scrollY + innerHeight / 2;

  //verificar se a seção passou da linha
  //quais dados vou precisar?

  //o topo da seção
  const sectionTop = section.offsetTop;

  // a altura da seção
  const sectionHeight = section.offsetHeight;

  //o topo da seção chegou ou ultrapassou a linha alvo
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;

  //informativo/testes
  //console.log('O topo da seção chegou ou passou da linha?', sectionTopReachOrPassedTargetLine)

  //verificar se a base está abaixo da linha alvo
  const sectionEndsAt = sectionTop + sectionHeight;

  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;

  //console.log('o fundo da seção passou da linha?', sectionEndPassedTargetLine)

  //limites da seção
  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine;

  //carregar o seletor ID "TODOS QUE ESTEJA NO HREF"do html para o JS
  const sectionId = section.getAttribute("id");
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);

  //sempre remove a classe active, caso entrar no IF adicione a classe.
  menuElement.classList.remove("active");
  if (sectionBoundaries) {
    menuElement.classList.add("active");
  }
}

function shownavOnScroll() {
  if (scrollY > 0) {
    navi.classList.add("scroll");
  } else {
    navi.classList.remove("scroll");
  }
}


function showBackToButton() {
  if (scrollY > 1370) {
    BackToTopButton.classList.add("show");
  } else {
    BackToTopButton.classList.remove("show");
  }
}

function openMenu() {
  document.body.classList.add("menu-expanded");
}

function closeMenu() {
  document.body.classList.remove("menu-expanded");
}

ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 800,
}).reveal(`#home,
 #home img, 
 #home .stats, 
 #services,
 #services header,
 #services .card
 #about,
 #about header,
 #about .content`);
