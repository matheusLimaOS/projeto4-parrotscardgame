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


inicio();