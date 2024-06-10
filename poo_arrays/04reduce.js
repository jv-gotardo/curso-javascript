let p_array = document.querySelector("#array");
let verify = document.querySelector("#btnRed");
let result = document.querySelector("#resultado");

let elementos = [1, 3, 5, 8];
let anter = [];
p_array.innerHTML = elementos;

verify.addEventListener("click", ()=>{
    //O reduce tem um parâmetro a mais além do elemento, índice, array: elemento anterior, que
    //é indicado antes de todos esses na chamada da função. Permite operar os elementos do array
    //de acordo com as condições estabelecidas.
    let r = elementos.reduce((ant, e, i)=>{
        anter.push(ant);
        return ant + e;
    })
    //Nessa operação, ocorre da seguinte forma: o ant recebe o valor de 1, o atual, 3. Em seguida,
    //os dois são somados, e o ant agora é 4,  com o atual, 5. Somados, o ant é 9, e o atual, 8,
    //resultando no valor que aparece em result.
    result.innerHTML = r;
    result.innerHTML += "<br/>" + anter;
})