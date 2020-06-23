const valores = [7.7, 8, 9, 10.1]
let email = 'lucas@gmail.com'
let nome = email.split('@')
console.log(nome[0])

console.log(valores)
valores[4] = 15
valores[5] = nome[0]
console.log(valores)
console.log(valores.length) 
valores.push(false, true, null, 'teste')
console.log(valores)

console.log(valores.pop())

console.log(typeof valores) //é do tipo object
