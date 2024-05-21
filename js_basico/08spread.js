//o spread é útil em uso relacionado a arrays, como conversão de coleções HTML para uma array
let l1 = [1, 2, 3, 4, 5];
let l2 = [414, 29, 7];
console.log([...l1, ...l2]); //o spread copia o array de n1 dentro de n3; nesse caso, n3=n1 teria o 
//mesmo resultado

let a = {nome: "A", lugar: 1, casa: "nova"};
let b = {nome: "B", lugar: 2, carro: "usado"};
//nesse caso, o spread pode copiar os dois objetos; se tiverem os mesmos atributos, copia apenas 
//o último. Atributos diferentes, contudo, são copiados do outro objeto se não houver no último.
console.log({...a, ...b});

//uso em função:
function mult(n1, n2, n3){
    return n1*n2*n3;
}
console.log(mult(3, 3, 3)); //27
//com o uso do spread, podem-se usar valores diretamente de um array:
let lspr = [2, 4, 6];
console.log(mult(...lspr)); //48

//uso com o html:
let mydivs = document.getElementsByTagName("div"); //cria uma coleção de todos os divs;
console.log(mydivs);
//quando se tem uma coleção html, só se podem ter objetos html nessa coleção
//num array, existem maiores possibilidades
let colarrayed = [...document.getElementsByTagName("div")]; //transforma a coleção em array com spread
colarrayed.forEach(element => { //isso só é possível pois isso é um array
        element.innerHTML = "modificado"; //pega cada elemento e muda seu texto;
    }
)