"use strict";

var usuario = {
  nome: 'Marco',
  idade: '30',
  endereco: {
    cidade: 'Blumenau',
    estado: 'SC'
  }
}; //console.log(usuario);
//buscando informações no método padrão:

/*
const nome = usuario.nome;
const idade = usuario.idade;
const cidade = usuario.endereco.cidade;

console.log(nome);
console.log(idade);
console.log(cidade);
*/
//Aplicando desestruturação no objeto:

/*
const {nome, idade, endereco: {cidade}} = usuario;
console.log(nome);
console.log(idade);
console.log(cidade);
*/
//Aplicando a desestruturação dentro de um parâmentro:

function mostraNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade,
      cidade = _ref.endereco.cidade;
  console.log(nome, idade, cidade);
}

mostraNome(usuario);
