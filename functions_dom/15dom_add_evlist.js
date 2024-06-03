let myalert=()=>{
    alert("Esse é o IHCC");
}

let newalert=()=>{
    alert("Textos Academicos");
}

const d2 = document.querySelector("#d2");
//o método para construir eventos é o addEventListener
d2.addEventListener("dblclick", newalert);
//Criando uma arrow function dentro do aEL
// d2.addEventListener("click", (ev)=>{
//     alert("Clique duas vezes para exibir a mensagem");
//     console.log(ev); //Traz diversas propriedades, incluindo target
//     ev.target.classList.add("especial"); // 
// })

//Isso pode ser feito com múltiplos elementos ao mesmo tempo:
let alldis = [...document.querySelectorAll(".disciplina")];
alldis.map((e)=>{
    e.addEventListener("click", (el)=>{
        el.target.classList.add("especial2");
        console.log(el.id + " teve sua classe mudada");
    })
})