// Par nome / valor 

const saudacao = ' Opa ! ' // contexto lexico

function exec(){
    const saudacao = 'Falaaaa!' // contexto lexico 2
    return saudacao
}

console.log(exec())

// Objetos sao grupos aninhados de pares nome / valor 

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Topizeira',
        numero: 1234567
    }
}

console.log(cliente)