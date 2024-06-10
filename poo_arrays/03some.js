let p_array = document.querySelector("#array");
let verify = document.querySelector("#btnVer");
let result = document.querySelector("#resultado");

let elementos = [1, 4, 5, 9, 11, 12, 17, 18, 22, 23, 25, 24, 20, 14];
p_array.innerHTML = elementos;

verify.addEventListener("click", ()=>{
    result.innerHTML = "Não verificado";
    //O some retorna true se algum ou mais elementos já conformar aquela condição.
    let ret = elementos.some((e, i)=>{
        if(e<25){
            result.innerHTML = "Posição: " + i;
        }
        return e>=25;
    })
    if(ret){
        result.innerHTML = "Elementos estão de acordo";
    }
    console.log(ret);
})