//É mais fácil trabalhar com dados a partir de um json, com a possibilidade de conversão para objeto
//literal (e vice-versa).
let time={
    nome: "Uniao Alegria",
    cidade: "Passo Fundo",
    estadio: "Amadeu Juvencio",
    jogadores:{
        j1: "Ronaldinho",
        j2: "Pedro Matias",
        j3: "Nelson Costa",
        j4: "Serafinzinho"
    }
}

//O método Stringify da interface Json converte um objeto literal em um string no formato json.
const jsonobj = JSON.stringify(time);
//Por sua vez, para converter a string em formato json em objeto, usa-se o parse.
const stringobj = JSON.parse(jsonobj);
console.log(jsonobj);
console.log(stringobj);
