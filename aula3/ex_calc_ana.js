let numero1 = 10;
let numero2 = 20;
let operador = "o";

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
