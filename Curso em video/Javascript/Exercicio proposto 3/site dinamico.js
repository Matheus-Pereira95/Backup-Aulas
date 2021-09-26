function calcular(){
    let ini = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById('res')
    
    if(ini.value == '' || fim.value == '' || passo.value == ''){  
        res.innerHTML = '<strong> Preencha todos os dados corretamente! </strong>'
    }else{
        res.innerHTML = 'Contando: </br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
       
        if(i<f){
            for(let c = i; c <= f; c += p){
                res.innerHTML += ` ...${ c }... `
            }} 
            
        else{
            for(let c = i; c >= f; c -= p){
                res.innerHTML += ` ...${ c }... `
            }
        }

        
    }
    


     
}