function contar(){
    var n1 = document.getElementById('num1')
    var numb = Number(n1.value)
    var res = document.getElementById('res')
    let tabuada = ''
    
    if(numb.length == 0){
        alert('[ERRO] Digite algum numero e tente novamente.')
    } else{

    for(let c = 1; c <= 10; c++){
        tabuada += numb + 'x' + c + '=' + numb*c + '</br>';

        res.innerHTML = tabuada
    }

    }



    



}