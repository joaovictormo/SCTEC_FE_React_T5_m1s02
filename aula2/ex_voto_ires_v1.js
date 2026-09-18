function verificarVoto(dataNascimentoStr) {
  // Espera formato DD/MM/AAAA ex: "15/03/2008"
  const partes = dataNascimentoStr.split('/');
  if (partes.length!== 3) {
    return "Formato inválido! Use DD/MM/AAAA";
  }

  const dia = parseInt(partes[0]);
  const mes = parseInt(partes[1]) - 1; // mês no JS começa em 0
  const ano = parseInt(partes[2]);

  const nascimento = new Date(ano, mes, dia);
  const hoje = new Date();

  if (isNaN(nascimento.getTime())) {
    return "Data inválida!";
  }

  let idade = hoje.getFullYear() - nascimento.getFullYear();
  const fezAniversarioEsteAno =
    hoje.getMonth() > nascimento.getMonth() ||
    (hoje.getMonth() === nascimento.getMonth() && hoje.getDate() >= nascimento.getDate());

  if (!fezAniversarioEsteAno) {
    idade--;
  }

  if (idade < 16) {
    return `Idade: ${idade} anos -> NÃO PODE VOTAR`;
  } else if ((idade >= 16 && idade < 18) || idade > 70) {
    return `Idade: ${idade} anos -> PODE VOTAR (facultativo)`;
  } else {
    return `Idade: ${idade} anos -> DEVE VOTAR (obrigatório)`;
  }
}

// --- Como usar ---
// No navegador:
let data = prompt("Digite sua data de nascimento (DD/MM/AAAA):");
alert(verificarVoto(data));

// No console para testar:
// console.log(verificarVoto("10/05/2012")); // 14 anos
// console.log(verificarVoto("10/05/2009")); // 17 anos
// console.log(verificarVoto("10/05/2000")); // 25 anos
// console.log(verificarVoto("10/05/1940")); // 86 anos
