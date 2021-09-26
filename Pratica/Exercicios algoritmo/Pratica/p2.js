class carros{
    Renault(modelo,cor,portas,tipo){
        this.modelo = modelo
        this.cor = cor
        this.portas = portas
        this.tipo = tipo
    }
    Fiat(modelo,cor,portas,tipo){
        this.modelo = modelo
        this.cor = cor
        this.portas = portas
        this.tipo = tipo
    }
    toyota(modelo,cor,portas,tipo){
        this.modelo = modelo
        this.cor = cor
        this.portas = portas
        this.tipo = tipo
    }
    Vw(modelo,cor,portas,tipo){
        this.modelo = modelo
        this.cor = cor
        this.portas = portas
        this.tipo = tipo
    }

}

const carro001 = new carros
carro001.Renault('kwid', 'Branco', '4 portas', 'S.U.V')

const carro002 = new carros
carro002.Fiat('Mobi', 'Prata', '4 portas', 'Compacto' )

console.log(carro001)
console.log(carro002)
