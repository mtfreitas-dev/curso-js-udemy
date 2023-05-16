function Produto(nome, preco){
    this.nome = nome, 
    this.preco = preco
}

Produto.prototype.desconto = function(percentual){
    this.preco -= percentual
}

Produto.prototype.aumento = function(percentual){
    this.preco += percentual
}



function Camiste(nome, preco, cor){
    Produto.call(this, nome, preco)
}

Camiste.prototype = Object.prototype(Produto.prototype)
Camiste.prototype.construtor = Camiste

const p1 = new Produto('Tenis', 102)
p1.desconto(20)
console.log(p1)