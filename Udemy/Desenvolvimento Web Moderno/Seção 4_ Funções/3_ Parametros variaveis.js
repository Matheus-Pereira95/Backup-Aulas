function soma(){
    let soma = 0
    for (i in arguments){
        soma += arguments[i]
    }

    return soma
}

console.log(soma(2,4,5,6,7,8,9,7,65,5,4,3))
console.log(soma(2,4))
console.log(soma())
console.log(soma(2, ' Oi'))


/*
    arguments => array interno de uma function, quando nenhum parametro é passado este array é vazio, e ha a possibilidade de pegar todos os paremetros que foram utilizados na hora de chamar a função de realizar operações com eles.

*/ 
