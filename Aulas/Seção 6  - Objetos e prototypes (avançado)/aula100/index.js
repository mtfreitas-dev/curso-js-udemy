const comer = {
    comer(){
        console.log(`${this.nome} está comendo`)
    }
}
const pessoaPrototype = Object.assign({}, comer)

function criaPessoa(nome, sobrenome){
        return Object.create(pessoaPrototype, {
        nome: {value: nome}, 
        sobrenome: {value: sobrenome}
    })
}

const p1 = criaPessoa('Matheus', 'Freitas')
console.log(p1.comer())


