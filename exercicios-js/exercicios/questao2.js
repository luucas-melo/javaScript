const triangulo = function (a, b, c) {
    if (a === b && b === c)
        return 'equilatero'
    else if (a!== b && a!== c && b!== c)
        return 'escaleno'
    else
        return 'isosceles'
}

console.log(triangulo(4, 4, 4))