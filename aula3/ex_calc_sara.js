let numero1 = 10;
let numero2 = 5;
let operador = "/";
let resultado;

switch (operador) {
  case "*":
    resultado = numero1 * numero2;
    break;
  case "-":
    resultado = numero1 - numero2;
    break;
  case "+":
    resultado = numero1 + numero2;
    break;
  case "/":
    resultado = numero1 / numero2;
    break;
  default:
    console.log("Nao aplicavel");
}

console.log(resultado);
