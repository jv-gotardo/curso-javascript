//Função dentro de outra 
let soma = (...operadores)=>{
    let somar = op=>{
        //A função somar recebe op como parâmetro
        //Op acaba por ser um array, devido ao uso do spread
        let soma = 0; 
        for(o of op){
            soma += o;
        }
        return soma; //Retorna a soma dos o de op
    }
    return somar(operadores); //O retorno é a função somar em si 
    //que pedirá operadores para essa função quando for chamado.
    //Por sua vez, esses operadores passarão como parâmetro (op),
    //e serão somados dentro do for da função somar.
}
