console.log(Math.ceil(6.1))

console.log('---------------------------------')

const obj1 = {}
obj1.nome = 'Bola' // notação 1
obj1['nome_2'] = 'Bola2' // notação 2

console.log(obj1)

console.log('---------------------------------')

function Obj(nome) {
    this.nome = nome,
        this.exec = function () {
            console.log('Exec......')
        }
}

const Obj2 = new Obj('CAdeira')
const Obj3 = new Obj('Mesa')

console.log(Obj2.nome)
console.log(Obj3.nome)
Obj3.exec()


console.log('---------------------------------')



console.log('---------------------------------')