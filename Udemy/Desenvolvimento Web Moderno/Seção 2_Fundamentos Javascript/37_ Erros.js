// Try - Catch - Throw

function tratarErroELancar(erro){
    //throw new Error('Puta que pariu... Deu merda aqui, socorro!!!!!! LIGA PRO SUPOOOORTE!!!!')
    throw 'FUDEU'

}

function imprimirNomeGritado(obj){
    try{
    console.log(obj.name.toUpperCase() + '!!!!!!!!!')
    } catch(e){
        tratarErroELancar(e)
    }

}

const obj = {nome: 'Roberto'}
imprimirNomeGritado(obj)