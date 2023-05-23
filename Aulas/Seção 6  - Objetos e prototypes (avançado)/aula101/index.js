const pessoas = [
    {id: 1, nome: 'Matheus'},
    {id: 2, nome: 'Pedro'}, 
    {id: 3, nome: 'Maria'}
]

/*const novasPessoas = {}
for(const pessoa of pessoas){ 
    const {id} = pessoa;
    novasPessoas[id] = { ...pessoa };
}*/

const novasPessoas = new Map();

 for (const pessoa of pessoas){
    const { id } = pessoa;
    novasPessoas.set(id, {...pessoa});
 }

console.log(novasPessoas)