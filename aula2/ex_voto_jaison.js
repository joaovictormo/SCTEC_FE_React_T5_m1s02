// const anoAtual = new Date().getFullYear();
let anoAtual = "2026";
let anoNasc = "2008";
let idade = anoAtual - anoNasc;

if (idade < 16) {
  console.log("Quem tem " + idade + " anos não pode votar!");
} else if (idade < 18 || idade >= 70) {
  console.log("Para quem tem " + idade + " anos, o voto é opcional!");
} else {
  console.log("Para quem tem " + idade + " anos, o voto é obrigatório!");
}
