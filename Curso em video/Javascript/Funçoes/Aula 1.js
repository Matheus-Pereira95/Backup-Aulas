/*function parimp(n){
    if(n%2==0){
        return 'par'
    } else{
        return 'impar'
    }
}

let res = parimp(235)

console.log(res);

function soma(n1,n2){
    return n1 + n2
}

console.log(soma(2,5))
*/

function fatorial(n){
    let fat = 1 
    for(let c = n; c > 1; c--){
        fat *= c
    }
    return fat 
}

console.log(fatorial(5))