var x = 2; //variável é mutável e pode sofrer reatribuição (hora é String, dps é Float, dps Int...)

const a = 3; //a constante, diferente da variável, não pode sofrer reatribuição, somente mutação.
//a = 1; //erro, não pode sofrer reatribuição.

const usuario = { nome: 'Marco' };
usuario.nome = 'Viviane';
console.log(usuario); //Viviane
//const recebeu um objeto da classe usuário com o atributo nome:String. Eu alterar os valores da String e dos atirubutos é permitido (considerado uma mutação pelo sistema), pois a constante considerada aqui é o "objeto". Ou seja, não posso transformar o "usuário" em outro coisa: "int", "String", "float", "array" (...), mas posso manipular a vontade os atributos e valores contidos no objeto.

function teste(x){
    let y = 2; //possui escopo local (dentro de cada {} é chamado de escopo)

    if (x > 5 ) {
        
        console.log(x, y);
    }
}
teste(10); //10, 2

console.log(y); //erro! como y possui um escopo local e não global (var ou const por exemplo), o sistema não consegue encontrar a definição de y (ele só existe dentro daquele {})