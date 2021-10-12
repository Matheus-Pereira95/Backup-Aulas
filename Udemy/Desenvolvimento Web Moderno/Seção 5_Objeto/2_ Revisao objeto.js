// Coleção dinamica de pares chave/valor 

const produto = new Object
produto.nome = 'Cadeira'
produto.preco = 212
produto.marca = 'generica'

console.log(produto)

delete produto.marca

console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 99000,
    proprietario: {
        nome: 'Raul',
        idade: 55,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 11
        }
    },
    condutores: [{
        nome:'Junior',
        idade:22
    },{
        nome: 'Ana',
        idade:44
    }],
    calcularValorSeguro(){
        //...
    }

}

carro.proprietario.endereco.numero = 1000