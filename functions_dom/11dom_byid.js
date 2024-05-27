let dd = document.getElementById("d1");
console.log(dd);
console.log(dd.id);
console.log(dd.innerHTML);
dd.innerHTML = "MODIFICADO";

let dd1 = document.getElementById("d1");
let dd2 = document.getElementById("d2");
let dd3 = document.getElementById("d3");
let dd4 = document.getElementById("d4");
let dd5 = document.getElementById("d5");
let dd6 = document.getElementById("d6");
let meuarray=[dd1, dd2, dd3, dd4, dd5, dd6];

// for(d of meuarray){
//     d.innerHTML="MODIFICADO";
// }

//o Map também pode ser usado;
meuarray.map((e)=>{
    e.innerHTML = "MODIFIED";
})

// console.log(meuarray);
