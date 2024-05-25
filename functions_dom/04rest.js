//Parametros rest são parametros que nao exigem especificar exatamente a quantidade de parametros
//que será passada na função
function myfunction(a, b){
    return a+b;
}
console.log(myfunction(5, 3));

//a função rest é feita da seguinte forma:
function restfunctionsoma(...valores){
    //Através do spread, os valores são transformados em um array;
    let soma = 0;
    for(val of valores){ //Utilizando o forof para percorrer os valores e somá-los
        soma += val;
    }
    return soma; 
}
console.log(restfunctionsoma(7, 4, 2, 9, 16));