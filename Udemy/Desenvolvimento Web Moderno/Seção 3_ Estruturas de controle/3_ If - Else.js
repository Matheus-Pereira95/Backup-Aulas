const imprimirResultado = function(nota){
    if(nota > 7){
        console.log('Aprovado')
    } else {
        console.log ('Reprovado')
    }
}

imprimirResultado(8) // Aprovado
imprimirResultado(4) // Reprovado
imprimirResultado('Opa!') // Reprovado ( tomar cuidado )