//No HTML usado, a div caixa1 é parent, e suas divs contidas são child. Todas as childs dentro
//de caixa1 estão relacionados - d1 é first child e d7 é last child. Todos são sibling elements. 
//Por sua vez, está contido em d1 seu texto ("Circuitos Digitais"); contudo, não é um elemento, 
//portanto, não é child. Se o texto estivesse contido dentro de outra div, seria child de d1, e
//não teria relação com os siblings de seu parent.
//No firefox, em inspecionar, clicando no elemento e abrindo suas propriedades DOM, isso exibe
//as children. Os ChildNodes, mesmo tendo somente 7 divs, exibe 15 childNodes. Isso pois os textos
//dentro de suas divs child são considerados como child também. Children são somente as divs.
//FirstChild é um text. FirstElementChild é uma div. O mesmo com os Last. NextSibling e NextElement
//Sibling seguem a mesma lógica.

let discipl = [...document.querySelectorAll(".discip")];
let caixa1 = document.querySelector("#caixa1");
let caixa2 = document.querySelector("#caixa2");
let dis1 = document.querySelector("#d1");
console.log(caixa1.children); //Sendo children um array, pode-se indicar sua posição.
console.log(dis1.getRootNode()); //Sempre retorna o document, que é o nó raiz.
//.ownerDocument retorna também o document.
console.log(caixa1.hasChildNodes()); //Um método que retorna um booleano. Se tem, true.
console.log(discipl[0].hasChildNodes()); //Também é true, pois ChildNode inclui não elementos, como texto.
//Para verificar se há um elemento filho, pode-se usar if-else:
if(discipl[0].children.length > 0){
    console.log("Tem filhos");
}else{console.log("Não tem filhos");} 

//Operação ternária:
console.log(caixa1.children.length > 0 ? "Tem filhos" : "Não tem filhos");
//Pode-se também modificar o conteúdo dos filhos:
caixa1.firstElementChild.innerHTML = "Disciplina modificada";

let d7_1_1 = document.querySelector("#d7_1_1");
console.log(d7_1_1.parentElement); //Retorna a div pai.
console.log(d7_1_1.parentNode.parentNode); //Retorna a div avô.

//Pode-se também criar um elemento HTML e anexá-lo à página.
const newelem = document.createElement("div"); //Adicionado à memória.
newelem.innerHTML = "Cálculo II"; //Adiciona texto à div criada.
newelem.setAttribute("id", "d8"); //SetAttribute adiciona as propreidades.
newelem.setAttribute("class", "discip dis1"); //Adiciona as classes.
caixa1.appendChild(newelem); //Anexa o elemento à caixa1.

//Também pode-se adicionar diversos novos elementos dinamicamente.
const discipl2 = ["Estrutura de Dados I", "Probalidade e Estatística", "Inteligência Artificial",
"Computação Gráfica", "Compiladores"];
discipl2.map((e, num)=>{
    const ne = document.createElement("div");
    ne.innerHTML = e;
    ne.setAttribute("id", "d2_"+num); //A vantagem do map é que já tem um atributo embutido com número;
    //isso faz com que possa se modificar o id dele também de maneira dinâmica.
    ne.setAttribute("class", "discip dis1");

    //Adicionando uma imagem ao elemento:
    let btremoc = document.createElement("img");
    btremoc.setAttribute("src", "./dancing-roach.gif");
    btremoc.setAttribute("class", "dancing-roach");
    btremoc.addEventListener(("click"), (e)=>{
        //Para uso do removeChild, se referencia seu elemento pai; pode-se usar o remove para
        //remover o elemento diretamente. Porém, não se pode utilizar target dessa forma, porque
        //está referenciando a imagem, e não toda a div a ser removida.
        caixa2.removeChild(e.target.parentNode);
    })
    ne.appendChild(btremoc);
    caixa2.appendChild(ne);
})
