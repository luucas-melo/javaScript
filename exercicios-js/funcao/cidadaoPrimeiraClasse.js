// Funcao em Js é First-Class Objeto (Citizens)
// Higher-order function

// criar de forma literal
function fun1() {

}

const fun2 = function () { // funcao anonima

}
// Armazenar em um array
const array = [function (a, b) { return a + b }, fun1, fun2]

console.log(array[0](2, 3))
const obj = {}
obj.falar = function () { return 'Opa' }
console.log(obj.falar())
// passar funcao como param
function run(fun) {
    fun()
}

run(function () { console.log('Testando') })
//Uma funcao pode retornar/conter uma funcao

function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)