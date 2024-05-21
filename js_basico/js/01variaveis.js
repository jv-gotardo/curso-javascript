"use strict";

if(true){
    var nome = "nome"; //O var é utilizado para criação de variáveis. Nesse caso, está no escopo
    //do if.
}
console.log(nome); //é possível acessar o var nome fora do primeiro escopo de declaração. Um erro
//aconteceria se outro escopo existisse, e o var nome fosse chamado.

if(true){
    let nome2 = "nome2"; //O let tem o mesmo propósito do var, contudo, não é possível acessar 
    //essa variável fora de qualquer escopo do if. Escopos dentro desse escopo podem acessar 
    //também.
    console.log(nome2);
}

let n3 = "valorescrito";
n3 = 17; //pode-se redeclarar a mesma variável com um valor de tipo diferente. O casting é feito
//automaticamente.

const valor = "imutavel"; //o valor não pode mais ser alterado nessa constante.
//valor = 7; // Isso resulta em erro.