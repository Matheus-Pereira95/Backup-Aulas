function getInteiroAleatorio(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) {
    opcao = getInteiroAleatorio(-1, 10)
    console.log(` Opção escolhida foi ${opcao}`)
}

console.log('Terminou!!')

/*
    Usar o while é apropriado para executar laços que tenham uma quantidade indeterminada de repetiçoes.
*/ 

//'-----------------------------------------------------------------------------------------------------------------'

// While com valores definidos 

let contador = 1
while(contador<=10){
    console.log(contador)
    contador++
}