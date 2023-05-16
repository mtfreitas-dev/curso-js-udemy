/*
  Retorne a soma do dobro de todos os pares
 -> Filtrar pares
 -> Dobrar os valores
 -> Reduzir (somar tudo)
*/

const numeros = [11, 30, 44, 2, 25, 9, 4]

const pares = numeros.filter(valor => valor % 2 ===0).map(valor => valor * 2).reduce((acumulador, valor) => acumulador + valor)

console.log(pares)