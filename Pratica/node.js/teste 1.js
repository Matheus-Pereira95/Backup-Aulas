class Calculo{
    calcular(valor1, valor2){
        this.result = (valor1*valor2);
        return (this.result);
    }
}

//Valores da base altura (Alterar somente os 2 campos abaixo)


const resultado = new Calculo();
resultado.calcular(base,altura);
console.log(resultado);