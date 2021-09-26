// Strings -> Cadeia de caracteres, é marcada com " ", '' ou ``.

// 

const escola = 'cod3r'

console.log(escola.charAt(2)) // Retorna o item n da string começando pelo indice 0 

console.log(escola.substring(1)) // Mostra os itens da string a partir do numero fornecido, contando o numero em si, ou seja, 1,2,3,4
console.log(escola.substring(0,2)) // Mostra os itens da string a partir do primeiro indice (incluindo ele), até o segundo indice (sem inclui-lo) 

console.log('Escola'.concat(escola).concat('!'))

// valor literal é o proprio valor, sem armazenar em uma string

console.log(escola.replace(3, 'e'))

console.log('Ana, Maria, Pedro'.split(',')) // Cria um array a partir de uma string, tendo por base um elemento separador, neste caso uma virgula (,).