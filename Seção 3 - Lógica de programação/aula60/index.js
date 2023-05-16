function maiorMenor(num1, num2) {
 
    if (num1 < num2) {
        return num2
    } else if (num2 < num1){
        return num1
    } else {
        return'Os números são iguais'
    }
    }

const maior = maiorMenor(5, 5);


const max2 = (x, y) => {
    return x < y ? y : x
    
}

console.log(max2(10, 6))