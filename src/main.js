
/*
//Exercicios do módulo 2
//1.1
import ClasseUsuario from './exercicios';
ClasseUsuario.info();

//1.2
import {idade} from './exercicios';
console.log(idade);

//1.3
import Usuario, {idade as IdadeUsuario} from './exercicios';
*/
/*****************************Async/await***********************/
const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('OK') }, 2000);
});
/*
o Async/await abaixo é a mesma coisa que:
    minhaPromise().then(response => {
        console.log(response);

        minhaPromise().then(response => {
            console.log(response);

            minhaPromise().then(response => {
                console.log(response);
            })
        })
    })
*/
/*
async function executaPromise() {
    console.log(await minhaPromise()); //a próxima linha só executa depois que esta terminar
    console.log(await minhaPromise()); //a próxima linha só executa depois que esta terminar
    console.log(await minhaPromise()); //a próxima linha só executa depois que esta terminar
}
*/
// Usando o async acima com arraowFunction:
const executaPromise = async () => {
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
}

executaPromise();