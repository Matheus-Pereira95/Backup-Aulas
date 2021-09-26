class calc{
    calcular(item1,item2,item3){
        this.equacao = ((item1*365) + (item2*30) + item3)
        return this.equacao
    }
}

const ano = 26 //document.getElementById('anos')
const mes = 7 //document.getElementById('meses')
const dias = 24 //document.getElementById('dias')
//const res = //document.getElementById('resultado')
    
const result =  new calc
result.calcular(ano,mes,dias)
//res.innerHTML = `Voce possui exatamente ${resultado} dias de vida.`

console.log(result)

