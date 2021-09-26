    /*
        Exercicio itens a fazer 

        1. Mostrar a quantidade de carros vendidos 
        2. Valor total das vendas 
        3. Valor recebido por carro
        4. Escrever salario final 
            * 5% por carro vendido 
            * salario nao fornecido 
    
    document.getElementById('valorCarro')
    */   

class calc{
    salarioFixo = 1500
    totalVendas = []
    salarioTotal = 0

    vendas(montante){
        var aux = montante * 0.05
        this.totalVendas.push(aux)

    }

    salario_mes(){
        for(var x = 0 ; x <= this.vendas.length; x++){
            this.salarioTotal += this.vendas[x]
        }

        this.salarioTotal += this.salarioFixo
    }

}


var vendedor1 = new calc();
vendedor1.vendas(60000)
vendedor1.vendas(80000)
vendedor1.vendas(100000)

vendedor1.salario_mes()

console.log(vendedor1)





