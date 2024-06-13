//Um objeto representa uma classe, que contém métodos e propriedades. Cada objeto é independente
//do outro.
class Funcionario{
    //O construtor é imediatamente chamado assim da instância de uma classe.
    constructor(pnome, pcargo){ //Se passado por parâmetro, deve ser adicionado na instância.
        this.nome = pnome; 
        switch (pcargo) {
            case 1:
                this.cargo = "Desenvolvedor JS"
                break;
            case 2:
                this.cargo = "Software Tester"
                break;
            case 3:
                this.cargo = "Desenvolvedor Spring"
                break;
            default:
                this.cargo = "Não é um cargo";
                break;
        }
        //Getters e setters no JS:
    }
    getNome(){
        return this.nome;
    }
    getCargo(){
        return this.cargo;
    }
    setNome(nome){
        this.nome = nome;
    }
    setCargo(cargo){
        this.cargo = cargo;
    }
}

let f1 = new Funcionario("Carlos", 1); //O new indica uma nova instância da classe Funcionario.
let f2 = new Funcionario("Miguel", 3);
let f3 = new Funcionario("Sonia", 2);
console.log(f1);
console.log(f2);
console.log(f3);