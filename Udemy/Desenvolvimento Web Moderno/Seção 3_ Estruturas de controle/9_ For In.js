const notas = [2.2, 3.3, 4.4, 5.5, 6.6, 7.8, 9.6]

for(let i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Matheus',
    idade: 26,
    sobrenome: 'Pereira',
    altura: 1.85
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

