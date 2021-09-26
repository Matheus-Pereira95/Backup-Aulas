// Armazenando uma função em uma variavel

const imprimirSoma = function(a,b){
    console.log(a + b)

}

imprimirSoma(6,9)

// Armazenando uma função arrow em uma variável

const soma = (a,b) =>{
    return a + b
}

console.log(soma(75,25))

// Retorno implicito

const subtracao = (a , b) => a - b

console.log(subtracao(50,6))
