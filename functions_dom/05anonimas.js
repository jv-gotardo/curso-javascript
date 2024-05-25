//Funções anônimas não precisam ter um nome relacionado para funcionarem;
//Uma função anônima só é criada e executada no momento de sua chamada; por isso é associada a uma variável.
let f = function(...vars){
    let vi = 27;
    let subt = 0;
    for(v of vars){
        subt += v;
    }
    return vi-subt;
};
console.log(f(7, 4, 3, 5));

//Funções anônimas com construtor New:
let g = new Function("v1", "v2", "return v1-v2"); //Sintaxe de função construtora e anônima;
console.log(g(5, 9));