const pessoa = {
    nome: 'Rebeca',
    idade:  2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave,valor]) => {
    console.log(` ${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', { // define propriedades para um objeto seguindo a estrutura (nomeObjeto, 'Nome da chave', {caracteristicas da chave})
    enumerable: true, // enumerable = permite ser listada quando o objeto for chamado
    writable:false, // writable = permite ser sobrescrito 
    value: '02/02/2000' // value = referente a chave. 

})

pessoa.dataNascimento = '20/08/2012'

console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))


// Object assign (ES6)

const dest = {a:1}
const o1 =  {b:2}
const o2 = {c:3, a:4}

const obj = Object.assign(dest,o1,o2) // Object.assign => cria um objeto com os elementos de outros objetos listados seguindo a estrutura (objeto que ira receber os demais, objeto add 1, objeto add 2, ....)

console.log(obj)
