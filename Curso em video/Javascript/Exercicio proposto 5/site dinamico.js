let num = document.querySelector('input#fnum').value
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(num.value) >= 1 && Number(num.value) <= 100){
        return true
    } else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }

}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        alert('tudo ok')
    } else{
        alert('Valor invalido ou já encontrado na lista')
    }
}