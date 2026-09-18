let idade = 70;

if (idade >= 18 && idade < 70) {
  console.log("obrigatorio votar");
} else if (idade < 16) {
  console.log("não pode votar");
} else if (idade >= 70 || idade === 16 || idade === 17) {
  console.log("voto opcional");
}
