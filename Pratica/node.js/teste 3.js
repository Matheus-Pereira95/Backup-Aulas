class Calculo{
    result = 0;
    calcular(valor1, valor2){
        this.result = (valor1 * valor2);
        return (this.result);
    }
}

const resultado1 = new Calculo();
resultado1.calcular(2,5);
console.log(resultado1);