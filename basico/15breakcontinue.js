//break - sai do loop; continue - reinicia o loop
let a = 6;
let max = 600;

while(a < 600){
    console.log(a);
    if(a == 35){
        break;
    }
    a++;
}

let multiplos3;
//uso do continue
for(let i=1; i<max; i++){
    if(i%3 !=0){
        continue //Retorna ao início do for
    }
    multiplos3++;
    console.log(i);
}
console.log("Múltiplos de 3: " + multiplos3);