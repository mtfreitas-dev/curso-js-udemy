function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + max)
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('BAD VALUE');

        setTimeout(() => {
            console.log(msg);
            resolve();
        }, tempo)
    })
}

esperaAi('Frase 1', rand((1, 4)))
.then(resposta => {
    //console.log(resposta)
    return esperaAi('Frase 2', rand(1, 3));
})
.then(resposta => {
    //console.log(resposta);
    return esperaAi(111, rand(1, 3))
})

.then(()=> {
    console.log('Ultima exibição')
})

.catch(e => {
    console.log(`Error: `, e)
})