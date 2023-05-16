const numeros = [11, 30, 44, 2, 25, 9, 4]

const numerosEmdobro = numeros.map(valor => valor * 2)
//console.log(numerosEmdobro)

const pessoas = [
    {nome: 'Pedro', idade: 25},
    {nome: 'Maria', idade: 22},
    {nome: 'Eduardo', idade: 57},
    {nome: 'Matheus', idade: 38},
    {nome: 'Joao', idade: 55}

]

const pessoasNomes = pessoas.map(objeto => objeto.nome);
const idade = pessoas.map(objeto => ({idade: objeto.idade}))
const id = pessoas.map(function(objeto, indice){
    objeto.indice = indice + 1;
    return objeto
})


console.log(id)