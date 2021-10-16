let a = document.getElementById("menu-button");
let hdr = document.getElementById("titre");
a.onmouseover = function() {
    hdr.classList.add("titreOpa");
}
a.onmouseout = function() {
    hdr.classList.remove("titreOpa");
}