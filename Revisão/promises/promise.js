let minhaPromise = new Promise ((resolve, reject) => {
     let nome = "Matheus";     
      
     if(nome == "Matheus"){
        resolve("Verdade")
     } else {
        reject("Falso")
     }     
});

minhaPromise.then((resolve) => {
    console.log(resolve)
}).catch((reject) => {
    console.log(reject)
});