function carregar(){
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var min = data.getMinutes()
msg.innerHTML = `Agora são ${hora} horas e ${min} minutos`

if(hora >= 0 && hora < 12){
img.src = 'manha.png'
document.body.style.backgroundColor = '#d4ae8d'
} else if(hora > 12 && hora < 18){
img.src = 'tarde.png'
document.body.style.backgroundColor = '#8c506a'
}else{
img.src = 'noite.png'
document.body.style.backgroundColor = '#066d72'
}
}