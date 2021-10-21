let a = document.getElementById("menu-button");
let hdr = document.getElementById("titre");
a.onmouseover = function() {
    hdr.classList.add("titreOpa");
}
a.onmouseout = function() {
    hdr.classList.remove("titreOpa");
}

/*---------------------------*/
let menuB = document.getElementById("menu-button");
let buttonBurger = document.getElementById("menuBurger");

buttonBurger.onclick = function() {
    menuB.classList.toggle("closeMenu");
    menuB.classList.toggle("openMenu");
    hdr.classList.toggle("titreOpa")
}