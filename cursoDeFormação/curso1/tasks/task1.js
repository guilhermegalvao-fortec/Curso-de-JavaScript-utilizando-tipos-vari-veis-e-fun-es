alert('Boas vindas ao nosso site!');

let nome = 'Lua';
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;
let mensagemDeEroo = 'Erro! Preencha todos os campos';
alert(mensagemDeEroo);

let nomeUser = prompt('Qual é o seu nome?')
let idadeuser = prompt('Qual é a sua idade?')

if(idade >= 18) {
    console.log('Pode tirar a habilitação')
}