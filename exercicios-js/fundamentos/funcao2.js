// Armazenando uma funcao eu uma variavel
const imprimirSoma = function (a,b) {
    console.log(a+b)
}

imprimirSoma(2, 3)

// Armazenando uma funcao arrow em uma variavel
const soma = (a,b) => {
    return a+b
}
console.log(soma(2, 3))

const subtracao = (a, b) => console.log(a - b)
subtracao(2, 3)