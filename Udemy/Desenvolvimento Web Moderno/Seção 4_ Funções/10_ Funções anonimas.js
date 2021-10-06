const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 6, soma) // Inutil usar o soma, pois ja esta definido 
imprimirResultado(5, 5, function (x, y) {
    return x - y
})

imprimirResultado(7, 9, (x,y) => x*y)

const pessoa = {
    falar: function(){
        console.log('Opaa!!')
    }
}

pessoa.falar()