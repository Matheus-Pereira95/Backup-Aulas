class valor_carro{
    dist = 0.28
    imposto = 0.45
    preco_base = 50000

    custo(){
        preco_custo = this.preco_base + (this.preco_base*this.dist) + (this.preco_base*this.imposto)
    }

    
}

