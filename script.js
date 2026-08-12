console.log("Site iniciado!");

const botao = document.querySelector("#btn-info");

const cards = document.querySelector("#info-cards");

botao.addEventListener("click", function() {

    cards.style.display = "flex";

});

const btnAbout = document.querySelector("#btn-about");

const modalAbout = document.querySelector("#modal-about");

const closeAbout = document.querySelector("#close-about");

btnAbout.addEventListener("click", function(event) {

    event.preventDefault();

    modalAbout.style.display = "flex";

});

closeAbout.addEventListener("click", function() {

    modalAbout.style.display = "none";

});