/*---------------gestion opacit" du titre au survol de la nav-------------*/
let a = document.getElementById("menu-button");
let hdr = document.getElementById("titre");
a.onmouseover = function() {
    hdr.classList.toggle("titreOpaDown");
}
a.onmouseout = function() {
    hdr.classList.toggle("titreOpaDown");
}

/*------------menu burger---------------*/
let menuB = document.getElementById("menu-button");
let buttonBurger = document.getElementById("menuBurger");
let buttonBurgerClose = document.getElementById("closeBurger");
let iconUp = document.getElementById("menuBurger");
let iconClose = document.getElementById("closeBurger");

buttonBurger.onclick = function() {
    menuB.classList.toggle("closeMenu");
    menuB.classList.toggle("openMenu");
    hdr.classList.toggle("titreOpa");
    iconUp.classList.toggle("iconBDisplayNone");
    iconClose.classList.toggle("iconBDisplayUp");
    iconClose.classList.toggle("iconBDisplayNone");
}
buttonBurgerClose.onclick = function() {
    menuB.classList.toggle("closeMenu");
    menuB.classList.toggle("openMenu");
    hdr.classList.toggle("titreOpa");
    iconUp.classList.toggle("iconBDisplayUp");
    iconUp.classList.toggle("iconBDisplayNone");
    iconClose.classList.toggle("iconBDisplayUp");
    iconClose.classList.toggle("iconBDisplayNone");
}