let ftiponormal = document.querySelector("#ftiponormal");
let ftipoa302 = document.querySelector("#ftipoa302");
let fquilom = document.querySelector("#fquilom");

ftipoa302.addEventListener("click", ()=>{
    fquilom.removeAttribute("disabled");
})
ftipo

class Marca{ 
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
        super(nome, pais, veiculo); 
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
