let linksShop = document.querySelector(".shop");
let titleSection = document.querySelector(".header__section__text");
let sectionLinks = document.querySelector(".main__sectionVideo__section2");
let bdy = document.querySelector('html')
let sectiongrimod = document.querySelector(".main__sectionGridModel");
let toggle = true, toggle1 = true, toggle2 = true, toggle3 = true , toggle4 = true;
let allDrawer = document.querySelectorAll(".drawer")
let allMenuHidden = Array.from(document.querySelectorAll(".hidden-menu"))
let allArrow = Array.from(document.querySelectorAll('.arrow'))
const menurideau = document.querySelector('.menu-rideau')
const btnNav = document.querySelector(".btn-nav");
let x = document.querySelectorAll('selector');
const searchL = document.querySelector('.header__nav__linksright__SearchLine');
const searchContain = document.querySelector('.header__sectionSearch');

allDrawer.forEach((drawer)=>{
   drawer.addEventListener('click', (e)=>{
    e.preventDefault()
    switch (e.currentTarget.getAttribute("data-attr")) {
      case "shop":
        toggle = !toggle
        allMenuHidden[0].toggleAttribute("hidden")
        toggle ? allArrow[0].src = "ressources/arrow-down-s-line.svg" : allArrow[0].src = "ressources/arrow-up-s-line.svg"
        break;
      case "money":
        toggle1 = !toggle1
        allMenuHidden[1].toggleAttribute("hidden")
        toggle1 ? allArrow[1].src = "ressources/arrow-down-s-line.svg" : allArrow[1].src = "ressources/arrow-up-s-line.svg"
        break;
      case "language":
        toggle2 = !toggle2
        allMenuHidden[2].toggleAttribute("hidden")
        toggle2 ? allArrow[2].src = "ressources/arrow-down-s-line.svg" : allArrow[2].src = "ressources/arrow-up-s-line.svg"
        break;
      case "help":
        toggle3 = !toggle3
        allMenuHidden[3].toggleAttribute("hidden")
        toggle3 ? allArrow[3].src = "ressources/arrow-down-s-line.svg" : allArrow[3].src = "ressources/arrow-up-s-line.svg"
        break;
      case "brand":
        toggle4 = !toggle4
        allMenuHidden[4].toggleAttribute("hidden")
        toggle4 ? allArrow[4].src = "ressources/arrow-down-s-line.svg" : allArrow[4].src = "ressources/arrow-up-s-line.svg"
        break;
      default:
        break;
    }
   })
})

searchL.addEventListener('click', () =>{
  searchContain.classList.toggle('searchHidden')
})

btnNav.addEventListener("click", () => {
  btnNav.classList.toggle("active");
  bdy.classList.toggle("scroll");
  menurideau.classList.toggle("show");
});

const headerNav = document.querySelector('.header__nav')
const sectionHidden = document.querySelector('.header__sectionHidden')
const shopEvent =  document.querySelector('.shop')

let val = false
shopEvent.addEventListener('mouseover' , () => {
  sectionHidden.classList.add('header__hidden')
  
})

shopEvent.addEventListener('mouseleave' , () => {
  setTimeout(() => {
    if(!val){
      sectionHidden.classList.remove('header__hidden')
    }
  }, 250);
  
})

sectionHidden.addEventListener('mouseenter' , () =>{
  val = true
  sectionHidden.classList.add('header__hidden')
})

sectionHidden.addEventListener('mouseleave' , () =>{
  val = false
  sectionHidden.classList.remove('header__hidden')
  
})








 











