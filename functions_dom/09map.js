//o map é usado para iterar coleções, percorrendo ela por completo. 
let disciplinas = ['IHCC', 'Textos Acadêmicos', 'Circuitos Digitais', 'Matemática Discreta',
    'Algoritmos', 'Criação de Páginas WEB'];
//Os parametros de disciplinas são: primeiro, o elemento da iteração; o índice do elemento.
disciplinas.map((elemento, i)=>{
    console.log("Disciplina: " + elemento + " | Curso: " + i);
    //Retorna todos os elementos da lista e seus índices;
})
//O map é melhor que o for quando for necessário iterar todos os elementos de um array, por ser
//mais otimizado.

let divs = document.getElementsByTagName("div");
divs = [...divs]; //Transforma divs em uma coleção iterável através do spread.
divs.map((e, i)=>{
    console.log(e.innerHTML);
    //a partir do innerHTML, o retorno será somente o que a tag exibe;
})

//Outra forma de uso do map:
let valores = Array.prototype.map.call(divs, ({innerHTML})=>innerHTML);
console.log(valores);

//Outros usos do map:
let converter=(d)=>parseInt(d);
let dobrar=(n)=>n*2;
//let nums=['1', '2', '3', '4', '5'].map(converter);
let nums=['1', '2', '3', '4', '5'].map(dobrar);
console.log(nums);
