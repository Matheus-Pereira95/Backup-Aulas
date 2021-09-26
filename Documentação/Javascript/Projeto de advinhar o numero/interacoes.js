var numeroAleatorio = Math.floor(Math.random()*100) + 1
var palpites = document.querySelector('#palpites')
var ultimoResultado = document.querySelector('#ultimoResultado')
var baixoOuAlto = document.querySelector('#baixoOuAlto')
var envioPalpite = document.querySelector('#envioPalpite')
var campoPalpite = document.querySelector('#campoPalpite')
var contagemPalpites = 1
var botaoReinicio

function conferirPalpite() {
    var palpiteUsuario = Number(campoPalpite.value)
    if( palpiteUsuario === numeroAleatorio){
        palpites.innerHTML = 'Você acertou'
        baixoOuAlto.innerHTML = ' PARABENS'
        ultimoResultado.innerHTML = ''
    } else if(palpiteUsuario !== numeroAleatorio){
        palpites.innerHTML = 'Você errou!'
            if(palpiteUsuario > numeroAleatorio){
                baixoOuAlto.innerHTML = 'Seu palpite foi muito alto'
                ultimoResultado.innerHTML += palpiteUsuario + ' - '
            } else if(palpiteUsuario < numeroAleatorio){
                baixoOuAlto.innerHTML = 'Seu palpite foi muito baixo'
                ultimoResultado.innerHTML += palpiteUsuario + ' - '
            }
        
    }
    





    5
}