let idade = 18;

let maioridade = idade >= 18 ? "Adulto" : "Menor de idade";
console.log(maioridade);

let mediaAluno = 7;

let resultadoModulo = mediaAluno >= 7 ? "Aprovado" : "Reprovado";
console.log(resultadoModulo);


let resultado = 0;
if (mediaAluno >= 7) {
    resultado = "Aprovado";
} else { 
    resultado = "Reprovado";
}
console.log(resultado);


let parOuImpar = idade % 2 === 0 ? "par" : "ímpar";
console.log("A idade " + idade + " é " + parOuImpar);
