function pessoa(nome, idade){
    this.nome = nome; //O this faz uma referência ao parâmetro nome
    this.idade = idade;

    //Em uma função anônima, no caso do SetTimeOut, o escopo do this
    //é feito somente dentro daquela função; o retorno seria undefined;
    //isso pois o setTimeOut só conseguiria acessar o this se estivesse
    //dentro do seu próprio escopo.

    this.anonimo = function(){
        setTimeout(function(){ //o setTimeOut gera um atraso para 
            //execução da função
            console.log(this.nome);
            console.log(this.idade);
        }, 2000)
    }

    //A solução é o uso de uma arrow function. Isso acontece pois a
    //arrow function não utiliza o contexto do setTimeout, mas o contexto
    //de sua função pai, pessoa.
        this.arrowda = function(){
            setTimeout(()=>{ 
                console.log(this.nome);
                console.log(this.idade);
       }, 2000)
    }
}
let pessoa1 = new pessoa("João", 20); //Cria uma nova instância de pessoa, como uma classe.
pessoa1.anonimo();
pessoa1.arrowda();