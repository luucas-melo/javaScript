const notas = [7, 3.8, 8.4, 9.1, 4.5]

for (i in notas) {
    console.log(i, notas[i])
}
const pessoa = {
    nome: 'Natalia',
    sobrenome: 'Teixeira',
    idade: 19,
    peso: 44
}
for (atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}