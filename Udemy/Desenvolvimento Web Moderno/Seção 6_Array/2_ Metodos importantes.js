const pilotos = ['Vettel', 'Alonso', 'Senna', 'Massa']
pilotos.pop() // Remove o ultimo elemento do array 
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // Remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

// Splice pode add e remover elementos (vide aula 1)

// Adicionar 
pilotos.splice(2,0,'Bottas','Massa')
console.log(pilotos)

// remover
pilotos.splice(3,1)
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) // Gera um novo array a partir do indice indicado
console.log(algunsPilotos)
const algunsPilotos2 = pilotos.slice(1, 4) // Pega do indice 1 ao indice 4 sem incluir o indice 4 
console.log(algunsPilotos2)
