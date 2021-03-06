

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'Ipad Pro', preco: 4199, fragil: true},
    { nome: 'Copo de vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de plastico', preco: 18.99, fragil: false}
]

console.log(produtos.filter(function(p){
    return p.preco < 20
}))

console.log('----------------------------------')

console.log(produtos.filter(function(p){
    return p.nome == 'Notebook'
}))

console.log('----------------------------------')

console.log(produtos.filter(function(p){
    return p.fragil == false
}))

console.log('----------------------------------')

console.log(produtos.filter(function(p){
    return p.fragil == true && p.preco < 100
}))