let nome = "André";
let idade = 70;

if (idade >= 18 && idade < 70) {
  console.log(nome + " é obrigado a votar");
} else if ((idade >= 16 && idade <= 17) || idade >= 70) {
  console.log(nome + " pode votar");
} else {
  console.log(nome + " não pode votar");
}
