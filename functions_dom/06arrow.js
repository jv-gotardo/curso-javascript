//Arrow function, um tipo de função anônima, utiliza o conceito de lambda para criação de funções.
//Sintaxe do lambda: (argumentos){retorno}
const divis =(d1, d2)=>
    {return d1/d2};
console.log(divis(9, 3));

//o não uso do return não torna obrigatório o uso de chaves
let decr =n=>n-1;
console.log(decr(6));