// Exibindo variáveis
let nome = "";

if (nome) {
  console.log(nome);
} else {
  console.log("Favor inserir o nome.");
}

// Juntando texto com variáveis
let idade = 17;

if (idade) {
  console.log("A idade é: " + idade);
} else {
  console.log("Favor inserir uma idade.");
}

// Exibindo vários valores de uma vez
if (nome && idade) {
  console.log("Nome:", nome, "| Idade:", idade);
}

let acessoPermitido = false;

if (acessoPermitido) {
  console.log("Pode acessar");
}

/*
// if aninhado
if (idade >= 18) {
  if (idade >= 60) {
    console.log("Você é idoso(a)");
  } else {
    console.log("Você é adulto(a)");
  }
} else {
  console.log("Você é menor de idade.");
} */

if (idade >= 18 && idade < 60) {
  console.log("Adulto(a)");
} else if (idade >= 60) {
  console.log("Idoso(a)");
} else {
  console.log("Menor de idade");
}
