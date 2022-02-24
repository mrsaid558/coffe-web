/* start show menu */

const
    navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById("nav__toggle"),
    navClose = document.getElementById("nav-close");
// show
if (navToggle) {
    navToggle.onclick = function() {
        navMenu.classList.add("show-menu");
    }
}

// hidden
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}

console.log("this is js");

/* end show menu */

/* remove menu mobile */
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
    const navMenu = document.getElementById("nav-menu");
    // when you click on each link in the nav we remove the show
    navMenu.classList.remove("show-menu");
}
navLink.forEach(item => item.addEventListener("click", linkAction));
/* remove menu mobile */


/* change background header */

function scrollHeader() {
    const header = document.getElementById("header");
    // when scroll is greater than 50 viewport height
    if (this.scrollY >= 50) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove("scroll-header");
    }
}
window.addEventListener("scroll", scrollHeader);

/* change background header */