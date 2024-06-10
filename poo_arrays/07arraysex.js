let c1 = document.querySelector("#c1");
let c2 = document.querySelector("#c2");
let soma = document.querySelector("#soma");
let subtrair = document.querySelector("#subtrair");
let multiplicar = document.querySelector("#multiplicar");
let dividir = document.querySelector("#dividir");
let result = document.querySelector("#result");

v1 = Number(c1.value);
v2 = Number(c2.value);
let val = [v1, v2];
console.log(val)

const calc=[
    ()=>{
        soma = 0;
        for(v of val){
            soma += v;
        }
        return soma;
    },
    ()=>{
        subt = v1-v2;
        return subt;
    },
    ()=>{
        mult = 1;
        for(v of val){
            mult *= v;
        }
        return mult;
    },
    ()=>{
        divid = v1/v2;
        return divid;
    }
]
soma.addEventListener("click", ()=>{
    result.innerHTML = calc[0]();
})
subtrair.addEventListener("click", ()=>{
    result.innerHTML = calc[1]();
})
multiplicar.addEventListener("click", ()=>{
    result.innerHTML = calc[2]();
})
dividir.addEventListener("click", ()=>{
    result.innerHTML = calc[3]();
})
