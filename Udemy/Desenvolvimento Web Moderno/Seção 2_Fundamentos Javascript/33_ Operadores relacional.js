// Operadores relacionais -> Operador Binario

console.log('1 - ', '1' == 1)
console.log('2 - ', '1' === 1)
console.log('3 - ', '3' != 3)
console.log('4 - ', 1 > 2)
console.log('5 - ', 3 < 8)
console.log('6 - ', 2 <= 2 )
console.log('7 - ', 10 >= (2*5))

const d1 = new Date(0)
const d2 = new Date (0)
console.log('8 -', d1 == d2)
console.log('9 -', d1 === d2)
console.log('10 -', d1.getTime() == d2.getTime())

console.log('11 - ', undefined == null)
console.log('11 - ', undefined === null)