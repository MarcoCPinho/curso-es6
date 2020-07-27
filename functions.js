// valores padrão
/*
function soma(a = 3, b = 6) { //se deixar sem valor ele da erro, pois um item vazio não é substituido por qualquer valor, ele permanece vazio, e o sistema não consegue somar "algo" com "vazio". retonar: NaN (not a number)
    return a + b;
}
*/
//aplicando arrow function na sintaxe acima:
const soma = (a = 3, b = 6) => a + b;

console.log(soma(1)); //7
console.log(soma()); //9