// Imagine um sistema que determina se um usuário tem idade
// suficiente para comprar o ingresso para um show. Declare
// duas variáveis que determinem a idade mínima e qual a idade
// do usuário e utilize estruturas condicionais (if, else) para
// determinar se o usuário pode realizar a compra.

const ageMin = 16;
let idadeUser = 15

if(idadeUser >= ageMin) {
    console.log('Pode comprar')
} else {
    console.log('Idade não permitida para efetuar a compra')
}