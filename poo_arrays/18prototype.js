//O prototype serve para quando há a necessidade de adicionar uma propriedade ou um método, a um 
//objeto, especialmente se for de função. Sempre que necessário adicionar uma nova propriedade ou 
//método a ele, utiliza-se.

let Sniper=function(vida){
    this.vida = vida;
    this.municao = 100;
}
//O prototype é encontrado em todos os objetos do JS.
Sniper.prototype.tentativas = 3; //Adiciona um atributo ao prototype do Sniper.

//Funções a partir do prototype:
Sniper.prototype.atirar=function(){
    if(this.municao > 0){
        this.municao--;
    }
}
Sniper.prototype.recarregar=function(){
    if(this.municao < 100){
        while(this.municao <= 100){
            this.municao++;
        }
    }
}
let s1 = new Sniper(95);
s1.atirar();
s1.atirar();
s1.atirar();
s1.atirar();
s1.atirar();
s1.atirar();
console.log(s1.municao);
s1.recarregar();
console.log(s1.recarregar);
//O Prototype é usado quando é necessário criar atributos e métodos em tempo real, além de deixar a 
//criação de classes mais dinâmica.