const pessoa = {
    nome: 'Matheus', 
    sobrenome:'Freitas'
}

console.log(pessoa['sobrenome'])

const pessoa1 = new Object();
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Freitas';
pessoa1.falarNome  = function(){ 
    return (`${this.nome} está falando`)
};
console.log(pessoa1.falarNome())

function criaPessoa(nome, sobrenome){
    return {
        nome, 
        sobrenome, 
        get falaNome(){
            return `${this.nome} ${this.sobrenome}`
        }
    }
}


function Pessoa(nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
}

const p2 = new Pessoa('Matheus', 'Freitas')


const p1 = criaPessoa('Pedro', 'Ferreira')
console.log(p1)

