const virgula = (num) => {
    num = num.toPrecision(2)
    num = num.toString()
    return num
}

let num2 = virgula(0.1 + 0.2)
num2 = num2.split('.')
console.log(`R$${num2[0]},${num2[1]}`)

