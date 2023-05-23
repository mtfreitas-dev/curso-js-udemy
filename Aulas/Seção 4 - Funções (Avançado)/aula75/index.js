function criaPessoa(nome, sobrenome, altura, peso){
    return {
        nome,
        sobrenome,
        set nomeCompleto(valor){
            console.log(valor)
        },
        fala: function(assunto){
            return `${this.nome} está falando sobre ${assunto}`
        },
        altura: altura,
        peso: peso,
        get imc(){
            const indice = this.peso / (this.altura **2);
            return indice.toFixed(2);
        }

    };
}

let pessoa = criaPessoa('Matheus', 'Freitas', 1.75, 115);
 pessoa.nomeCompleto = 'Matheus Santos de Freitas';
 console.log(pessoa.nomeCompleto)
