//Quando um objeto tem a propriedade static, pode-se invocá-la sem instanciar a classe.
class Pessoa{
    static funcionario = false; //Com um modificador estático, esse atributo passa a ser da classe
    //ao invés do objeto instanciado.
    constructor(idade){
        this.idade = idade;
    }
    //Uma função estática não faz parte da instância da classe, mas da classe em si.
    static contratar=function() {
        Pessoa.funcionario = true;
    }
    dados=function(){
        console.log(`Idade: ${this.idade}\n Funcionário: ${Pessoa.funcionario}\n`);
    }
}
let p1 = new Pessoa(65); 
let p2 = new Pessoa(47); 
let p3 = new Pessoa(35);

//o static é muito útil quando se quer espalhar uma propriedade por todas as instâncias, sem precisar
//modificar cada uma 
Pessoa.funcionario = true;

p1.dados();
p2.dados();
p3.dados();