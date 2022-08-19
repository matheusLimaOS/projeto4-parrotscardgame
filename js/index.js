let arrayCartas = [];
let jaExisteCartaVirada = false;
let paresDescobertos = 0;
let numCartas;
let movimentos = 0;
let dataInicio;
let tempo;

function inicio(){
    let i=0;

    movimentos = 0;
    numCartas = prompt("Escolha um número par de cartas entre 4 e 14:");
    jaExisteCartaVirada = false;
    paresDescobertos = 0;
    arrayCartas = [];
    dataInicio = new Date();
    comecaTemporizador();

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
                    let time = tempo.split(":");
                    while(true){
                        let reinicio = prompt(`Parabéns, você ganhou em ${movimentos} jogadas!. E com o tempo de ${time[0]} minutos e ${time[1]} segundos!\nDeseja jogar novamente? (sim ou não)`);
                        if(reinicio.toLowerCase() === 'sim'){
                            apagarCartas();
                            inicio();
                        }
                        if(reinicio.toLowerCase() === 'não'){
                            break;
                        }
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
function comecaTemporizador(){
    setInterval(function(){
  	    let segundos = 1000;
        let minutos = segundos * 60;
        let hora = minutos*60;
        
        var atual = new Date();
        
        var diferenca = atual - dataInicio;
        
        let minutos1 = Math.floor((diferenca % hora) / minutos);
        let segundos1 = Math.floor((diferenca % minutos) / segundos);
        if(minutos1 < 10){
            minutos1 = '0' + minutos1;
        }
        if(segundos1 < 10){
            segundos1 = '0' + segundos1;
        }

        tempo = minutos1 + ":" + segundos1;
        document.querySelector('.temporizador').innerHTML = tempo;
    },1000);
}

inicio();
