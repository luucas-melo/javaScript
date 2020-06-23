function arredonda(nota) {
    if (nota < 38) {
       console.log(`REPROVADO com nota ${nota}`)
    }
    else{
        if(nota%5 > 2){
            console.log(nota + (5 - (nota % 5)))
        }
        else{
            console.log(nota)
        }
    }
    
}

arredonda(100)
arredonda(30)
arredonda(38)
arredonda(88)
arredonda(61)


