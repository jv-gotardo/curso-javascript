let n1 = 7;
n1++;
console.log(n1); //O incremento adiciona um ao n1 (pós-incremento). A impressão é 8;
//Contudo, se
//console.log(n1++); saída é 7, pois a variável primeiro é usada, depois incrementada.
console.log(++n1); //A impressão também será 8, pois o valor foi incrementado antes. 
//A diferença é que o ++ aparece antes da variável, portanto seu comando é feito antes da 
//impressão. O mesmo vale para decrementos.
let n2 = 16;
console.log(--n1); //Imprime 15 e modifica o valor para 15;
//Operações de incremento também tem pós e pré:
n*=2; //Valor é 30 agora;
console.log(n=+5); //Valor é impressso como 30, e depois modificado para 35.
//Concatenações:
//.log(a + b); //Imprime o valor aritmético;
//.log (a + "" + b); //Imprime a concatenação textual;