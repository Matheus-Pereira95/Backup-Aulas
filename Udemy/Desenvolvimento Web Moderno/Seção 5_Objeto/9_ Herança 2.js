// Cadeia de prototipos (Prototype Chain)

/*Object.prototype.attri0 = 'Zzz'

const avo = {
    attri1: 'A'
}

const pai = {
    __proto__: avo,
    attri2: 'B'
}

const filho = {
    __proto__: pai,
    attri3: 'C'
}

console.log(filho.attri1)
console.log(filho.attri0)
console.log(filho.attri2)
console.log(filho.attri3)
console.log(filho.attri4)*/

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing (vai sobrescrever o valor setado por default no objeto)
}

const volvo = {
    // __proto__:carro -> substituido por Object.setPrototypeOf() mas exercem a mesma função
    modelo: 'V40',
    status() {
        return `${this.modelo} = ${super.status()}` // Assim como this retorna o item especifico do objeto, o super referencia o item a partir do prototype (sendo o objeto carro pai do objeto volvo)
    }
}

Object.setPrototypeOf(ferrari,carro) // estabelece relação de prototipo alegando que o objeto ferrari tem o objeto carro como prototipo
Object.setPrototypeOf(volvo,carro)

console.log(volvo)
console.log(ferrari)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(400)
console.log(ferrari.status())