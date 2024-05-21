//Operadores Relacionais
/*
>; >=; <; <=; ==; != 
 */
let n1 = 6; let n2 = 3; let n3 = 12;
//retorna um boolean
console.log(n1 > n2); //true;
console.log(n1 == n3); //false;
//=== é um operador que compara, além do valor de igualdade (==), o tipo de variável, ex:
//'17' == 17: true; '17' === 17: false;
console.log(!(n1==n3)); //true; ! representa a negação da operação, que é false, e com ! é true.

//Operadores Lógicos
/*
&& - and; || - or; ! - not;
*/
console.log(n1 && n2 > n3); //false;
console.log(!(n1 && n2 > n3)); //true;
console.log(n1 || n3 == n2*2); //true;
