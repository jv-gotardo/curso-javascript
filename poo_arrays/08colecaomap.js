let caixa = document.querySelector("#caixa");
let caixa2 = document.querySelector("#caixa2");

//Método map - Percorre outras coleções em todos os seus elementos
//Coleção map - Coleção do tipo chave-valor
let mapa = new Map(); // declaração de um map
//O método set é usado para adicionar uma chave (primeira posição) e um valor a ela.
mapa.set("cidade", "Porto Alegre");
mapa.set("estado", "rio grande do sul");
mapa.set(52, "bairros");
mapa.set("valorfinal", 156);
//Não podem existir chaves iguais no mesmo map.

let b = 52;
if(mapa.has(b)){
    caixa2.innerHTML = "Essa chave existe e tem o valor: " + mapa.get(b) + 
    "<br/> O tamanho da coleção com essa chave é: " + mapa.size;
}else{
    caixa2.innerHTML = "A chave não existe.";
}
caixa.innerHTML = mapa.get("cidade"); //Retorna o valor dessa chave.

//Removendo valores
mapa.delete("valorfinal");
//map é iterável
mapa.forEach((e)=>{
    console.log(e);
})