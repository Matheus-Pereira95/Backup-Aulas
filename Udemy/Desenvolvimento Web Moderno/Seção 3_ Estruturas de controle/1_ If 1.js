function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log(`Aprovado com nota ${nota}`)
    }
}

//soBoaNoticia(8.9)
soBoaNoticia(6.9)

function seForVerdadeEuFalo(valor) {
    if (valor) {
        console.log(`É verdade... ${valor}`)
    }
}

// Falsos
seForVerdadeEuFalo('')
seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo(0)

// Verdadeiros
seForVerdadeEuFalo('2')
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([12, 534])
seForVerdadeEuFalo({})