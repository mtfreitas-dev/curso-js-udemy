let pessoa = {
    nome: 'Matheus', 
    sobrenome: 'Freitas', 
    idade: 20
};

const chave = 'nome'

for (let chave in pessoa){
    console.log(chave, pessoa[chave])
}