let numeros = [1, 2, 3, 4, 5, 6]

for (let numero of numeros) {
    
    if (numero ===2){
        console.log('Pulei o número dois')
        continue
    }

    if (numero === 6){
        break
    }
    console.log(numero)


}

