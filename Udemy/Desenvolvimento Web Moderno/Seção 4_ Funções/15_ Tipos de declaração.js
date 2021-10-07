// Function declaration -> Hoisting (Posso chamar a função antes dela ser de fato declarada)

function soma(x,y){
    return x + y
}

// Function expression -> sem hoisting

const sub = function (x,y){
    return x - y
}

// named function expression -> Sem hoisting

const mult = function mult (x,y){
    return x * y
}