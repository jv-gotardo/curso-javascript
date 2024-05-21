let a = 17;
let b = 12;

if(a%2 == 0){
    console.log("Par");
    if(a > b){
        console.log("Maior que " + b);
    }else{
        console.log("Menor que " + b);
    }
}else{
    console.log("Ímpar");
    if(b > a){
        console.log("Maior que " + a);
    }else{
        console.log("Menor que " + a);
    }
}
