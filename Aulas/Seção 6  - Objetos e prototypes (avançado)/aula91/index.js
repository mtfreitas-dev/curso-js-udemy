function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: function(){
            return estoquePrivado
        },

        set: function(valor){
            if(typeof valor !== 'number'){
                 console.log('Não é um número')
                 return
            }
            estoquePrivado = valor;
        }

    });
}

const p1 = new Produto('Bermuda', 35, 10)
p1.estoque = 66
console.log(p1.estoque)