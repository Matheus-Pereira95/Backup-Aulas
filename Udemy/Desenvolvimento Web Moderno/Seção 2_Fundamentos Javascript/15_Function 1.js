// Função sem retorno

function imprimirSoma(a,b){
    console.log(a+b)
}

imprimirSoma(3,5) //  Soma 3 + 5 = 8
imprimirSoma(1) // soma 1 + undefined = NaN
imprimirSoma(1,3,4,5,6,4,3,4) // Soma 1 + 3 = 4 e ignora os outros numeros
imprimirSoma() // Soma undefined + undefined = NaN
console.log('-----------------------------------------------------------------')

// Função com retorno

function soma(a, b=0 ){
    return a+b

}

console.log(soma(2,3)) // soma 2 + 3 = 5
console.log(soma(5)) // soma 5 + 0 = 5
console.log(soma()) // soma undefined + 0 = NaN