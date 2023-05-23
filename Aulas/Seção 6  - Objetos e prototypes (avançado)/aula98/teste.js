function ValidaCPF(cpfEnviado) {
  this.cpfLimpo = cpfEnviado.replace(/\D+/g, '');
}

ValidaCPF.prototype.valida = function (cpfLimpo) {
  if (typeof this.cpfLimpo === 'undefined') return false;
  if (this.cpfLimpo.length !== 11) return false;

  const cpfParcial = this.cpfLimpo.slice(0, -2);
  const digito01 = this.criaDigito(cpfParcial);
  const digito02 = this.criaDigito(cpfParcial + digito01);
  const novoCpf = cpfParcial + digito01 + digito02;
  return novoCpf
}

ValidaCPF.prototype.criaDigito = function(cpfParcial){
  const cpfArray = Array.from(cpfParcial);

  let regressivo = cpfArray.length + 1;
  const total = cpfArray.reduce((ac, val) => {
    ac += (regressivo * Number(val));
    regressivo--;
    return ac;
  }, 0);

  const digito = 11 - (total % 11)
  return digito

}

const cpf = new ValidaCPF('487.378.728-83');
console.log(cpf.valida())

if(cpf.cpfLimpo === cpf.valida()){
  console.log('CPF Válido')
} else{
  console.log('ERRO')
}






