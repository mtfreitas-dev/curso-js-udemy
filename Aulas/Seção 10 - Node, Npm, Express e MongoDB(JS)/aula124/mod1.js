const nome = 'Matheus'
const sobrenome = 'Freitas'
const teste =  'Teste'

function geraNome(){
    return nome + ' ' + sobrenome
};

module.exports.nome = nome;
module.exports.sobrenome = sobrenome;
module.exports.geraNome = geraNome()
exports.teste = teste
this.qualquerCoisa = 'O que eu quiser exportar'
