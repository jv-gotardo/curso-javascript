let caixaDisc = document.querySelector("#caixaDisc");
let btc = [...document.querySelectorAll(".discip")];
let d1_2 = document.querySelector("#dis1");
let disciplinas = ["Circuitos Digitais", "Matemática Discreta", "Criação de Páginas Web", 
"Algoritmos", "Estrutura de Dados", "Cálculo I"];
let btnDiscSelec = document.getElementById("btnSD");
let btnDiscRemov = document.getElementById("btnRD");
let btnAddAnt = document.getElementById("btnNDA");
let btnAddDps = document.getElementById("btnNDD");
let nomeD = document.getElementById("nomeD");
let ind = 1;

//Criação do método para criar elementos
let criarDisciplina = ((disc)=>{
    let novoE = document.createElement("div");
    novoE.setAttribute("id", "d"+ind);
    novoE.setAttribute("class", "discip dis1");
    novoE.innerHTML=disc;

    let com = document.createElement("div");
    com.setAttribute("class", "com");

    let rb = document.createElement("input");
    rb.setAttribute("type", "radio");
    rb.setAttribute("name", "rb-disc");

    com.appendChild(rb);
    novoE.appendChild(com);
    return novoE;
})

disciplinas.map((e)=>{
    let ne = criarDisciplina(e);
    caixaDisc.append(ne);
    ind++;
})

let radioSelec = ()=>{
    let radios = [...document.querySelectorAll("input[type=radio]")];
    let radsel = radios.filter((e)=>{
        return e.checked;
    })
    return radsel = radsel[0];
}

//função feita para verificar se foi selecionado o radio ou não;
// let radioindef = ()=>{
//     let rs = radioSelec();
//     if(rs == undefined){
//         alert("Selecione uma opção antes!");
//     }
// }

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

btnAddAnt.addEventListener("click", ()=>{
    let rs = radioSelec();
    try{
        if(nomeD.value != ""){
            let discSelec = rs.parentNode.parentNode;
            let novaDiscip = criarDisciplina(nomeD.value);
            caixaDisc.insertBefore(novaDiscip, discSelec);
        }else{
            alert("Digite a disciplina antes!");
        }
    }catch(ex){
        alert("Selecione uma disciplina antes!");
    }
})

btnAddDps.addEventListener("click", ()=>{
    let rs = radioSelec();
    try{
        if(nomeD.value != ""){
            let discSelec = rs.parentNode.parentNode.nextSibling;
            let novaDiscip = criarDisciplina(nomeD.value);
            caixaDisc.insertBefore(novaDiscip, discSelec);
        }else{
            alert("Digite a disciplina antes!");
        }
    }catch(ex){
        alert("Selecione uma disciplina antes!");
    }
})