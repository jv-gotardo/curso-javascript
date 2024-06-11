let caixa = document.querySelector("#caixa");
//No set, não é possível duplicar elementos; somente elementos diferentes uns dos outros podem
//existir num mesmo set.

let esportes = new Set(["futebol", "basquete", "golfe"]);
//set permite inicializar elementos junto com a sua criação

esportes.add("beisebol");
//O set irá ignorar os dois elementos abaixo na criação do script
esportes.add("golfe");
esportes.add("basquete");

let c = 0;
console.log(esportes.size);
//forEach também pode ser utilizado, como no map
esportes.forEach((e)=>{
    c++;
    if(c < esportes.size){
        caixa.innerHTML += e + ", ";
    }else{
        caixa.innerHTML += e;
    }
})