// Funcao sem retorno

function imprimirSoma(a, b) {
    a = a || 0
    b = b || 0
    return a+b
}

console.log(imprimirSoma(3, 5))

function Soma(a = 0, b = 0) { // a e b receberão 0 caso não recebam nenhum valor
    return a+b
}
console.log(Soma(4,10))
console.log(Soma())