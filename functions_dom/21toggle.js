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

//método criado para garantir exclusividade do uso do selec
let naoSelecionado = (()=>{
    let disciSelec = [...document.querySelectorAll(".selec")];
    disciSelec.map((el)=>{
        el.classList.remove("selec");
    })
})

//Criação do método para criar elementos
let criarDisciplina = ((disc)=>{
    let novoE = document.createElement("div");
    novoE.setAttribute("id", "d"+ind);
    novoE.setAttribute("class", "discip dis1");
    novoE.innerHTML=disc;
    //Uso do toggle para adicionar a nova classe;
    novoE.addEventListener("click", (e)=>{
        naoSelecionado();
        e.target.classList.toggle("selec");
    })
    let com = document.createElement("div");
    return novoE;
})

disciplinas.map((e)=>{
    let ne = criarDisciplina(e);
    caixaDisc.append(ne);
    ind++;
})

//Agora, o retorno é feito diretamente pela disciplina selecionada.
let radioSelec = ()=>{
    let disciSelec = [...document.querySelectorAll(".selec")];
    return disciSelec[0];
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
    try{
        let discSelec = radioSelec();
        alert(discSelec.innerHTML + " foi selecionado");
    }catch(ex){
        alert("Selecione uma disciplina antes!");
    }
})

//Função externa com if-else
btnDiscRemov.addEventListener("click", ()=>{    
    try{
        let discRemov = radioSelec();        
        discRemov.remove();
    }catch(ex){
        alert("Selecione uma disciplina antes!");
    }
    //caixaDisc.removeChild(discRemov);
//O try-catch poderia ter sido utilizado através de uma função se discRemov tivesse o mesmo valor
//em ambas as funções.
})

btnAddAnt.addEventListener("click", ()=>{
    try{
        let discSelec = radioSelec();
        if(nomeD.value != ""){
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
    try{
        if(nomeD.value != ""){
            let novaDiscip = criarDisciplina(nomeD.value);
            caixaDisc.insertBefore(novaDiscip, radioSelec().nextSibling);
        }else{
            alert("Digite a disciplina antes!");
        }
    }catch(ex){
        alert("Selecione uma disciplina antes!");
    }
})