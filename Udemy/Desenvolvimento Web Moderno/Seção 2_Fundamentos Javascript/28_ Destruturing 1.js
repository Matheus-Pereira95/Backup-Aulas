// Novo recurso do ES6

const pessoa = {
    nome: 'Matheus',
    idade: 26,
    endereco: {
        logradouro: 'João Freitas',
        numero: 193,
        bairro: 'Trindade'
    }
}

const {nome , idade} = pessoa
console.log(nome, idade)

let {nome: name , idade: age} = pessoa

console.log(age,name)

const { endereco: {logradouro, numero, bairro} } = pessoa
console.log(logradouro, numero, bairro)