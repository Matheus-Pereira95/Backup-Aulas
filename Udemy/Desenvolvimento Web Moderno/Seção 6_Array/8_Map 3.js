Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i=0; i<this.length; i++){
        newArray.push(callback(this[i],i, this))
    }
    return newArray
}

const carrinho = [
    { nome: "borracha", preco: 3.45 },
    { nome: "Caderno", preco: 13.90 },
    { nome: "Kit de lapis", preco: 41.22 },
    { nome: "Caneta", preco: 7.5 }
]

const apenasPreco = function(produto){
    return produto.preco
}

const res = carrinho.map2(apenasPreco)

console.log(res)
