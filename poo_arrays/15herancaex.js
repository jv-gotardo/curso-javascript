let ftiponormal = document.querySelector("#ftiponormal");
let ftipoa302 = document.querySelector("#ftipoa302");
let fquilom = document.querySelector("#fquilom");
let fnome = document.querySelector("#fnome");
let fpais = document.querySelector("#fpais");
let fveiculo = document.querySelector("#fveiculo");
let marcas = document.getElementById("marcas");
let btnaddmarca = document.querySelector("#btnaddmarca");
let section = document.getElementsByTagName("section");
let fixedheight = 115;

let asmarcas = [];

let removerMarca=(arem)=>{
    asmarcas = asmarcas.filter((e)=>{ //Deve-se atribuir ao próprio array essa filtragem para que funcione.
        return e.nome != arem;
    })
}

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

// let verif=()=>{
//     console.log(asmarcas.length);
//     if(asmarcas.length%7 == 0){
//         let div = document.createElement("div");
//         div.setAttribute("class", "marcas");
//         div.setAttribute("id", "marcas");
//         section.appendChild(div);
//         alert("A");
//     }
// }

let adicionarMarcas=()=>{
    marcas.innerHTML = "";
    asmarcas.map((c)=>{
        let div = document.createElement("div");
        let btn = document.createElement("button");
        btn.addEventListener("click",(e)=>{
            //btn.parentElement.remove(); Isso não pode ser feito pois a criação das divs é baseada no array; portanto, se for 
            //apertado o botão adicionar mais uma vez, vai continuar adicionando o elemento excluído. Deve-se excluir o elemento
            //do array e não do DOM.
            let targremoc = e.target.parentNode.dataset.nome;
            removerMarca(targremoc);
            adicionarMarcas();
        })
        btn.innerHTML = "Remover";
        div.setAttribute("class", "marca");
        div.setAttribute("data-nome", c.nome); //Recebe o nome da classe.
        if(c instanceof A302){
            div.innerHTML = (`Nome: ${c.nome} <br/>País: ${c.pais} <br/>Veículo: ${c.veiculo}<br/>Quilometragem: ${c.kmt}`);
        }else{
            div.innerHTML = (`Nome: ${c.nome} <br/>País: ${c.pais} <br/>Veículo: ${c.veiculo}`);
            btn.setAttribute("id", "distance");
        }
        div.appendChild(btn);
        marcas.appendChild(div);
    })
}

btnaddmarca.addEventListener("click", ()=>{
    if(ftiponormal.checked){
        asmarcas.push(new Marca(fnome.value, fpais.value, fveiculo.value));
    }else{
        //Não é possível usar polimorfismo pois um dos parâmetros não existe na classe-pai.
        asmarcas.push(new A302(fnome.value, fpais.value, fveiculo.value,
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
