let num1 = 90;
let num2 = 50;
let operador = "[ ";

let resultado;

switch (operador) {
  case "+":
    resultado = num1 + num2;
    break;
  case "-":
    resultado = num1 - num2;
    break;
  case "*":
    resultado = num1 * num2;
    break;
  case "/":
    resultado = num1 / num2;
    break;
  default:
    resultado = "Operador inválido";
}

console.log("Resultado:", resultado);
