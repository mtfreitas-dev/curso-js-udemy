const nome = 'Matheus'
const sobrenome = 'Freitas'
const idade = 22
const peso = 115
const alturaEmMt = 1.75
let imc
let anoNascimento

imc = peso / (alturaEmMt * alturaEmMt);
anoNascimento = 2023 - idade

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} Kg`)
console.log(`Tem ${alturaEmMt} de altura e seu IMC é de ${imc}`)
console.log(`${nome} nasceu em ${anoNascimento}`)
