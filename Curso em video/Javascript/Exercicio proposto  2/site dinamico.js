function verificar(){
    var fano = document.getElementById('txtano').value
    var data = new Date();
    var ano = data.getFullYear()
    var res = document.getElementById('res')
    Number.parseInt(ano)
    Number.parseInt(fano)
    if (fano.length == 0 || fano > ano){
        window.alert('[ERRO] Verifique seus dados e tente novamente')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        
        if(fsex[0].checked){
            genero = 'Homem'
            res.innerHTML = ` Detectamos um ${genero} de ${idade} anos`

             if(idade >= 0 && idade < 3){
                img.setAttribute('src', 'bebeB.png')
            } else if(idade < 12){
                img.setAttribute('src', 'Menino.png')
            }else if(idade < 20){
                img.setAttribute('src', 'teenB.png')
            }else if(idade < 50){
                img.setAttribute('src', 'adulto.png')
            } else{
                img.setAttribute('src', 'idoso.png')
            }

        } else if (fsex[1].checked){
            genero = 'Mulher'
            res.innerHTML = ` Detectamos uma ${genero} de ${idade} anos`
            if(idade >= 0 && idade < 3){
                img.setAttribute('src', 'bebeG.png');
            } else if(idade < 12){
                img.setAttribute('src', 'menina.png')
            }else if(idade < 20){
                img.setAttribute('src', 'teenG.png')
            }else if(idade < 50){
                img.setAttribute('src', 'adulta.png')
            } else{
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.appendChild(img)

        
        
    }
    
}
