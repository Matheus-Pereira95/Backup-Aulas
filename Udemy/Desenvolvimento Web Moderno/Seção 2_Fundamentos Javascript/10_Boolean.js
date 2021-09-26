let isInativo = false
console.log(isInativo)

let isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!isAtivo)
console.log(!!isAtivo)

/*
    Ideia da Logica onde ( ! ) é uma negação, onde !true = false, !!true = true
*/
console.log('---------------------------------------------------------------')
// Os verdadeiros 
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('---------------------------------------------------------------')

console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('---------------------------------------------------------------')

const nome2 = ''
console.log(nome2 || 'Desconhecido') /*

    Quer dizer, procure o valor de nome2 e se for false, aplique o valor 'Desconhecido'

    lembrando o item acima 

    string vazia é um item que retorna false.

    String com qualquer valor, incluindo um espaço, retorna true
*/




