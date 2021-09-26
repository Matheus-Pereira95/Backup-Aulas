// Array 

const valores = [8.7, 5.8, 5.5, 3]

console.log(valores[0], valores[3])

valores[4] = 5.756

console.log(valores)

console.log(valores.length) // array.length = calcula o tamanho do array 

valores.push(85) // array.push = add um elemento ao array 

console.log(valores)

console.log(valores.pop()) // array.pop = remove o ultimo item do array e o retorna como resultado
delete valores[4] // outra forma de remover itens do array, deleta o indice indicado do array

console.log(valores)

