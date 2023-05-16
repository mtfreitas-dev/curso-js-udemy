//Retorne os números maiores que 10

const numeros = [11, 30, 44, 2, 25, 9, 4]

const numerosFiltrados = numeros.filter(callbackFilter)
console.log(numerosFiltrados)

function callbackFilter(valor){
    return valor > 10
}


//Retorne as pessoas que tem o nome com 5 letras ou mais
//Retorne as pessoas com mais de 50 anos
//Retorna as pessoas cujo nome termina com a

const pessoas = [
    {nome: 'Pedro', idade: 25},
    {nome: 'Maria', idade: 22},
    {nome: 'Eduardo', idade: 57},
    {nome: 'Matheus', idade: 38},
    {nome: 'Joao', idade: 55}

]

const pessoasNomes = pessoas.filter(objeto => objeto.nome.length > 5);
const pessoasIdade = pessoas.filter(objeto => objeto.idade > 50)
const pessoasLetraA = pessoas.filter(objeto => objeto.nome.toLowerCase().endsWith('a'))

console.log(pessoasNomes, pessoasIdade, pessoasLetraA)