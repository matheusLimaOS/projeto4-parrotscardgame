let numCartas = prompt("Escolha um número par de cartas entre 4 e 14:");
let arrayCartas = [];
let i=0;

while(numCartas < 4 || numCartas > 14 || numCartas%2!==0){
    numCartas = prompt("Número invalido! Por favor Insira um numero par entre 4 e 14!");
}


function criarCartas(numCartas){
    let cards = document.querySelector(".cards");
    let card = document.createElement("li");
    let img = document.createElement("img");
    card.classList.add("card");
    img.setAttribute("src","./img/front 5.png")
    card.appendChild(img);

    for(i=0;i<numCartas;i++){
        card = document.createElement("li");
        img = document.createElement("img");
        caard.classList.add("card");
        img.setAttribute("src","./img/front 5.png")
        card.appendChild(img);
        cards.appendChild(card);
    }
}
