// Projeto Calculadora em Swictch Case

let numero1 = 10;
let numero2 = 5;
let operador = ",";

let resultado;

switch (operador) {
    case "+":
        resultado = numero1 + numero2;
        break;

    case "-":
        resultado = numero1 - numero2;
        break;

    case "*":
        resultado = numero1 * numero2;
        break;

    case "/":
        resultado = numero1 / numero2;
        break;

    default:
        resultado = "Operador inválido!";
}

console.log("Número 1:", numero1);
console.log("Número 2:", numero2);
console.log("Operador:", operador);
console.log("Resultado:", resultado);
//10 * 5 = 50

// Explicando
// Número 1: 10
// Número 2: 5
// Operador: *
// Resultado: 50