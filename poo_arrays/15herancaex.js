let ftiponormal = document.querySelector("#ftiponormal");
let ftipoa302 = document.querySelector("#ftipoa302");
let fquilom = document.querySelector("#fquilom");
let fnome = document.querySelector("#fnome");
let fpais = document.querySelector("#fpais");
let fveiculo = document.querySelector("#fveiculo");
let marcas = document.querySelector("#marcas");
let btnaddmarca = document.querySelector("#btnaddmarca");

let asmarcas = [];

let limparCampos=()=>{
    fnome.value="";
    fpais.value="";
    fveiculo.value="";
    fquilom.value=0;
}

ftipoa302.addEventListener("click", ()=>{
    limparCampos();
    fquilom.removeAttribute("disabled");
})
ftiponormal.addEventListener("click", ()=>{
    limparCampos();
    fquilom.setAttribute("disabled", "disabled");
})

let adicionarMarcas=()=>{
    marcas.innerHTML = "";
    asmarcas.map((c)=>{
        let div = document.createElement("div");
        div.setAttribute("class", "marca");
        div.innerHTML = (`Nome: ${c.nome} <br/>País: ${c.pais} <br/>Veículo:${c.veiculo}`);
        marcas.appendChild(div);
    })
}

btnaddmarca.addEventListener("click", ()=>{
    if(ftiponormal.checked){
        asmarcas.push(new Marca(fnome.value, fpais.value, fveiculo.value));
    }else{
        //Não é possível usar polimorfismo pois um dos parâmetros não existe na classe-pai.
        asmarcas.push(new Marca(fnome.value, fpais.value, fveiculo.value,
            fquilom.value));
    }
    adicionarMarcas();
})


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
