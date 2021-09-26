var itens = []
var nome_produto = document.querySelector('input[name=nome_produto]')
var valor_produto = document.querySelector('input[name=price]')

if(nome_produto == 0 || valor_produto == 0){
    alert('Preencha os valores corretamente')
}else{
var acao = document.querySelector('input[type=submit]')
.addEventListener('click', ()=>{

    itens.push({
        nome: nome_produto.value,
        valor: valor_produto.value
    })

    let lista_produtos = document.querySelector('#lista-produtos')
    let total = 0 
    lista_produtos.innerHTML = '';

    itens.map(function(val){
        total += parseFloat(val.valor);
        lista_produtos.innerHTML += `
        <div id="lista-produtos-single">
        <h3>`+ val.nome + `</h3>
        <h3 id="price-produto"><span> R$ ` + val.valor + `</span> </h3>
    </div>`
    })

    total.toFixed(2) // Determina o numero de casas decimais
    nome_produto.value = "";
    valor_produto.value = ""

    let elementoSoma = document.querySelector('#soma-produto h1')
    elementoSoma.innerHTML = 'R$' + total;

})

document.querySelector('button[name=limpar]')
.addEventListener('click', ()=>{
    itens = []
    document.querySelector('#lista-produtos').innerHTML = ""
    document.querySelector('#soma-produto h1').innerHTML = "Total: R$ 0,00"})
}