//no do-while, há a garantia de pelo menos uma execução do bloco de comando

let a = 5;

//O bloco será executado pelo menos uma vez;
do{
    console.log("antes do while");
    console.log("A operação será feita depois, portanto ainda é true");
}while(a < 4);