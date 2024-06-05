let caixaDisc = document.querySelector("#caixaDisc");
let btc = [...document.querySelectorAll(".discip")];
let d1_2 = document.querySelector("#dis1");
let disciplinas = ["Circuitos Digitais", "Matemática Discreta", "Criação de Páginas Web", 
"Algoritmos", "Estrutura de Dados", "Cálculo I"];
let btnDiscSelec = document.getElementById("btnSD");
let btnDiscRemov = document.getElementById("btnRD");

disciplinas.map((e, k)=>{
    let novoE = document.createElement("div");
    novoE.setAttribute("id", "d"+k);
    novoE.setAttribute("class", "discip dis1");
    novoE.innerHTML=e;

    let com = document.createElement("div");
    com.setAttribute("class", "com");

    let rb = document.createElement("input");
    rb.setAttribute("type", "radio");
    rb.setAttribute("name", "rb-disc");

    com.appendChild(rb);
    novoE.appendChild(com);
    caixaDisc.append(novoE);
})

let radioSelec = ()=>{
    let radios = [...document.querySelectorAll("input[type=radio]")];
    let radsel = radios.filter((e)=>{
        return e.checked;
    })
    return radsel = radsel[0];
}

//função feita para verificar se foi selecionado o radio ou não;
let radioindef = ()=>{
    let rs = radioSelec();
    if(rs == undefined){
        alert("Selecione uma opção antes!");
    }
}

//Duas maneiras de verificação: try-catch
btnDiscSelec.addEventListener("click", ()=>{
    let rs = radioSelec();
    try{
        let discSelec = rs.parentNode.parentNode.firstChild.textContent;
        console.log(discSelec);
        alert(discSelec + " foi selecionado");
    }catch(ex){
        alert("Selecione uma disciplina antes!");
    }
})

//Função externa com if-else
btnDiscRemov.addEventListener("click", ()=>{
    let rs = radioSelec();
    radioindef();
    let discRemov = rs.parentNode.parentNode;
    //caixaDisc.removeChild(discRemov);
    discRemov.remove();
//O try-catch poderia ter sido utilizado através de uma função se discRemov tivesse o mesmo valor
//em ambas as funções.
})