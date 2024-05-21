// Crie uma função que receba três números como parâmetros
// e determine qual é o maior entre eles. Utilize estruturas
// condicionais (if, else) para comparar os valores e determinar
// o maior. Imprima o maior valor no console.

function maiorNumero(number1, number2, number3) {
    if(number1 > number2 && number1 > number3){
        return number1
    } else if(number2 > number1 && number2 > number3){
        return number2
    } else if(number3 > number1 && number2) {
        return number3
    }
}


console.log(maiorNumero(4,3,9))