//Funções geradoras tem seu retorno adiado até que necessário; é muito utilizada na programação
//assíncrona. Não precisa do processamento para o retorno final do programa. Pode se retornar uma
//coisa numa chamada, e outra na próxima chamada. Retorna um iterador, e nas próximas chamadas;
//um yield
function* cidades(){//* indica função geradora
    yield "Sao Paulo";
    yield "Curitiba";
    yield "Porto Alegre";
}

let cid = cidades(); //Chama a função
console.log(cid.next().value); //O next indica que a chamada será para o próximo yield;
console.log(cid.next().value); //Próximo yield 
//Se o next seguir para além do length da function*, retornará undefined;

function* dados(){
    let nome = yield "Digite seu nome;"
    let idade = yield "Digite sua idade;"
    return 'Nome: ' + nome + '\nIdade: ' + idade;
}
let d = dados();
console.log(d.next().value); //Deve-se dar um next, pois a primeira chamada cria o iterator, e
//só a segunda chama os yields;
console.log(d.next("Joao").value); //O next pode ter argumentos
console.log(d.next(17).value); 

function* multiplos3(){
    let i=0;
    while(true){
        yield i+=3;
    }
}
let m = multiplos3();
console.log(m.next().value);
console.log(m.next().value);
console.log(m.next().value); //Function em loop