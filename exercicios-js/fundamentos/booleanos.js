let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 0 // qualquer valor diferente de 0 é true
console.log(!isAtivo)
console.log('\nOs verdadeiros')
console.log(!!33)
console.log(!!-1)
console.log(!!1);
console.log("\nOs falsos")
console.log(!!(isAtivo = 0))//false pois pega o valor atribuido e não se a atribuicao deu certo
console.log(!!0)
console.log(!!'') // para verificar se a string tá vazia
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!('' || null || 0 || ' ')) // retorna true pois ' ' é verdadeiro
console.log(('' || null || 0 || 'epa')) // retorna o único valor verdadeiro (epa)

let nome = ''
console.log(nome || 'Desconhecido')