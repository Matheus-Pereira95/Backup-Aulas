const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) {
        break // interrompe o laço quando x==5 e sai da estrutura do for
    }

    console.log(`${x} = ${nums[x]}`)
}

for (y in nums) {
    if (y == 5) {
        continue // Interrompe o laço quando y==5, e pula para o laço seguinte no caso ( x==3, x==4, x==6 [...])
    }
    console.log(`${y} = ${nums[y]}`)
}


/*

    O brake age apenas em cima de estruturas: For, While ou Switch

    O continue age apenas em cima de estruturas for e while 

*/

externo:
    for (a in nums) {
        for (b in nums) {
            if (a == 2 && b == 3) break externo
            console.log(` Par = ${a}, ${b}`)
        }   
    }

console.log('FIM')