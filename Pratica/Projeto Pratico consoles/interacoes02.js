var res = document.querySelector('res')
var imagem = document.createElement('img')
    imagem.setAttribute('img', 'foto')



var enviado = document.querySelector('#enviar').addEventListener('click', ()=>{
    
    if(fab1.checked){
        imagem.setAttribute('src', 'Sony_PS5.png')
    }





    res.appendChild(imagem)

})

