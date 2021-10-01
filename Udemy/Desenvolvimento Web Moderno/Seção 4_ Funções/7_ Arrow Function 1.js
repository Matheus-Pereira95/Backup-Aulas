// Arrow function pt1 = Mostrando funcionalidade para reduzir uma funçao. 

let dobro = function(a){         // Função padrao 
    return 2 * a
}

dobro = (a)=>{      // Arrow function 
    return 2 * a
}

dobro = a => 2 * a // Arrow function reduzida, return esta implicito

console.log(dobro(Math.PI))

let ola = function() {
    return "Ola!!!!!!!!!!!"
}

ola = () => 'Ola'

console.log(ola())