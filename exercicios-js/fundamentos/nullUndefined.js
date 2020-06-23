let valor
console.log(valor) // undefined, ou seja, não foi inicializada
//console.log(valor2) // not defined, ou seja, não foi declarada

valor = null //ausencia de valor
console.log(valor)
//console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preco) // undefined
console.log(produto)
produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite usar atribuir undefined
console.log(!!produto.preco)
console.log(produto)

produto.preco = null //sem preço
console.log(!!produto.preco)
console.log(produto)