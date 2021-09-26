var idade = 64

console.log(` Você tem ${idade} anos, logo, seu voto é: `)

if(idade < 16){
    console.log('Proibido')
} else if(idade >= 16 && idade < 18) {
    console.log('Facultativo')
       
} else if(idade >= 18 && idade <= 64){
    console.log('Obrigatório')
} else{
    console.log('Facultativo')
}