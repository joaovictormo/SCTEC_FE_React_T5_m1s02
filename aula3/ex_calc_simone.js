// 1. Declaração das variáveis
let numero1 = 10;
let numero2 = 5;
let operador = "0"; // Altere aqui para +, -, *, / ou qualquer outro caractere para testar

let resultado;

// 2. Estrutura switch para verificar o operador
switch (operador) {
  case "+":
    resultado = numero1 + numero2;
    console.log(`Resultado: ${numero1} + ${numero2} = ${resultado}`);
    break;

  case "-":
    resultado = numero1 - numero2;
    console.log(`Resultado: ${numero1} - ${numero2} = ${resultado}`);
    break;

  case "*":
    resultado = numero1 * numero2;
    console.log(`Resultado: ${numero1} * ${numero2} = ${resultado}`);
    break;

  case "/":
    // Tratamento adicional para evitar divisão por zero
    if (numero2 === 0) {
      console.log("Erro: Não é possível dividir por zero!");
    } else {
      resultado = numero1 / numero2;
      console.log(`Resultado: ${numero1} / ${numero2} = ${resultado}`);
    }
    break;

  default:
    // 3. Caso o operador seja inválido:
    console.log(`Erro: O operador '${operador}' é inválido!`);
    console.log("Operadores válidos: '+', '-', '*', '/'.");
    break;
}
