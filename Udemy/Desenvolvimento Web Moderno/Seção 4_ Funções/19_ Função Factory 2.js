function criarProduto (nome,preco,quantidade){
    return {
        nome: nome,
        preco: preco + ' reais ',
        quantidade: quantidade ,
        desconto: 0.05
    }
}

console.log(criarProduto('Coca-cola', 8, 2))
console.log(criarProduto('Notebook', 3000,))