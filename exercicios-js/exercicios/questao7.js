function bhaskara(a, b, c) {
    delta = b**2 - 4*a*c
    let [x1,x2] = [(-b + Math.sqrt(delta)) / (2*a), (-b - Math.sqrt(delta)) / (2*a)]
    
    if(delta < 0) {
        return 'Delta é negativo'
    }
    else{
        if(a != 0){
            return [x1,x2]
            
        }
    }
}
console.log(bhaskara(1,3,2))
console.log(bhaskara(3,1,2))

