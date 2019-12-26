const peso1 = 1.0
const peso2 = Number('3.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))

const prova1 = 9.83
const prova2 = 6.87

const total = prova1 * peso1 + prova2 * peso2
let media = total / (peso1+peso2)
media = media.toFixed(2)
console.log(media) 


console.log(7/0) //infinity
console.log("10"/2)      