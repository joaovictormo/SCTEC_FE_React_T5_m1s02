// exemplo de tipagem dinamica em JS

let nomeDoUsuario; //undefined
console.log(nomeDoUsuario);
console.log(typeof nomeDoUsuario);

nomeDoUsuario = 'Joao'; // string
console.log(nomeDoUsuario);
console.log(typeof nomeDoUsuario);

nomeDoUsuario = null; // null
console.log(nomeDoUsuario);
console.log(typeof nomeDoUsuario);

nomeDoUsuario = 15; // number
console.log(nomeDoUsuario);
console.log(typeof nomeDoUsuario);

nomeDoUsuario = true; // boolean
console.log(nomeDoUsuario);
console.log(typeof nomeDoUsuario);

let dataNascimento = "25/02/1991";

let $idade;

let _idade;

let nota1 = "7.5";
let nota2 = "8.0";

console.log("O tipo da variavel nota1 é: " + typeof nota1);
console.log("O tipo da variavel nota2 é: " + typeof nota2);

/* let nota1Number = Number(nota1);
console.log("O tipo da variavel nota1Number é: " + typeof nota1Number);
let nota2Number = Number(nota2);
console.log("O tipo da variavel nota2Number é: " + typeof nota2Number); */

nota1 = Number(nota1);
nota2 = Number(nota2);

console.log("os tipos foram convertidos.");

console.log("O tipo da variavel nota1 é: " + typeof nota1);
console.log("O tipo da variavel nota2 é: " + typeof nota2);

let media = (nota1 + nota2) / 2;
console.log(media);

let nomeDaMae;

let datanascimento = 3;

let naoEhUmNumero = NaN;

let nome = "João";
let sobrenome = "Oliveira";

let resultado = nome - sobrenome;

console.log(resultado);
console.log(typeof resultado);

let clienteRecorrente = false;
console.log(clienteRecorrente)

const nomeUsuario = "joaovictor";


let idadeStr = String(35); // "35"
console.log(typeof idadeStr);

let idade = 35;
idade = idade + 1;

let porcentagem = 100 / 6;
console.log(porcentagem.toFixed(2));
