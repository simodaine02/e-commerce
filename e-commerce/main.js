// var mySwiper = new Swiper('.swiper-container', {
//   // Opciones de configuración
//   loop: true,
//   autoplay: {
//     delay: 3500,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
// });

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
if(contenitore){
  myArray.forEach(element => {
    let card=document.createElement("div");
    let img= document.createElement("img");
    let h2=document.createElement("h2");
    let divh2=document.createElement("div");
    let p= document.createElement("p");
    let cbtn=document.createElement("div");
    let btn=document.createElement("button")
    img.src=element.img;
    h2.innerHTML=element.nomeCitta;
    p.innerHTML=element.descrizione;
    btn.innerHTML="aggiungi al carrello"
    card.className="card-city";
    divh2.className="container-h2";
    p.className="container-p"
    cbtn.className="container-button"
  contenitore.appendChild(card)
  card.appendChild(img)
  card.appendChild(divh2)
  divh2.appendChild(h2)
  card.appendChild(p)
  card.appendChild(cbtn)
  cbtn.appendChild(btn)
  btn.addEventListener("click",function(){
    console.log("ciao")
    let oggetto = {
      img : element.img,
      nomeCitta: element.nomeCitta,
      prezzo: element.prezzo,
    }
    let ogg=oggetto
    arrayCart.push(ogg)
    let containerOggetti = JSON.stringify(arrayCart)
    localStorage.setItem("cart",containerOggetti)
    counter()
  })
  })
}


let ul= document.getElementById("lista")
if(ul){
  
 function render(){
  ul.innerHTML=""
  arrayCart.forEach((element=>{
    let prova= element
    let li= document.createElement("li");
    let span=document.createElement("p");
    let btn=document.createElement("button");
    btn.innerHTML="rimuovi"
    span.innerHTML=` nome-${element.nomeCitta} prezzo:${element.prezzo}€`
    li.appendChild(span)
    li.appendChild(btn)
    ul.appendChild(li)
    btn.addEventListener("click",function(){
      let index= arrayCart.indexOf(prova)
      arrayCart.splice(index,1)
      let containerOggetti = JSON.stringify(arrayCart)
      localStorage.setItem("cart",containerOggetti)
      render()
    })
  }))
 }
render()
}
function counter(){
  let conta=document.getElementById("counter")
  let n= arrayCart.length
  conta.innerHTML=n
}
counter()