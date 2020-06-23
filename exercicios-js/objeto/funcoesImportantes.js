const pessoa = {
    nome: 'Maria',
    idade: 10,
    peso: 40
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa)) // retorna um array com subarrays contendo a chave e o valor

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
});

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable : true, //permite ser listado quando printar o objeto
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c:3, a: 4 }
const obj = Object.assign(dest, o1, o2)
console.log(dest)

Object.freeze(obj)