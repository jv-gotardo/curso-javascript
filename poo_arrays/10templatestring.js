let caixa = document.querySelector("#caixa");
let caixa2 = document.querySelector("#caixa2");

let ling = "Java";
let frwork = "Spring";

//caixa.innerHTML += ling + "é a linguagem usada pelo framework " + frwork;
//Com o template string, é dessa forma:
caixa.innerHTML += `${ling} é a linguagem usada pelo framework ${frwork}`;
//Para quebrar linha, segue-se usando o <br\> no DOM; no console, \n;

let lings = ["Java", "C++", "R", "Python"];
let ol = `<ol style="margin-left: '3px';">`;
lings.forEach((e)=>{
    ol+=`<li>${e}</li>`;
})
ol += `</ol>`;
caixa2.innerHTML += ol;