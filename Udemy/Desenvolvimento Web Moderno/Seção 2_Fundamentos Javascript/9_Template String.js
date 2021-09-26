// Template String

const nome = 'Matheus'

const conc = ' Ola ' + nome + ' ! '

const ts = `Ola ${nome} ! `

console.log(conc)
console.log(ts)

/*
    Na template string pode usar a concatenação dentro da propria TS apenas usando ${variavel}. Dentro da TS 
    também é possivel fazer quebra de linhas sem erros. 
*/

console.log(`8 ao quadrado é = ${Math.pow(8,2)}`)