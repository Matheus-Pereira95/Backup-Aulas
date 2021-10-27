console.log(typeof Array)
console.log(typeof new Array)
console.log(typeof [])

let aprovados = new Array('bia', 'carlos','Ana')
console.log(aprovados)

aprovados = ['bia', 'Carlos','Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo' // Add um elemento a um indice especifico do array
console.log(aprovados[3])

aprovados.push('abia') // Add um elemento ao final do array-
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados)

aprovados.sort() // Reordena os elementos do array
console.log(aprovados)

delete aprovados[9] // Deleta um elemento de um indice especifico
console.log(aprovados)

aprovados.splice(1, 9, 'Matheus', 'Murilo', 'Alice') // Serve para add elementos, remover elementos ou adicionar e remover elementos (substituir) segue a estrutura (indice que vou trabalhar(a partir do incide 1 por exemplo), quantidades de elementos a serem removidos a partir do indice, 'Itens a serem adicionados')
console.log(aprovados)