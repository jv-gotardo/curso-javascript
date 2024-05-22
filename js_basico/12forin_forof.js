const mydivs = document.getElementsByTagName("div");
let array = [15, 30, 45, 60, 75, 90];
//for com array: 
for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}
//for in: (para iterações)
for(i in array){
    console.log(array[i]);
} 
//for of: (vai diretamente dentro dos elementos do array)
for(i of array){
    console.log(i);
}
//uso em elementos HTML
for(i of mydivs){
    console.log(i.innerHTML="nova div");
}