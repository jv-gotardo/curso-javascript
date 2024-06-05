//Permite iterar um array, e usar o método de filtragem através de outras estruturas. Retorna um
//array filtrado com as especificações.
let numeros = [3, 5, 9, 11, 14, 17, 18, 22, 24, 25, 33];
//Pode-se criar uma arrow functino dentro do filter
let multiplos3 = numeros.filter((valor)=>{ //indice, array
    //Esses parâmetros acima são os valores usados para operações a partir do filter
    if(valor%3 == 0){
        return valor;
    }
})
let nmultiplos = numeros.filter((v)=>{
    if(v%3 != 0){
        return v;
    }
})
console.log(numeros);
console.log(multiplos3);
console.log(nmultiplos);