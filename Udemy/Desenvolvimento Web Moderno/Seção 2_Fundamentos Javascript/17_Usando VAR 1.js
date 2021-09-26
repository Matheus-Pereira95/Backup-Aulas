{ 
    { 
        { 
            { 
                var sera = 'Sera???' 
            } 
        } 
    }
}

console.log(sera)

function teste(){
    var local = 123
    console.log(local)
}

teste()

/*
    Uma variavel criada dentro de uma função so pode ser chamada dentro desta função. 

    Evitar o uso de variaveis globais, para previnir problemas com uma alteração da variavel que pode dar erro no codigo

    Por exemplo, uma variavel global que armazene um objeto. Se ela for alterada mais para frente no código para um array, ira 
    
    dar problema no codigo.
*/
