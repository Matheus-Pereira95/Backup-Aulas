// Object.preventExtensions = previne que seja adicionados novos atributos (pode editar existentes ou remover)

const produto = Object.preventExtensions({
    nome: 'Qualquer', 
    preco: 1.99, 
    tag: 'promocao'

})

 console.log('Extensivel', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal = Nao pode adicionar ou remover os atributos (apenas editar)

const pessoa = {
    nome: 'Juliana',
    idade: 35
}

Object.seal(pessoa)

console.log('Selado', Object.isSealed(pessoa))

delete pessoa.nome
pessoa.corDoCabelo = 'Loira'
pessoa.idade = 25

console.log(pessoa)

// Object.freeze = selado + objetos constantes (nao pode fazer modificações+)
