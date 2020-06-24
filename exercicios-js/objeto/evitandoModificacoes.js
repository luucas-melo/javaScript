// Object.prevent Extensions
// N deixa adicionar mais atributos no objeto
const produto = Object.preventExtensions({
    nome:'Teste', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto)) // false
produto.nome = 'Borracha'
produto.descricao = 'Borracha branca' // n é possível adicionar esse atributo
delete produto.tag
console.log(produto)

// Object.seal
// Não permite remover ou adicionar atributos no objeto
const pessoa = {nome: 'Natalia', idade: 19}
Object.seal(pessoa)
console.log('Selado', Object.isSealed(pessoa)) // true

//Object. freeze = selado + valores constantes