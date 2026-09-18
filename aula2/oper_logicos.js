let sobrenome = "";

if (!sobrenome) {
  console.log("Favor inserir o sobrenome.");
}

console.log("tudo certo, vida que segue");

let usuarioDB = "ires.oliveira";
let senhaDB = "uyagyuaedg";
//ires.oliveirauyagyuaedg
let usuarioTentativa = "ires.oliveira";
let senhaTentativa = "1234";
//ires.oliveira1234

if (usuarioDB !== usuarioTentativa || senhaDB !== senhaTentativa) {
  console.log("Usuario invalido");
} else {
  console.log("Acesso liberado");
}

if (usuarioDB === usuarioTentativa && senhaDB === senhaTentativa) {
    console.log("Acesso liberado");
} else {
    console.log("Usuário inválido")
}


if (true || true) {
    console.log("true || true = true");
}

if (true || false) {
    console.log("true || false = true");
}

if (false || true) {
    console.log("false || true = true");
}
if (false || false) {
    console.log("false || false = true");
}

if (true && true) {
    console.log("true && true = true");
}

if (true && false) {
    console.log("true && false = true");
}

if (false && true) {
    console.log("false && true = true");
}
if (false && false) {
    console.log("false && false = true");
}
