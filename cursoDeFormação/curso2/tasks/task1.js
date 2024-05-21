let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function iLoveJs(){
    alert('Eu amo JS');
}

function Prompt(){
   let city = prompt('Nome da Cidade?')
   let response = alert(`Eu estive ${city} e lembrei de voce`)
}


function SomaDeDoisNumbers() {
    let numero1 = prompt("Insira o primerio número")
    let numero2 = prompt('Insira o segundo número')
    let resposta = numero1 + numero2
    alert(`${numero1} + ${numero2} = ${resposta}`)
}