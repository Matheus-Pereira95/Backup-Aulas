class CalculoComissao{
    salario_fixo = 1500 // Valor Fixo
    vendas = new Array // Array que ira receber os carros
    salario_total = 0 // Salario total com as comissoes

    adicionar_venda(valor){
        var aux = valor * 0.05
        this.vendas.push(aux)
    }
    salario_mes(){    
        for (var x = 0; x < this.vendas.length; x++) {
            this.salario_total += this.vendas[x];
        }
        this.salario_total += this.salario_fixo
    }
}

var vendedor1 = new CalculoComissao;

//Valor das vendas realizadas
vendedor1.adicionar_venda(15000)
vendedor1.adicionar_venda(1200)
vendedor1.adicionar_venda(16000)

//Faz o calculo do salario
vendedor1.salario_mes()

console.log(vendedor1)