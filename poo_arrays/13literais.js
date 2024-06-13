//Quando o new é criado em um objeto comum, é criada uma nova instância na memória, e os objetos
//de cada uma são independentes; em objetos literais, a instância criada ocupa sempre o mesmo
//endereço da memória.
let nome = document.querySelector("#cnome");
let idade = document.querySelector("#cidade");
const Pessoa1={
    nome,
    idade,
    getNome: function(){
        return this.nome; //Assim funciona o get dentro de um objeto literal.
    },
    setNome: function(nome){
        this.nome = nome;
    }, 
    getIdade: function(){
        return this.idade;
    },
    setIdade: function(idade){
        this.idade = idade;
    }, 
    returnHTML: function(){
        return `Nome: ${Pessoa1.getNome()} <br/> Idade: ${Pessoa1.getIdade()}`;
    }
}
// let p1 = Pessoa;
// let p2 = Pessoa;
// p2.nome = "Cleiton";
//nome será também o mesmo para p1. Todas as instâncias de um objeto recebem essa propriedade.
let btadd = document.querySelector("#btadd"); 
let res = document.querySelector(".res");

btadd.addEventListener("click", ()=>{
    let div = document.createElement("div");
    div.setAttribute("class", "pessoa");
    let p1 = Pessoa1;
    p1.setNome(nome.value);
    p1.setIdade(idade.value);
    div.innerHTML = `Nome: ${p1.getNome()} <br/> Idade: ${p1.getIdade()}`;
    res.appendChild(div);
    nome.value = "";
    idade.value = "";
})