// let adicionarMarcas=()=>{
//     marcas.innerHTML = "";
//     alert(asmarcas.length);
//     if(asmarcas.length/7 == 0){
//         alert("Tinha que ser agora");
//         // let newheight = marcas.style.height = "230px";
//         // marcas.setAttribute(newheight);
//     }

let array = [];
for(i=0; i<20; i++){
    array.push(i);
    // console.log(i);
}
for(i of array){
    console.log(i%7);
}