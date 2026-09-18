let nome = "Ana";
let idade = 33;

if (idade >= 18 && idade < 70) {
  console.log(nome + "voto obrigatório");
} else if ((idade >= 16 && idade <= 17) || idade <= 70) {
  console.log(nome + "voto facultativo");
} else {
  console.log(nome + "não pode votar");
}
