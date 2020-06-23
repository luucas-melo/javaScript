const entre = function (max,min) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

opcao = -1
do {
    opcao = entre (-1, 10)
    console.log(`Opcao escolhida ${opcao}`)
} 
while (opcao != -1)