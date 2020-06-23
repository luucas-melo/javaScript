console.log ('01)', '1' == 1) // true, pois não leva o tipo em consideração
console.log ('02)', '1' === 1) // false, pois os tipos são diferentes
console.log ('03)', '3' != 3)
console.log ('04)', '3' !== 3)

console.log ('05)', 3 < 2)
console.log ('06)', 3 > 2)
console.log ('07)', 3 <= 2)
console.log ('07)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log ('09)', d1 === d2) // false
console.log ('10)', d1 == d2) // false
console.log ('11)', d1.getTime == d2.getTime) // true
console.log ('12)', undefined == null) // true
console.log ('13)', undefined === null) // false