/* ------------------TOGGLE BUTTON--------------------- */

const navMenu = document.getElementById("nav-menu")
const navLink = document.querySelectorAll(".nav-link")
const hamburger = document.getElementById("hamburger")

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]")
    hamburger.classList.toggle('ri-close-large-line');
})

navLink.forEach(link => {
    link.addEventListener("click",()=>{
        navMenu.classList.toggle("left-[0]")
        hamburger.classList.toggle('ri-close-large-line')
    })
})

const swiper = new Swiper('.swiper', {
    // Optional parameters
    speed:400,
    spaceBetween:30,
    autoplay:{
        delay:3000,
        disableOnInteraction: false
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  grabCursor:true,
  breakpoints:{
    640:{
        slidesPerView:1
    },
    760:{
        slidesPerView:2
    },
    1024:{
        slidesPerView:3
    },
  },
   
  });

  /*show scroll up*/
  const scrollUp=()=>{
    const scrollUpBtn = document.getElementById("scroll-up")

    if(this.scrollY >=250){
        scrollUpBtn.classList.remove("-bottom-1/2")
        scrollUpBtn.classList.add("bottom-4")
    }else{
        scrollUpBtn.classList.add("-bottom-1/2")
        scrollUpBtn.classList.remove("bottom-4")
    }
  }

  window.addEventListener("scroll",scrollUp)

  /*CHANGE BACKGROUND HEADER*/
  const scrollHeader=()=>{
    const header = document.getElementById("navbar")

    if(this.scrollY >=50){
      header.classlist.add("border-b","border-yellow-500");
    } else{
      header.classList.remove("border-b","border-yellow-500");
    }
  }

  window.addEventListener("scroll",scrollHeader)

  /* SCROLL REVEAL ANIMATION */
  const sr=ScrollReveal({
    origin:"top",
    distance:"60px",
    duration:2500,
    delay:300,
    reset:true
  })

  sr.reveal('.home_data, .about_top,.popular__top,.review_top,.review_swiper,.footer__content,.copy__right')
  sr.reveal('.home_image',{delay:500,scale:0.5})
  sr.reveal('.service_card,.popular_card',{interval:100})
  sr.reveal('.about_leaf',{delay:1000,origin:"right"})
  sr.reveal('.about__item__1-content,.about__item__2-img',{origin:"right"})
  sr.reveal('.about__item__2-content,.about__item__1-img',{origin:"left"})  
  sr.reveal('.review__leaf,.footer__floral',{delay:1000,origin:"left"}) 