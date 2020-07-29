const arr = [1, 3, 4, 5, 6];

const newArr = arr.map(item => item * 2);
    /*
    se retornar somente 1 valor e não um corpo de comandos, pode ser colocado o "{return item*2;}" após o "=>", abreviando o código, conforme acima. 
    Caso contrário, fica resumido a "arr.map(item => {return item * 2;});";
    O código acima é a mesma coisa que "arr.map((item) => {return item*2;});" que por sua vez é a mesma coisa que "arr.map(function(item){return item*2;});".
    
    OBS: Toda "function(item){}" é chamada de função anônima pois não tem um nome (diferente de "function soma(){}", aonde o nome da função é "soma"). Arrow Function será utilizada com funções anônimas, e não funções com nomes e vários comandos internos.
    */
console.log(newArr);

const teste = () => 'teste';
  //mesma coisa que "const teste = function teste(){return 'teste';};".

console.log(teste());

const asd = () => [1, 2 ,3];
console.log(asd());

const qwerty = () => 3;
console.log(qwerty());

const object = () => ({nome: 'Marco'});
console.log(object());