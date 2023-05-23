//Some todos os números
//Retorne um array com os pares (FIlter)
//Retorne um array co o dobreo dos valores (map)

const numeros = [11, 30, 44, 2, 25, 9, 4]

const soma = numeros.reduce(function(acumulador, valor, indice, array){
    acumulador += valor;
    return acumulador
}, 0);

//console.log(soma)

const pares = numeros.reduce(function(acumulador, valor){
    if(valor %2 === 0) acumulador.push(valor)
    return acumulador
 }, [])

 //console.log(pares)

const dobro = numeros.reduce(function(acumulador, valor){
    acumulador.push(valor * 2);
    return acumulador
 }, [])

//console.log(dobro)

//Retorne a pessoa mais velha

const pessoas = [
    {nome: 'Pedro', idade: 25},
    {nome: 'Maria', idade: 22},
    {nome: 'Eduardo', idade: 57},
    {nome: 'Matheus', idade: 38},
    {nome: 'Joao', idade: 55},

];

const maisVelho = pessoas.reduce(function(acumulador, valor){
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
})

console.log(maisVelho)