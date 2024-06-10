//O método find permite encontrar o elemento de um array e retorná-lo quando isso acontecer.
let larray = document.querySelector("#array");
let txt_pes = document.querySelector("#txt_pes");
let btnPes = document.querySelector("#btnPes");
let resultado = document.querySelector("#resultado");

let arrayel = [2, 6, 3, 9, 7, 11, 14, 1, 8, 5];
larray.innerHTML = arrayel;

btnPes.addEventListener("click", (ev)=>{
    //O find retorna o valor do primeiro elemento do array, chamando cada valor de acordo com as
    //especificidades. Retorna valor, índice e array;
    let conl = arrayel.find((e, i)=>{
        if(e == txt_pes.value){ 
            resultado.innerHTML = "Resultado: " + e + "\n Posição: " + i;
            return e; 
        }
    });
    console.log(conl);
})