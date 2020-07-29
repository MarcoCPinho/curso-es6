const nome = 'Marco';
const idade = 30;

const usuario = { //quando uma variável recebe outra de msm "nome", podemos ausentar uma dela, conforme exemplo abaixo
    nome, //abreviação de "nome: nome"
    idade, //abreviação de "idade: idade"
    empresa: 'oxy co.',
};
console.log(usuario);