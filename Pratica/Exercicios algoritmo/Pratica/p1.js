/* Montar um banco de dados para alocar os valores fornecidos pelos alunos*/

class alunos{
    dados(nome,idade,serie){
        this.nome = nome
        this.idade = idade
        this.serie = serie 
    }

    
}

const aluno1 = new alunos
aluno1.dados('Matheus', 26, 'Faculdade')
{
    console.log(`O nome do aluno é ${aluno1.nome}, possui ${aluno1.idade} anos e esta cursando a ${aluno1.serie}`)
}


console.log(aluno1)