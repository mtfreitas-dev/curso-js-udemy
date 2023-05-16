/* validador de CPF
 CPF: 487.378.728.93

 4x 8x 7x 3x 7x 8x 7x 2x 8x 
 10 9  8  7  6  5  4  3  2
 
 40 81 56 21 42 40 28  6  16 = 310
 
 11 - (310 % 11) = 9 - Primeiro número

  4x 8x 7x 3x 7x 8x 7x 2x 8x 9x
  11 10 9  8  7  6  5  4  3  2

  44 80 63 24 49 48 35 8  24 18 = 393

  11 - (393 - 11) =  3 Segundo número

 */

  

//Funções utilizadas na resolução

//Expressão regular para tirar a pontuação do CPF

//let cpf = '487.378.728-93';
//let cpfLimpo = cpf.replace(/\D+/g, '');

//Transformar string em array

//let cpfArray = Array.from(cpfLimpo)


 //console.log(cpfArray)

function ValidaCpf(cpfEnviado){
   this.cpfLimpo = cpfEnviado.replace(/\D+/g, '')
}

ValidaCpf.prototype.valida = function(){
    if(typeof this.cpfLimpo !== 'undefined') false
    if(this.cpfLimpo.length !== 11) false

    const cpfSemDigito = this.cpfLimpo.slice(0, -2);
    console.log(cpfSemDigito)
    const digito01 = this.criaDigito(cpfSemDigito);
    const digito02 = this.criaDigito(cpfSemDigito + digito01);

    const novoCpf = cpfSemDigito + digito01 + digito02
    return 'teste'

}
ValidaCpf.prototype.criaDigito = function(cpfSemDigito){
    const cpfArray = Array.from(cpfSemDigito);

    const regressivo = cpfArray.length + 1;
    console.log(regressivo)
}

const cpf = new ValidaCpf('487.378.728-93')
console.log(cpf.valida())