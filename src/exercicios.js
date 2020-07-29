/*
Exercícios: Módulo 01
//1º exercício
const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];
*/
/*
//2º exercício
//2.1 Utilizando o map
const idades = usuarios.map(usuarios => usuarios.idade);
console.log(idades);

//2.2 Utilizando o filter
const filtro = usuarios.filter(usuarios => usuarios.empresa === 'Rocketseat' && usuarios.idade >= 18)
console.log (filtro);

//2.3 Utilizando o find
const find = usuarios.find(usuarios => usuarios.empresa === 'Google')
console.log(find);

//2.4 Unindo operações
const asd = usuarios
.map(usuarios => ({...usuarios, idade: usuarios.idade *2}))
.filter(usuarios => usuarios.idade <= 50)

console.log(asd);
*/
/*
//3º exercício
//3.1
const arr = [1, 2, 3, 4, 5];
arr.map(item => item + 10);

//3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };
const mostraIdade = usuario => usuario.idade;
mostraIdade(usuario);

//3.3
// Dica: Utilize uma constante pra function
const nome = "Diego";
const idade = 23;
const mostraUsuario = (nome = 'Diego', idade = 18) => ({nome, idade});

mostraUsuario(nome, idade);
mostraUsuario(nome);

//3.4
const promise = () => new Promise((resolve, reject) => resolve());
*/
/*
4º exercício
//4.1 Desestruturação simples
const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
   };
const {nome, endereco:{cidade, estado}} = empresa;
console.log(nome);
console.log(cidade);
console.log(estado);
*/
/*
//4.2 Desestruturação em parâmetros
function mostraInfo({nome, idade}) {
    return `${nome} tem ${idade} anos.`;
   }
   mostraInfo({ nome: 'Diego', idade: 23 })
*/
/*
//5º Exercício
//5.1 Rest
const arr = [1, 2, 3, 4, 5, 6]
const [x, ...y] = arr;

console.log(x);
console.log(y);


function soma(...nums) {
return nums.reduce((a, b) => a + b);
}
  
console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2, 2, 5)); // 10

//5.2 Spread
const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};
const usuario2 = {...usuario, nome: 'Gabriel'};
const usuario3 = {...usuario, endereco: { ...usuario.endereco, cidade: 'Lontras'}};

console.log(usuario2);
console.log(usuario3);
*/
/*
//6º Exercício
const usuario = 'Diego';
const idade = 23;
console.log(`O usuário ${usuario} possui ${idade} anos`);
*/
/*
//7º exercício
const nome = 'Diego';
const idade = 23;
const usuario = {
 nome,
 idade,
 cidade: 'Rio do Sul',
};
*/
/**************************** Modulo WebPack ***************************************/
//1º exercício, 2º e 3º
export const idade = 30;
export default class Usuario {
 static info() {
 console.log('Apenas teste');
 }
}