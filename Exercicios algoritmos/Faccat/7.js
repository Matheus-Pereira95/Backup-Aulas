/*function calc (d,m,a){
    return (a*365) + (m*30) + d
   }

console.log(calc(26,9,24))*/

function calc (n,d,m,a){
    const dadosPessoa = {
        nome: n,
        anos: a,
        meses: m,
        dias: d,
        total: a*365 + m*30 + d
    }
    return dadosPessoa
}

console.log(calc('Matheus',24,9,26))

