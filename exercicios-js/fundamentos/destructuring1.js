
const pessoa = {
    nome: 'Ana',
    idade: 18,
    endereco: {
        logradouro: 'Rua teste',
        numero: 9999
    } 
}

const {nome, idade} = pessoa // extraindo o atributos idade e nome do objeto
const {nome: n, idade: i} = pessoa // outra forma mas mudando a varaivel

console.log(nome,idade)
console.log(n, i)

const {endereco: {logradouro, numero}} = pessoa
console.log(logradouro, numero)
