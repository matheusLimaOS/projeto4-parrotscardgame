let arrayCartas = [];
let jaExisteCartaVirada = false;
let paresDescobertos = 0;
let numCartas;
let movimentos = 0;

function inicio(){
    let i=0;

    movimentos = 0;
    numCartas = prompt("Escolha um número par de cartas entre 4 e 14:");
    jaExisteCartaVirada = false;
    paresDescobertos = 0;
    arrayCartas = [];

    while(numCartas < 4 || numCartas > 14 || numCartas%2!==0){
        numCartas = prompt("Número invalido! Por favor Insira um numero par entre 4 e 14!");
    }

    for(i=0;i<numCartas/2;i++){
        arrayCartas.push(i);
        arrayCartas.push(i);
    }

    arrayCartas.sort(()=>{
        return Math.random() - 0.5;
    })

    criarCartas(numCartas,arrayCartas);
}

function criarCartas(numCartas){
    let cards = document.querySelector(".cards");
    let card;
    let img;
    let img2;

    for(i=0;i<numCartas;i++){
        card = document.createElement("li");
        img = document.createElement("img");
        img2 = document.createElement("img");
        card.classList.add("card");
        img.setAttribute("class","front-face face");
        img2.setAttribute("class","back-face face");
        img.setAttribute("src","./img/front 5.png");
        img2.setAttribute("src","/img/"+arrayCartas[i]+".gif");

        card.appendChild(img);
        card.appendChild(img2);
        card.setAttribute("onclick","virarCarta(this)");
        cards.appendChild(card);
    }
}
function apagarCartas(){
    let cards = document.querySelector(".cards");
    for(i=0;i<numCartas;i++){
        cards.children[0].remove();
    }

}
async function virarCarta(card){
    movimentos++;
    let imgs = card.children;

    imgs[0].classList.add("esconde");
    imgs[1].classList.add("aparece");

    if(jaExisteCartaVirada){
        let img = cartaVirada.children[1].getAttribute('src');
        let img2 = card.children[1].getAttribute('src');
        if(img===img2){
            paresDescobertos ++;
            card.removeAttribute("onclick");
            cartaVirada.removeAttribute("onclick");
            if(paresDescobertos === numCartas/2){
                setTimeout(()=>{
                    while(true){
                        let reinicio = prompt("Parabéns, você ganhou em " + movimentos + " jogadas!\nDeseja jogar novamente? (sim ou não)");
                        console.log
                        if(reinicio.toLowerCase() === 'sim' || reinicio.toLowerCase() === 'não'){
                            break;
                        }
                    }

                    if(reinicio.toLowerCase() === 'sim'){
                        apagarCartas();
                        inicio();
                    }
                },1000);
            }
        }
        else{
            setTimeout(()=>{
                card.children[0].classList.remove("esconde");
                card.children[1].classList.remove("aparece");
                cartaVirada.children[0].classList.remove("esconde");
                cartaVirada.children[1].classList.remove("aparece");
            },1000);
        }
        jaExisteCartaVirada = false;
    }
    else{
        jaExisteCartaVirada = true;
        cartaVirada = card;
    }
}


inicio();