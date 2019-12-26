const escola = "universidade de Brasilia"
console.log("primeira letra = "+escola.charAt(0))
console.log(escola.split(' '))
console.log(escola.indexOf('u')) // mostra o indice que a string ta localizada
console.log(escola.substring(16)) // mostra a string a partir do indice 16 
console.log(escola.substring(0,3))// mostra do indice 0 até o 2

console.log('Univeridade '.concat(escola).concat("!")) //concatenando string
console.log(escola.replace("Brasilia","Natal"))