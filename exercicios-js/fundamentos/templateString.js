const nome = 'Joao'
const concatenacao = 'Olá '+nome+'!'
const template = `Olá ${nome}!`
console.log(concatenacao, template)

const up = texto => texto.toUpperCase()
console.log(`Ei...${up('cuidado')}!`)

console.log(typeof up)