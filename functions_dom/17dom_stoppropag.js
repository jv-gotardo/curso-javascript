const caixa1 = document.querySelector("#caixa1");
const c1 = document.querySelector("#d1");
const disc = [...document.querySelectorAll(".discip")];
let cliques = 0;
//Não se pode chamar o addEvent com o querySelectorAll, se o map não foi feito

//No JavaScript, todos os conteúdos dentro de caixa1 recebem o mesmo evento. Ou seja, o evento
// é propagado neles.
caixa1.addEventListener("click", ()=>{
     console.log("Clique");
     cliques += 1;
     if(cliques <= 1){
         alert(cliques + " Clique feito");
    }else{
        alert(cliques + " Cliques feitos");
    }
})

// c1.addEventListener("click", (ev)=>{
//     ev.stopPropagation();
// })
//O StopPropagation é uma classe do event e é utilizado em conjunto com ela.
//o ev, se chamado é um PointerEvent, contendo métodos como o target, que indica quem chamou
//aquele evento. Um deles é o StopPropagation

disc.map((e)=>{
    e.addEventListener("click", (ev)=>{
        ev.stopPropagation();
    })
})
