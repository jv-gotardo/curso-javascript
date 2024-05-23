//No caso do JavaScript, pode-se passar qualquer valor como parâmetro de função em questão de tipo.
function imprimir(cidade){
    console.log(cidade);
}
let a = imprimir("27");
let b = imprimir(27);
//Podem-se indicar valores padrão de parâmetro
function subtracao(n1=0, n2=0){
    return n1-n2;
}
console.log(subtracao(12, 6));
console.log(subtracao(7));

//Console.log dentro da função com return
function mult(n1=0, n2=0){
    m = console.log(n1*n2);
    return m;
}
mult(5, 3);

//Dando novo valor à variável
let value = 0;
function novovalor(v){
    return value += v;
}
value = novovalor(7);
console.log(value);