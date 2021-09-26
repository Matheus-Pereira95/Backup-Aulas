let num = [11,10,15,30,10,40,60,12,434,567]
num.sort()
/*num[3] = 154
num[4] = 240
num.push(9)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posiçoes`) */

/*for(let c = 0; c<num.length; c++){
    console.log(` A posição ${c} tem valor ${num[c]}  `)
}*/

/*for(let pos in num ){  // Para cada posição em num eu vou mostrar o num[pos] 
    console.log(` A posição ${pos} tem valor ${num[pos]}  `)
}
*/

let find = num.indexOf(40)
console.log(`O valor 40 esta na posição ${find}`)
