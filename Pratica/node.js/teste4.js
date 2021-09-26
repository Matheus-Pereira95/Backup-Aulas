class Calculo{
    result = 0;
    tudao = 0;
    calcular(valor1, valor2){
        this.result = (valor1 * valor2);
        return (this.result);
    }
}

const resultado1 = new Calculo();
resultado1.calcular(2,5);
resultado1.tudao = 20;

const resultado2 = new Calculo();
resultado2.calcular(10,3)
resultado2.tudao = 50;

console.log(resultado1, resultado2);