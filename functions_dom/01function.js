//Uma função é um bloco de comandos que pode ser executado
function funcao_soma(){ //o () é usado para parametros
    let a = 7; let b = 5;
    let soma = a + b; console.log("Soma: " + soma);
}
funcao_soma();
//manipulando elementos id do HTML
function manipulacao(){
    let diva = document.getElementById("1");
    let divb = document.getElementById("2");
    let divc = document.getElementById("3");
    diva.innerHTML = "novamente modificado";
    divb.innerHTML = "novamente modificado 2: outra modificação";
    divc.innerHTML = "a modificação não tem limites";
}
