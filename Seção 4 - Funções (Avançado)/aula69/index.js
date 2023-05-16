/*function teste () {
   let total = 0;
   for (let argumentos of arguments){
    total += argumentos;
   }

   console.log(total)
}
teste(1, 2, 3, 5)*/

/*function soma(a, b = 5, c=15){
    console.log(a + b + c);
}
soma(10, undefined, 20)*/

//function teste({nome, sobrenome, idade}){
//   console.log(nome, sobrenome, idade)
//}

//teste({nome: 'Luiz', sobrenome: 'Otávio', idade: 21})

function conta(operador, acumulador, ...numeros){
    for(let numero of numeros){
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador)
}

conta('*', 1, 20, 30, 50)