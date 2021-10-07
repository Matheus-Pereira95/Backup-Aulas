/*class Pessoa {
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(` Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa ('João')
p1.falar()*/

function Pessoa (nome){

    this.falar = function(){
        console.log(`Meu nome é ${nome}`)
    }

}

const p1 = new Pessoa('Matheus')
p1.falar()