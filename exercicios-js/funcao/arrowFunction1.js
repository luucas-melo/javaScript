let dobro = function (a) {
    return 2 * a
}
console.log(dobro(1))
dobro = (a) => {
    return 2 * a
}
console.log(dobro(3))
dobro = a => 2 * a // return impĺicito 
console.log(dobro(2))

let ola = () => 'Olá'
console.log(ola())