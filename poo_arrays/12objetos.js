//A classe pode ser criada através de uma função. 
//class Pessoa{
function Pessoa(pnome, pidade){
    this.nome = pnome, //Parametros, atributos, e outros elementos agora separados por vírgulas.
    this.idade = pidade,
    this.getNome=function(){
        return this.nome;
    },
    this.getIdade=function(){
        return this.idade;
    },
    this.setNome=function(nome){
        this.nome = nome;
    },
    this.setIdade=function(idade){
        this.idade = idade;
    },
    this.print=function(){
        console.log(`Nome: ${this.nome}`);
        console.log(`Idade:  ${this.idade}`);
        console.log("--/--/--/--/--/--/--/--")
    }
    //Essa mudança para function não altera o funcionamento do restante do script, pois é um 
    //funcionamento igual ao da classe; as diferenças incluem, por os parâmetros diretamente no
    //Function, ausência de construtor, uso obrigatório do this para todas as propriedades e
    //separação das mesmas por vírgulas. Os functions se aproximam mais de como funcionam os 
    //objetos literais.
}

let btadd = document.querySelector("#btadd"); 
let res = document.querySelector(".res");

let pessoas = []; //Adicionando as instâncias a um array.

let pessoasHTML = ()=>{
    res.innerHTML = ""; //O elemento tem um clear para que pessoas já adicionadas não sejam de novo.
    pessoas.map((p)=>{
        let div = document.createElement("div");
        div.innerHTML = `Nome: ${p.getNome()} <br/> Idade: ${p.getIdade()}`;
        div.setAttribute("class", "pessoa");
        res.appendChild(div);
    })
}

btadd.addEventListener("click", ()=>{
    let cnome = document.querySelector("#cnome");
    let cidade = document.querySelector("#cidade");
    let p = new Pessoa(cnome.value, cidade.value);
    pessoas.push(p);
    cnome.value=""; cidade.value="";
    //Limpa os dois values para adicionar outras pessoas.
    pessoasHTML();
}) 