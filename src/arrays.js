const arr = [1, 3, 4, 5, 8, 9];

//todos os comandos a seguir irão varrer o array, mas cada um com uma função em específico.
const newArr = arr.map(function(item){
    return item*2;
});
console.log(newArr);
//.map(function(){}) -> irá por todos os itens do array e realizar a função designada dentro do map.

const sum = arr.reduce(function(total, next){
    return total + next;
});
console.log(sum);
//.reduce(function(){}) -> reduz o array todo a 1 valor, seja somando todo ele, subtraindo, multiplicando e etc...

const filter = arr.filter(function(item){
    return item %2 === 0;
})
console.log(filter);
//.filter(function(){}) -> return é obrigado a ser boolean. filtra de acordo com a função.

const find = arr.find(function(item){
    return item ===4;
})
console.log(find);
//.find(function(){}) -> return ~e obrigado a ser um boolean. procura pela função em específico.