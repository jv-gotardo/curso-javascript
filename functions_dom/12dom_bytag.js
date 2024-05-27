//o getElementsByTag retorna uma coleção de elementos HTML ao invés de um simples elemento HTML
let colecaoHTML = document.getElementsByTagName("div");
//conversão de coleção HTML para array com spread
let arraycolecao = [...colecaoHTML];
//Pode-se criar também diretamente através do getElements, sem necessidade de criar outra variável
arraycolecao.map((e)=>{
    e.innerHTML = "Acessado por tag name";
})
console.log(arraycolecao);