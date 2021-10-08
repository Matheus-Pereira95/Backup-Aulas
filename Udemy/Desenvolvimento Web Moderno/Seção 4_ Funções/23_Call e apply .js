function getPreco (imposto = 0, moeda = 'R$'){
    
    return ` ${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`

}

const produto = {
    nome: 'Notebook',
    preco: 5000,
    desc: 0.15,
    getPreco

}

global.preco = 20
global.des = 0.1

console.log (getPreco())
console.log(produto.getPreco())

const carro = { preco: 50000, desc: 0.10}

console.log( getPreco.call(carro)) // call 
console.log(getPreco.apply(carro)) // apply