// Calculadora sctec
let numero1 = 10;
let numero2 = 0;
let operador = "/";

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
    if (numero2 !== 0) {
      resultado = numero1 / numero2;
    } else {
      resultado = "Erro: Divisão por zero não é permitida.";
    }
    break;
  default:
    resultado = "Operador inválido! Use +, -, * ou /.";
}

console.log(`Resultado: ${numero1} ${operador} ${numero2} = ${resultado}`);
