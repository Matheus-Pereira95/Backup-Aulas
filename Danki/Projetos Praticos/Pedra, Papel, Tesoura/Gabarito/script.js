var elementos = document.querySelectorAll('#player_options div > img')
var playerOpt = '';
var inimigoOpt = '';

function resetOpacityEnimy(){
    const enemyOptions = document.querySelectorAll('#enemy_options div')
    for(var i = 0; i<enemyOptions.length; i++){
        enemyOptions[i].childNodes[0].style.opacity = 0.3
    }
}

function inimigoJogar(){
    var rand = Math.floor(Math.random()*3) // Math.floor é para arrendondar, Math.random( numero aleatorio entre 0 e 1) multiplicado por 3
    const enemyOptions = document.querySelectorAll('#enemy_options div')
    resetOpacityEnimy()

    for(var i=0; i<enemyOptions.length; i++){
        if(i==rand){
            enemyOptions[i].childNodes[0].style.opacity = 1
            inimigoOpt = enemyOptions[i].childNodes[0].getAttribute('tst')
        }
    }
}

function resetOpacityPlayer(){
    for(var i = 0; i<elementos.length; i++ ){
        elementos[i].style.opacity = 0.3
    }
}

for(var i = 0; i<elementos.length; i++ ){
    elementos[i].addEventListener('click',(t)=>{
        resetOpacityPlayer()
        t.target.style.opacity = 1;
        playerOpt = t.target.getAttribute('tst');
        
        inimigoJogar();

        validarVitoria();
    })
   
}

function validarVitoria(){
    
    if(playerOpt == 'rock' && inimigoOpt == 'rock'){
        alert('Empate')
    } else if(playerOpt == 'rock' && inimigoOpt == 'paper'){
        alert('Vitoria Player 2')
    } else if(playerOpt == 'rock' && inimigoOpt == 'scissor'){
        alert('Vitoria Player 1')
    } else if(playerOpt == 'paper' && inimigoOpt == 'rock'){
        alert('Vitoria Player 1')
    } else if(playerOpt == 'paper' && inimigoOpt == 'paper'){
        alert('Empate')
    } else if(playerOpt == 'paper' && inimigoOpt == 'scissor'){
        alert('Vitoria Player 2')
    } else if(playerOpt == 'scissor' && inimigoOpt == 'rock'){
        alert('Vitoria Player 2')
    }else if(playerOpt == 'scissor' && inimigoOpt == 'paper'){
        alert('Vitoria Player 1')
    } else if(playerOpt == 'scissor' && inimigoOpt == 'scissor'){
        alert('Empate')
    }







}













