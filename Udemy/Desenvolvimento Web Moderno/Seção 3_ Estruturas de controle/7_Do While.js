function minimoEMaximo (min,max){
    const valor = Math.random() * (min,max) + min
    return Math.floor(valor)
}

let opcao = 0

do{
  opcao = minimoEMaximo(-1,10)
  console.log(`O valor atual é ${opcao}`)
} while(opcao != -1)