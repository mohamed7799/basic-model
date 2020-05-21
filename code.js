"use strict"
let op = document.getElementById("model-card__open");

let model = document.getElementById("model-text");

let clos = document.getElementById("close");

op.addEventListener("click", () => {
    model.style.display = "flex";
})

clos.addEventListener("click", () => {
    model.style.display = "none";
})
