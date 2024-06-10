//Uma coleção iterável é a que retorna um iterador. Isso inclui arrays, strings, map e sets (em
//forma de coleção).
let valores = [2, 3, 5, 4, 9, 7, 6, 10];
//O array possui um iterador, que na prática, é como abaixo
let iterarval = valores[Symbol.iterator]();

console.log(valores); //Retorna o array
console.log(iterarval.next()); //Retorna o objeto e um array iterador; o next por sua vez, após
//identificar o array, chama seu próximo valor. Done é um de seus atributos; será false sempre que
//o array ainda não tiver sido todo percorrido. Value é o outro, retorna o valor do array.

//também é possível iterar uma String, que retorna todos os caracteres que compõem aquela string;
let mystring = "String";
let iterarstr = mystring[Symbol.iterator]();
console.log(mystring);
console.log(iterarstr.next());
console.log(iterarstr.next());
console.log(iterarstr.next());
console.log(iterarstr.next());