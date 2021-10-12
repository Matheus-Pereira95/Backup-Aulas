// 1. Usando a notação literal

const obj1 = {}

console.log(obj1)

// 2. Object em JS 

console.log(typeof Object, typeof new Object) 
// Object = Function 
// new Object = Objeto

const obj2 = new Object
console.log(obj2)

// 3. Funções construturas 

function Produto (nome, preco, desco) {
    this.nome = nome 
    this.getPrecoComDesconto = () => { //atributo privado.
        return preco * (1 - desco)
    }

    /*
        This => Atributo publico
        (atribute2, atribute2,etc...) => atributos privados  
    */
}

const p1 = new Produto ('Caneta', 1.99, 0.15)
const p2 = new Produto ('Notebook', 3000, 0.25)

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// 4.  Função factory

function criarFuncionario (nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase/30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 5000, 4 )
const f2 = criarFuncionario('Maria', 5000, 1)

console.log(f1.getSalario(), f2.getSalario())

// 5. Object.create

const filha = Object.create(null)
filha.nome = 'Maria'
console.log(filha)

// 6. Uma função famosa que retorna objeto...

const fromJSON = JSON.parse('{"Info": "Eu sou um JSON"}')

console.log(fromJSON.Info)


