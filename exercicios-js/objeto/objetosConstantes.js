// pessoa -> 0x1E -> {...}
const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa = {nome: 'Ana'} erro, pois pessoa é uma constante e n pode ter o endereço de memória mudado

Object.freeze(pessoa) // ignora as mudanças que forem feitas no objeto

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome
console.log(pessoa.nome)
console.log(pessoa)