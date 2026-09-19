let numero1 = 256;
let numero2 = 7;
let operador = ")";

switch (operador) {
  case "+":
    console.log(numero1 + numero2);
    break;
  case "-":
    console.log(numero1 - numero2);
    break;
  case "*":
    console.log(numero1 * numero2);
    break;
  case "/":
    console.log(numero1 / numero2);
    break;
  default:
    console.log("Operador inválido!");
}
