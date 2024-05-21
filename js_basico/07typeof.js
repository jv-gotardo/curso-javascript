let v1 = 17;
let v2 = "17";
let v3 = v1===v2; //o === verifica se 17 e "17" são iguais (true), && se são do mesmo tipo (false)
let meuobject = {valor: 25.7};

//O operador typeof (ou unário) exibe o tipo da variável
console.log(typeof(v1)); //number
console.log(typeof(v2)); //string
console.log(typeof(v3)); //boolean
console.log(typeof(meuobject)); //object