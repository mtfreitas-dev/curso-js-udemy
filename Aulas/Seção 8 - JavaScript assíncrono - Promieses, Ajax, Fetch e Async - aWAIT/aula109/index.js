function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max-min) + min);
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject(false);

        setTimeout(() =>{
            resolve(msg);
        }, tempo);
    });
}

//Primise.all Promise.race Promise.resolve Promise.reject

const promises = [
     esperaAi('Promise 1', rand(1, 5)),
     esperaAi('Promise 2', rand(1, 5)), 
     esperaAi('Promise 3', rand(1, 5)), 
]

//Promise.all(promises)
//    .then(function(valor){
//        console.log(valor)
 //   })
//    .catch(function(valor){
 //       console.log(valor)
//    }),

Promise.race(promises)
  .then(function(valor){
  console.log(valor)
  })
  .catch(function(valor){
  console.log(valor)
  })