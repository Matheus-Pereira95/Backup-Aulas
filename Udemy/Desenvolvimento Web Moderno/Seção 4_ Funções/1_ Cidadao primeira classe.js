// Função em JS é first-class object 
// Higher-order function

//Uma função sempre retorna algo, caso o return não seja explicitado com o comando a ser retornado, o valor que sera retornado será undefined

// criar de forma literal. 

function func1() { }

// Armazenar em uma variavel

const func2 = function () { } // cria uma função anonima e a atribui a uma constante

// Armazenar em um array

const array = [function (a, b) { return a + b }, func1, func2] // Pode-se tanto declarar a função no array de forma direta, quanto usando a forma literal a variavel que esta com uma function associada a ela.

// armazenar em um atributo de objeto 

const obj = {}
obj.falar = function () {
    return 'Opaa!'
}
console.log(obj.falar())

// Passar função como parametro de outra função 

function run(fun) {
    fun()
}

run(function () { console.log('...Executando...') })

// Uma função pode retornar/conter uma função

function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 2)(2)