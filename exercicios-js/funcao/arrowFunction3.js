let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)
obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(this)
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)
console.log(module.exports === this) // module.exports é === a this