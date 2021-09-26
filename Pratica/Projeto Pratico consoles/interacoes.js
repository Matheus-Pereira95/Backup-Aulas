function resposta(){
    var fab = document.getElementsByName('fab')
    var res = document.getElementById('res')
    var res2 = document.getElementById('res2')
    var img = document.createElement('img')
        img.setAttribute('id', 'foto')
    var console = ''
    var cons_type = document.createElement('h1')
        cons_type.setAttribute('id', 'cons_type')
    var txt = document.createElement('p')
        txt.setAttribute('id', 'txt')
    
    if(fab.length == 0){
        alert('ERRO')

    }else(fab[0].checked){
        img.setAttribute('src', 'Sony_PS5.png')
        cons_type.innerHTML = 'Playstation 5'
        txt.innerHTML = 'PlayStation 5, oficialmente abreviado como PS5, é um console de jogos eletrônicos de nona geração, desenvolvido pela Sony Interactive Entertainment. Foi anunciado em outubro de 2018 e confirmado em outubro de 2019 como o quinto da série PlayStation e sucessor do PlayStation 4.'
        
    } else if(fab[1].checked){
        img.setAttribute('src', 'Nintendo_switch.png')
        cons_type.innerHTML = ' Nintendo Switch'
        txt. innerHTML = ''

    } else if(fab[2].checked){
        img.setAttribute('src', 'Microsoft_XboxSeries.png')
        cons_type.textContent = 'Xbox Series X e S '
        txt.textContent = ''

    } else if(fab[3].checked){
        img.setAttribute('src', 'Atari_flashback.png')
        cons_type.textContent = 'Atari Flashback'
        txt.textContent = ''

    }else if(fab[4].checked){
        img.setAttribute('src', 'Sega_dreamcast.png')
        cons_type.textContent = 'Atari Flashback'
        txt.textContent = ''

    }else if(fab[5].checked){
        img.setAttribute('src', 'SNK_neogeoX.png')
        cons_type.textContent = 'Neo Geo X'
        txt.textContent = ''

    }else if(fab[6].checked){
        img.setAttribute('src', 'Valve_steamDeck.png')
        cons_type.textContent = 'Steam Deck'
        txt.textContent = ''

    }else if(fab[7].checked){
        img.setAttribute('src', 'Amazon_luna.png')
        cons_type.textContent = 'Luna'
        txt.textContent = ''

    }else if(fab[8].checked){
        img.setAttribute('src', 'Google_stadia.png')
        cons_type.textContent = 'Stadia'
        txt.textContent = ''

    }

    res.appendChild(img)
    res.appendChild(cons_type)
    res.appendChild(txt)


}
