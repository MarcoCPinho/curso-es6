class List{ //cria a classe List com os atributos abaixo
    constructor(){ //atributo do construtor, sem paramentros obrigatório
        this.data=[]; //array "data" recebe valor vazio
    }
    add(data){ //cria a função "add" passando o parâmentro "data" (poderia ser qualquer nome aqui)
        this.data.push(data); //coloca o proximo valor "data" (referenciando qualquer nome digitado acima) no array "data" (que foi iniciado com valor zerado no constructor)
        console.log(this.data); //mostra o array data
    }
}
class TodoList extends List{ //class TodoList é filho de List (herda os atributos)
    constructor(){
        super(); //manda chamar os atributos da mãe
        this.usuario = 'Marco'; //cria o atributo "usuário", além dos atributos herdados da classe mãe (List no exemplo)
    }
}
const MinhaLista = new TodoList(); //gera o objeto "MinhaLista" com base na classe "TodoList()"

document.getElementById('buttonAdicionar').onclick = function(){
    MinhaLista.add('New todo'); //ao clicar no botão, adiciona um "New Todo" no array "data" criado anteriormente e executa as funções existentes dentro do array (console.log, por exemplo)
}