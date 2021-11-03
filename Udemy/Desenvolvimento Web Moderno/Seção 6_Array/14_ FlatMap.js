// flatmap = map + concat

const escola = [{
    nome: 'Turma A',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome: 'Matheus',
        nota: 10
    }]
}, {
    nome: 'Turma B',
    alunos: [{
        nome: 'Rebeca',
        nota: 6.6
    }, {
        nome: 'Roberto',
        nota: 8.4
    }]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)