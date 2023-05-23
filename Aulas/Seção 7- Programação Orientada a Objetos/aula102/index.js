class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){
        console.log(`${this.nome} está falando`)
    }
}

function Pessoa2(nome, sobrenome){
  this.nome = nome, 
  this.sobrenome = sobrenome
}

Pessoa.prototype.falar = function(nome){
    console.log(`${this.nome} está falando`)
}

const p1 = new Pessoa ('Matheus', 'Freitas')
console.log(p1.falar())