//Um array é uma coleção de dados; objetos, Strings, números podem ser armazenados dentro de um.
let array = [1, 2, 3];
let caixa = document.querySelector("#caixa");
let caixa2 = document.querySelector("#caixa2");

//caixa.innerHTML += array; Forma de adicionar o array;

//Modificando elemento na posição
array[0] = "Bem-vindo";

//Adicionando elementos com push
array.push("Outro");
array.push(6);
array.push(3);
//Removendo elementos com pop, dos últimos para os primeiros
array.pop(); array.pop();
array.unshift("Adeus"); //Adiciona um elemento no início do array;
array.shift() //Retira o primeiro elemento do array;
array.unshift(2);

//Também pode-se adicionar outros arrays
let paises = ["Brasil", "Argentina", ["Buenos Aires", "Sao Paulo"]];
array.push(paises);
console.log(array[5][1]); //Retorna o segundo elemento do array na quinta posição
console.log(array[5][2][1]); //As matrizes podem seguir infinitamente.

array.map((el)=>{
    let p = document.createElement("p");
    p.innerHTML = el;
    caixa.appendChild(p);
})

//Podem também ser adicionadas funções aos arrays do JS.
let val = [1, 2, 3];
const op=[
    (va)=>{
        let r = 0;
        for(v of va){
            r += v;
        }
        return r;
    },
    (va)=>{
        let r = 1;
        for(v of va){
            r *= v;
        }
        return r;
    },
    (va)=>{
        for(v of va){
            caixa2.innerHTML += v + "<br>";
        }
    }
]
console.log(op[0](val)); //Retorna soma;
console.log(op[1](val)); //Retorna mult;
op[2](val); //Retorna a impressão na div;
