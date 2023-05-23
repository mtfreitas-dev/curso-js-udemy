function ValidaCPF(cpfEnviado){
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function(){
            return cpfEnviado.replace(/\D+/g, '');
        }
    })
};

ValidaCPF.prototype.valida = function(){
    if(typeof this.cpfLimpo === 'undefined') return false
    if(this.cpfLimpo.lenth !== 11) return false
    if(this.isSequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2)
    const digito01 = this.criaDigito
    const digito02 = this.criaDigito + digito01

    const novoCpf = cpfParcial + digito01 + digito02
    return novoCpf === cpfLimpo

}

ValidaCPF.prototype.criaDigito = function(){
    const cpfArray = Array.from(cpfLimpo)

    
}
