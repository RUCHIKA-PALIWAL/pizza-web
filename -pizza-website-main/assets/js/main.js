/*=============== SHOW MENU ===============*/

const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () =>{
    navMenu.classList.add("show-menu")
  })
}

if (navClose) {
  navClose.addEventListener("click", () =>{
    navMenu.classList.remove("show-menu")
  })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav--link")

const linkAction = () =>{
  const navMenu = document.getElementById("nav-menu")

  navMenu.classList.remove("show-menu")
}
navLink.forEach(n => n.addEventListener("click", linkAction))

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};
window.addEventListener("scroll", shadowHeader);

/*=============== SWIPER POPULAR ===============*/

const swiperPopular = new Swiper(".popular--swiper", {
  loop: true,
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: "auto",
});

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const section = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionClass = document.querySelector(
        ".nav--menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionClass.classList.remove("active-link");
    }
  });
};

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 300,
});

sr.reveal(`.home--data, .popular--container .footer`);
sr.reveal(`.home--board`, { delay: 700, distance: "100px", origin: "right" });
sr.reveal(`.home--pizza`, {
  delay: 1400,
  distance: "100px",
  origin: "bottom",
  rotate: { z: -90 },
});
sr.reveal(`.home--ingredient`, { delay: 2000, interval: 100 });
sr.reveal(`.about--data, .recipe--list, .contact--data`, { origin: "right" });
sr.reveal(`.about--img, .recipe--img, .contact--image`, { origin: "left" });
sr.reveal(`.products--card`, { interval: 100 });
