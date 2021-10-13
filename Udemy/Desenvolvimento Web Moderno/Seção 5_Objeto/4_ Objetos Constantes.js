// pessoa -> 123(espaco de memoria) -> {...}

const pessoa = {nome: 'Matheus'}
pessoa.nome = 'Jãão'
console.log (pessoa)

// pessoa -> 456 -> {...}

// pessoa = { nome: 'Maria'}

/*
    A constante pessoa aponta para um endereço de memoria "123" que aponta para o Objeto criado, isso torna possivel modificar a estrutura do objeto atraves da notação ponto "pessoa.nome".

    No Exemplo 2, a constante pessoa esta sendo apontada para outro endereço de memoria "456" onde esta outro objeto, no entanto, a constante não permite esse tipo de alteração, resultando em um erro 

*/ 

Object.freeze(pessoa) 

/*
 Comando .freeze "congela" o valor dentro de um objeto, evitando assim que este possa ser alterado. 
*/

pessoa.nome = 'Vai dar erro!!'

console.log(pessoa.nome)
