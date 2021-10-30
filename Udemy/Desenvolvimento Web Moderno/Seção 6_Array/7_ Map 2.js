const carrinho = [
    { nome: "borracha", preco: 3.45 },
    { nome: "Caderno", preco: 13.90 },
    { nome: "Kit de lapis", preco: 41.22 },
    { nome: "Caneta", preco: 7.5 }
]

// retornar um array apenas com os preços

const apenasPreco = produto => produto.preco

const res = carrinho.map(apenasPreco)

console.log(res)