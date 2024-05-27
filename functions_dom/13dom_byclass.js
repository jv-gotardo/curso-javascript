let disciplinas = [...document.getElementsByClassName("disciplina")];
let di1 = [...document.getElementsByClassName("s1")];
let di2 = [...document.getElementsByClassName("s2")];

console.log(disciplinas);
console.log(di1);
console.log(di2);

// di1.map((e)=>{
//     e.innerHTML = "DISCIPLINAS DO 1º SEMESTRE";
// })
// di2.map((e)=>{
//     e.innerHTML = "DISCIPLINAS DO 2º SEMESTRE";
// })

di1.map((e)=>{
    e.classList.add("especial");
    //Isso adiciona uma nova classe para elementos que estejam no
    //array di1.
})

//Por retornar um conjunto HTML, pode-se selecionar um único elemento
let minhaDisciplina = document.getElementsByClassName("disciplina")[2];
console.log(minhaDisciplina);