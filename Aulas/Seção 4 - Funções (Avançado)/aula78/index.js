function Calculadora(){
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter()
    };

    this.capturaEnter = () => {
        document.addEventListener('keypress', e => {
           if(e.keyCode === 13) return;
           this.realizaConta();
        })
    }

    this.capturaCliques = () => {
        document.addEventListener('click', e => {
            const el = e.target;

            if (el.classList.contains('btn-num')) this.addNumDisplay(el);

            if(el.classList.contains('btn-clear')) this.clearDisplay(el);

            if(el.classList.contains('btn-del')) this.apagaUm();

            if(el.classList.contains('btn-eq')) this.realizaConta()
        });
    }

    this.addNumDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus();
    }
    this.clearDisplay = () => this.display.value = '';
    this.apagaUm = () => this.display.value = this.display.value.slice(0, -1)
    this.realizaConta = () => {
        let conta = this.display.value;
        try{
            conta = eval(conta);

            if(!conta){     
             alert('Conta Invalida');
              return;
            }

            this.display.value = String(conta)
              
      
          } catch(e){
             alert('Conta Inválida');
             return
          }
    }


}


const calculadora = new Calculadora()
calculadora.inicia()
