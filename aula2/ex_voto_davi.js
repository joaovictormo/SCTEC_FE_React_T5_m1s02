// Recebe a data em formato string (AAAA-MM-DD)
const dataNascimentoString = "1956-05-20";

// Converte a string para um objeto Date e obtém a data atual
const dataNascimento = new Date(dataNascimentoString);
const hoje = new Date();

// Calcula a idade baseada no ano
let idade = hoje.getFullYear() - dataNascimento.getFullYear();

// Ajusta a idade se a pessoa ainda não fez aniversário no ano atual
const mesAtual = hoje.getMonth();
const diaAtual = hoje.getDate();
const mesNasc = dataNascimento.getMonth();
const diaNasc = dataNascimento.getDate();

if (mesAtual < mesNasc || (mesAtual === mesNasc && diaAtual < diaNasc)) {
  idade--;
}

// 4. Verifica as condições de voto
if (idade < 16) {
  console.log("Idade: " + idade + " anos. Você não pode votar.");
} else if ((idade >= 16 && idade < 18) || idade >= 70) {
  console.log("Idade: " + idade + " anos. Você pode votar (opicional).");
} else {
  console.log("Idade: " + idade + " anos. Você deve votar (obrigatório).");
}
