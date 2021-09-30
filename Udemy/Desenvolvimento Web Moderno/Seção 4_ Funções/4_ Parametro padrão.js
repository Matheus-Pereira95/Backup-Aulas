// Estrategia 1 para gerar um valor padrao

function soma1 (a,b,c){
    a = a || 1
    b = b || 2
    c = c || 3

    return a+b+c
}

console.log(soma1())
console.log(soma1(3))
console.log(soma1(1,6))
console.log(soma1(4,6,8))
console.log(soma1(0,0,0)) // bug = o 0 acaba sendo reconhecido como false e o valor padrao é retornado. 

console.log('-----------------------------------------------------------------------------')

// Estratégia 2 para gerar um valor padrão 

function soma2 (a,b,c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 2
    c = isNaN(c) ? 1 : c

    return a + b + c
}

console.log(soma2())
console.log(soma2(3))
console.log(soma2(1,6))
console.log(soma2(4,6,8))
console.log(soma2(0,0,0))

console.log('-----------------------------------------------------------------------------')

// Valor padrao de acordo com o ES6 (2015)

function soma3 (a=1,b=2,c=3){
    return a+b+c
}

console.log(soma3())
console.log(soma3(3))
console.log(soma3(1,6))
console.log(soma3(4,6,8))
console.log(soma3(0,0,0))

