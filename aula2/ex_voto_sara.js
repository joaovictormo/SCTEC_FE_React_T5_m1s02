let nome = "Maria";
console.log("Nome do usuário: " + nome);

let dataDeNascimento = "17/09/1956";
console.log("Data de nascimento: " + dataDeNascimento);

// Usei o método .split("/") para dividir a data onde tem barras e Converti para número com o parseInt.

let anoNascimento = parseInt(dataDeNascimento.split("/")[2]);
let anoAtual = 2026;

let idade = anoAtual - anoNascimento;
console.log("Idade: " + idade + " anos");

if (idade < 16) {
  console.log("Status: Não está apto a votar.");
} else if ((idade >= 16 && idade < 18) || idade >= 70) {
  console.log("Status: Apto a votar (Voto Facultativo).");
} else {
  console.log("Status: Deve votar (Voto Obrigatório).");
} // Se não é menor de 16, nem facultativo, só sobrou ser obrigado a votar (18 a 70 anos)
