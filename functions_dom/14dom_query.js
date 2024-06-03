let asdivs = [...document.getElementsByTagName("div")];
let todasDisciplinas = [...document.getElementsByClassName("disciplina")];
let ds1 = [...document.getElementsByClassName("s1")];
let ds2 = [...document.getElementsByClassName("s2")];

//O QuerySelector retorna o primeiro elemento encontrado da chave especificada.
let queryasdivs = document.querySelector("div");
//Retorna todos os elementos com essa chave
let queryalldivs = document.querySelectorAll("div");
//o . indica referencia a classe de mesmo nome; o # indicaria um ID.
let querycursos = [...document.querySelectorAll(".disciplina")];
let queryds1 = [...document.querySelectorAll(".s1")];
let queryds2 = [...document.querySelectorAll(".s2")];
let querydiv = [...document.querySelectorAll("#d1")];

//O querySelector é um método dinâmico:
let arrayconj = [...document.querySelectorAll("p, .s1")];
let divclass = [...document.querySelectorAll("div[class]")]; //Somente divs com class
let divp = [...document.querySelectorAll("div > p")]; //Somente divs que contenham p dentro;

console.log(queryasdivs)
console.log(queryalldivs)
console.log(querycursos);
console.log(queryds1);
console.log(queryds2);
console.log(querydiv);
console.log(arrayconj);
console.log(divclass);
console.log(divp);
// console.log(asdivs);
// console.log(todasDisciplinas);
// console.log(ds1);
// console.log(ds2);

// ds2.map((e)=>{
//     e.classList.add("especial");
// })