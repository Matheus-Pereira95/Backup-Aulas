const notas = [2.2,3.5,6.9,8.7,9.9,4.6]

// Sem callback

let notasBaixas1 = []
let notasAltas = []
for (let i in notas){
    if(notas[i] < 7){
        notasBaixas1.push(notas[i])
    } else if(notas[i] >= 7){
        notasAltas.push(notas[i])
    }
}

console.log(notasBaixas1)
console.log(notasAltas)

// Com Callback

const notasBaixas2 = notas.filter(function(nota){
    return nota < 7
})

console.log(notasBaixas2)

const notasBaixas3 = notas.filter(nota => nota < 6)
console.log(notasBaixas3)