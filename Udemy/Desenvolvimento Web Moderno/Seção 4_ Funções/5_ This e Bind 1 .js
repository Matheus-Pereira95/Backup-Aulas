const pessoa = {
    saudacao: 'Bom dia!!',
    falar: function(){
        console.log(this.saudacao)
    }

}

pessoa.falar()

const falar = pessoa.falar.bind(pessoa)
