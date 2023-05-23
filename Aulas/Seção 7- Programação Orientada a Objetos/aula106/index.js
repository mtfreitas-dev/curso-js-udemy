class ValidaCPF{
    constructor(cpfEnviado){
        Object.defineProperty(this, 'cpfLimpo', {
            enumerable: true,
            writable: false,
            configurable: false,
            value:  cpfEnviado.replace(/\D+/g, '')
        })
       
    };

    valida(){

    
     const cpfSemdigito = this.cpfLimpo.slice(0, -2);

     const digito01 = criaDigito(cpfSemdigito);
     const digito02 = criaDigito(cpfSemdigito + digito01);

     const novoCpf = cpfSemdigito + digito01 + digito02;

     return novoCpf

    }

    criaDigito(cpfSemdigito){
        let total = 0;
        let reverso = cpfSemdigito.length + 1;
    
        for(let stringNumerica of cpfSemdigito) {
          total += reverso * Number(stringNumerica);
          reverso--;
        }
    
        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
    
    }
};



const cpf = new ValidaCPF('487.378.728-93');
console.log(cpf.valida())
