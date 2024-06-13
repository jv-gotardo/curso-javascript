class Marca{ //Classe-pai será marca; outras classes herdarão dessa.
    constructor(nome, pais, veiculo){
        this.nome = nome;
        this.pais = pais;
        this.veiculo = veiculo;
        this.possui = undefined;
    }
    comprar=function(){
        this.possui = true;
    }
    vender = function(){
        if(this.possui != true){
            alert("Não pode fazer essa ação!"); 
        }else{
            this.possui = false;
        }
    }
}

class A302 extends Marca{
    constructor(nome, pais, veiculo, kmt){
        super(nome, pais, veiculo); //Propriedade para pegar as propriedades do pai.
        this.kmt = kmt;
        this.viagenscontadas = 0;
    }
    viagemmedia=function(){
        if(this.kmt > 500000){
            console.log("Não é mais possível utilizar...");     
        }else{
            this.kmt += 600;
            this.viagenscontadas += 1;
        }
    }
}

let m1 = new Marca("Volkswagen", "Alemanha", "Carros");
m1.comprar();
console.log(m1.possui);

let a1 = new A302("Volvo", "Suécia", "Caminhão", 35000);
console.log(a1.kmt);
for(i = 0; i < 10; i++){
    a1.viagemmedia();
}
console.log(a1.kmt);