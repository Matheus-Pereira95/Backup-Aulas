const a = 1
const b = 2
const c = 3

const obj1 = {a:a , b:b, c:c} // Notação pré ES6
const obj2 = {a,b,c} // Notação pos ES6

console.log(obj1, obj2)

// -------------------------------------------------

const nomeAtt = 'Nota'
const valorAtt = 8.55

const obj3 = {}
obj3[nomeAtt] = valorAtt

console.log(obj3)

// -------------------------------------------------

const obj4 = {[nomeAtt]:valorAtt}

console.log(obj4)

// -------------------------------------------------

const obj5 = {
    funcao1: function(){
        // notação pre ES6
    },
    funcao2 (){
        // notação pos ES6
    }
}

console.log(obj5)