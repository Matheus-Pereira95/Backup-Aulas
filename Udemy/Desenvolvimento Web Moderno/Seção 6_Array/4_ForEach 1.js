const aprovados = ['Agatha','Aldo','Daniel','Raquel','Matheus','Murilo']

aprovados.forEach(function(nome,indice,array){
    console.log(`${indice+1} = ${nome}`)
    console.log(array)
})

console.log('------------------------------------------------------------------')

aprovados.forEach(nome=>console.log(nome))

console.log('------------------------------------------------------------------')

const exibirAprovados = aprovados => {
    console.log(aprovados)
}

aprovados.forEach(exibirAprovados)

// O forEach recebe uma função callback com 3 parametros que são ('item do array', indice, array)