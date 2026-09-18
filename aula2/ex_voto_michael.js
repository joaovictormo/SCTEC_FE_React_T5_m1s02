let idade = 70;

if (idade >= 18 && idade < 70) {
  console.log("Deve votar");
} else if (idade < 16) {
  console.log("Não pode votar");
} else if (idade === 16 || idade === 17 || idade >= 70) {
  console.log("Voto opcional");
}
