let caixa1 = document.querySelector("#caixa1");
let caixa2 = document.querySelector("#caixa2");
let mudar = document.querySelector("#mudar");
let disciplinas = [...document.querySelectorAll(".discip")];

disciplinas.map((d)=>{
    d.addEventListener("click", (di)=>{
        di.target.classList.toggle("troca");
        //O método toggle do classList: se tiver a classe nesse elemento, é removida; se não,
        //é adicionada.
    })
})

mudar.addEventListener("click", ()=>{
    let divstrocadas = [...document.querySelectorAll(".troca")];
    let divssemtroca = [...document.querySelectorAll(".discip:not(.troca)")]; 
    //Método para not no query; o .discip limita o número de elementos a serem buscados pelo query.
    divstrocadas.map((e)=>{
        //O método appendChild adiciona essas classes selecionadas ao child
        caixa2.appendChild(e);
    })
    divssemtroca.map((e)=>{
        caixa1.appendChild(e);
    })
})

