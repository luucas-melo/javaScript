//par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec(){
    const saudacao = 'Eae' // contexto léxico 2
    return saudacao
}
// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 40,
    peso: 80,
    endereco: {
        logradouro: 'Rua qualquer',
        numero : 123
    }
}
console.log(saudacao)
console.log(exec())

console.log(cliente.endereco.logradouro)