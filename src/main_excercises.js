
/*****************************Exercicios do módulo 2***********************/
/*
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
/* REMOVA ESTE COMENTARIO PARA VER ASYNC/AWAIT EM FUNCIONAMENTO (1)
const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('OK') }, 2000);
});
*/
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
/* REMOVA ESTE COMENTARIO PARA VER ASYNC/AWAIT EM FUNCIONAMENTO (2)
// Usando o async acima com arraowFunction:
const executaPromise = async () => {
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
}

executaPromise();
*/
/*****************************Axios***********************/
/*
import axios from 'axios';

class Api {
    static async getUserInfo(username) {
        try { //para usar o catch tb, tem que colocar este TRY no inicio do comando
            const response = await axios.get(`https://api.github.com/users/${username}`) //em caso de sucesso

            console.log(response);
        } catch (err) { //em caso de erro
            console.warn('Erro na API');
        }
    }
}

Api.getUserInfo('MarcoCPinho');
Api.getUserInfo('MarcoCPinho123123123')
*/
/*****************************Exercicios do módulo 3***********************/
/* EX1
// Funão delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
async function umPorSegundo() {
   await delay();
   console.log('1s');
   await delay();
   console.log('2s');
   await delay();
   console.log('3s');
}
umPorSegundo();
*/
/* EX2
import axios from 'axios';
async function getUserFromGithub(user) {
    try{
        const response = await axios.get(`https://api.github.com/users/${user}`);
            console.log(response.data);
        }
        catch(err){
            console.log('Usuário não existe');
        }
}
getUserFromGithub('MarcoCPinho');
getUserFromGithub('diego3g124123');
*/
/*EX3
import axios from 'axios';
class Github {
    static async getRepositories(repo) {
        try {
            const response = await axios.get(`https://api.github.com/users/${repo}/repos`)

            console.log(response.data);
        } catch (err) {
            console.log('Repositório não existe');
        }
    }
}
Github.getRepositories('MarcoCPinho');
Github.getRepositories('rocketseat/dslkvmskv');
*/
/*EX4
import axios from 'axios';
const buscaUsuario = async usuario => {
    try {
        const response = await axios.get(`https://api.github.com/users/${usuario}`);
        console.log(response.data);
    } catch (err) {
        console.log('Usuário não existe');
    }
};
buscaUsuario('MarcoCPinho');
*/