/*function composicao(f1,f2,f3,text){
    return f3(f1(f2(text)))
}

function grito(texto){
    return texto.toUpperCase()
}

function enfase(texto){
    return `${texto}!!!!!!!!!!!!!!`
}

function separar(texto){
    return texto.split('').join('  ')
}

let juntar = composicao(
    grito, 
    enfase, 
    separar, 
    'Pare' )

console.log(juntar)*/

// --- METODO 2 --------

function composicao(f1,f2,f3){
    return function(valor){
       return f3(f2(f1(valor)))
    }
}

function gritar(texto){
    return texto.toUpperCase(texto)
}

function enfase(texto){
    return  `${texto} !!!!`
}

function separar(texto){
    return texto.split('').join(' ')
}

const res = composicao(
    gritar,
    enfase,
    separar
)

console.log(res)