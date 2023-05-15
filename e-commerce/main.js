var mySwiper = new Swiper('.swiper-container', {
  // Opciones de configuración
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

function scrollToSection() {
  var section = document.getElementById("targetSection");
  section.scrollIntoView({ behavior: "smooth" });
}

function scrollToSection2() {
  var section = document.getElementById("targetSection2");
  section.scrollIntoView({ behavior: "smooth" });
}

function scrollToSection3() {
  var section = document.getElementById("targetSection3");
  section.scrollIntoView({ behavior: "smooth" });
}

function cart() {
  window.location.href = "cart.html";
}

function home() {
  window.location.href = "index.html"
}

var myArray = [{
  img: "img/milano.jpg",
  nomeCitta: "Milano",
  prezzo: 500,
  descrizione: "Milano, la vivace città italiana, famosa per la moda, il design e l'arte. Ricca di storia, cultura e delizie culinarie, è un luogo di dinamismo e fascino senza tempo.",
},
{
  img: "img/firenze.jpg",
  nomeCitta: "Firenze",
  prezzo: 800,
  descrizione: "Firenze, incantevole città toscana, culla del Rinascimento. Con il suo magnifico Duomo, il Ponte Vecchio e gli affascinanti musei, Firenze è un gioiello culturale da ammirare.",
},
{
  img: "img/torino.jpg",
  nomeCitta: "Torino",
  prezzo: 400,
  descrizione: "Torino, elegante città piemontese, famosa per la sua architettura barocca e la regale piazza Castello. Conosciuta anche per il caffè, il cioccolato e la Fiat, Torino offre un mix unico di storia, cultura e gustosi piaceri.",
},
{
  img: "img/milano.jpg",
  nomeCitta: "Milano",
  prezzo: 500,
  descrizione: "Milano, la vivace città italiana, famosa per la moda, il design e l'arte. Ricca di storia, cultura e delizie culinarie, è un luogo di dinamismo e fascino senza tempo.",
},
{
  img: "img/firenze.jpg",
  nomeCitta: "Firenze",
  prezzo: 800,
  descrizione: "Firenze, incantevole città toscana, culla del Rinascimento. Con il suo magnifico Duomo, il Ponte Vecchio e gli affascinanti musei, Firenze è un gioiello culturale da ammirare.",
},
{
  img: "img/torino.jpg",
  nomeCitta: "Torino",
  prezzo: 400,
  descrizione: "Torino, elegante città piemontese, famosa per la sua architettura barocca e la regale piazza Castello. Conosciuta anche per il caffè, il cioccolato e la Fiat, Torino offre un mix unico di storia, cultura e gustosi piaceri.",
},
{
  img: "img/milano.jpg",
  nomeCitta: "Milano",
  prezzo: 500,
  descrizione: "Milano, la vivace città italiana, famosa per la moda, il design e l'arte. Ricca di storia, cultura e delizie culinarie, è un luogo di dinamismo e fascino senza tempo.",
},
{
  img: "img/firenze.jpg",
  nomeCitta: "Firenze",
  prezzo: 800,
  descrizione: "Firenze, incantevole città toscana, culla del Rinascimento. Con il suo magnifico Duomo, il Ponte Vecchio e gli affascinanti musei, Firenze è un gioiello culturale da ammirare.",
},
{
  img: "img/torino.jpg",
  nomeCitta: "Torino",
  prezzo: 400,
  descrizione: "Torino, elegante città piemontese, famosa per la sua architettura barocca e la regale piazza Castello. Conosciuta anche per il caffè, il cioccolato e la Fiat, Torino offre un mix unico di storia, cultura e gustosi piaceri.",
},]

// da rivedere con chatGbt
var arrayCart = JSON.parse(localStorage.getItem("cart"))||[];


var contenitore = document.getElementById("containerS1")

myArray.forEach(element => {
  contenitore.innerHTML += `<div class="card-city">
  <div>
      <img src="${element.img}">
  </div>
  <div class="container-h2">
      <h2>${element.nomeCitta}</h2>
  </div>
  <div>
      <p class="container-p">${element.descrizione}</p>
  </div>
  <div class="container-button">
      <button class="prova" >Acquista</button>
  </div>
</div>`; 

let prova= document.
});

function addToCart(element){
  let oggetto = {
    img : element.img,
    nomeCitta: element.nomeCitta,
    prezzo: element.prezzo,
  }

  arrayCart.push(oggetto)

  let containerOggetti = JSON.stringify(arrayCart)
  localStorage.setItem("cart",containerOggetti)
}

