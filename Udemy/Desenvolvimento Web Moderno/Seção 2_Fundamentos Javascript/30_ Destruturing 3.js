function rand({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) // ou usar return valor.toFixed(0)
}

const obj = { max:1, min: 1000}
console.log(rand(obj))



