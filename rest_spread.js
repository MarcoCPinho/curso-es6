//Rest
const usuario = {
    nome: 'Marco',
    idade: 30,
    empresa: 'oxy co.'
};
const {nome, ...resto } = usuario; //... faz receber o resto dos valores naquela variavel

console.log(nome);
console.log(resto);

//aplicando em vetores
const arr = [1, 2, 3, 4];
const [a, b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c);

//aplicando em parametros de funções
/*
function soma(a, b, ...params) {
    return params;
}
console.log(soma(1, 3, 4));
*/
//outro exemplo aplicado em paramentros
function soma(...params) {
    return params.reduce((total, next) => total + next);
}
console.log(soma(1, 3, 4));

//Spread
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];
console.log(arr3);

const usuario1 = {
    nome: 'Marco',
    idade: 30,
    empresa: 'oxy co.'
};
const usuario2 = {...usuario1, nome: 'Viviane', empresa: 'Nutricionista'};

console.log(usuario2);

const nome2 = "Marco";
const idade2 = 30;
console.log(`Meu nome é ${nome2} e tenho ${idade2} anos.`)