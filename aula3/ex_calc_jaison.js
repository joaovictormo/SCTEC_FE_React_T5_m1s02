num1 = 7;
num2 = 0;
option = 4;

console.log("Calculadora com Switch Case \n" + "~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
switch (option) {
  case 1:
    console.log("O resultado da soma é: " + (num1 + num2));
    break;
  case 2:
    console.log("O resultado da subtração é: " + (num1 - num2));
    break;
  case 3:
    console.log("O resultado da multiplicação é: " + num1 * num2);
    break;
  case 4:
    console.log(
      num2 !== 0
        ? "O resultado da divisão é: " + (num1 / num2).toFixed(2)
        : "Erro: Não é possível dividir por zero!",
    );
    break;
  case 5:
    console.log("O resultado da exponenciação é: " + num1 ** num2);
    break;
  case 6:
    console.log("O resultado do resto da divisão é: " + (num1 % num2));
    break;
  default:
    console.log("Insira uma opção válida: ");
}
