function Loja(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;


    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave
        value: estoque, // valor
        writable: true, // pode alterar
        configurable: false //configuravel 
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: estoque,
            writable: true,
            configurable: false
        },

        preco: {
            enumerable: true,
            value: estoque,
            writable: true,
            configurable: false
        }
    })
}


const produto = new Loja('Bermuda', 30, 10)
console.log(produto)