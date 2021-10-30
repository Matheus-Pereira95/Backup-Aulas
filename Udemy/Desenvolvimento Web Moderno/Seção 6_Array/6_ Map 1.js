// O map serve para transformar um array em outro, se o array original tem 6 elementos, o map ira gerar também um array de 6 elementos porem com os dados alterados. Nao modifica o array atual e sim gera um novo

const nums = [1, 2, 3, 4, 5]

// O map é um For com proposito

let res = nums.map(function (e) {
    return e * 2
})

console.log(res)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)

console.log(resultado)
