let idadeParaVotar = 18;

if ((idadeParaVotar >= 16 && idadeParaVotar < 18) || idadeParaVotar >= 70) {
  console.log("Tem idade para votar");
} else if (idadeParaVotar >= 18 && idadeParaVotar < 70) {
  console.log("Deve votar");
} else {
  console.log("Não pode votar, o cidadão é de menor idade");
}
