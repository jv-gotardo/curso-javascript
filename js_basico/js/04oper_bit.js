//Operadores bitwise efetuam operações diretamente nos bits da memória.
let n1= 8; let n2 = 6;
let res= n1 & n2;
console.log(res); //O retorno é 0; 
//8 = 1000; 
//6 = 0110; //r = 0000; //Se faz comparação entre bits; entre os dois números; nesse caso, o 
//operador lógico é &, portanto um valor será 1 apenas se ambos os valores em cada dígito forem 1.]
//Por isso, o retorno é 0.
//Operadores: & - and; | = ou; ^ = xor, ou exclusivo;
//Tabela Verdade do Xor: 1 e 1 = 0; 0 e 1 = 1; 1 e 0 = 1; 0 e 0 = 0; Retorna true se forem valores diferentes;
//Deslocamentos: n1 << 1; o bit é deslocado uma casa para a esquerda; isso vai dobrar o valor.
// n2 >> 1; o bit é deslocado uma casa para a direita; isso faz com que o valor fique pela metade.