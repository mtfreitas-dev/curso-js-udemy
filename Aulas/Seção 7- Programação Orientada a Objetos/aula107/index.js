class ValidaFormulario{
    constructor(){
       this.formulario = document.querySelector('.formulario');
       this.eventos();
    }

    eventos(){
        this.formulario.addEventListener('submit', e=> {
            this.handleSubit(e);
        });
    }

    handleSubit(e){
        e.preventDefault();
        const camposValidos = this.camposValidos()
        const senhaValidas = this.senhaValidas()

        if(camposValidos && senhaValidas){
            alert('Formulário enviado')
            this.formulario.submit();
        }
    }

    senhasValidas() {
        let valid = true;
    
        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir-senha');
    
        if(senha.value !== repetirSenha.value) {
          valid = false;
          this.criaErro(senha, 'Campos senha e repetir senha precisar ser iguais.');
          this.criaErro(repetirSenha, 'Campos senha e repetir senha precisar ser iguais.');
        }
    
        if(senha.value.length < 6 || senha.value.length > 12) {
          valid = false;
          this.criaErro(senha, 'Senha precisa estar entre 6 e 12 caracteres.');
        }
    
        return valid;
      }
    



    camposValidos(){
        let valid = true;

        for(let texterror of this.formulario.querySelectorAll('.text-error')){
            texterror.remove();
         }
         

        for(let campo of this.formulario.querySelectorAll('.validar')){
            const label = campo.previousElementSibling.innerText;


            if(!campo.value) {
                this.criaErro(campo, `Campo "${label}" não pode estar vazio`)
                valid = false;
            } 

            if(campo.classList.contains('cpf')) {
                if(!this.validaCPF(campo)) valid=false;
            }

            if(campo.classList.contains('usuario')) {
                if(!this.validaUsuario(campo)) valid=false;
            }
        }

        return false
    }

    validaUsuario(campo) {
        const usuario = campo.value;
        let valid = true;
    
        if(usuario.length < 3 || usuario.length > 12) {
          this.criaErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres.');
          valid = false;
        }
    
        if(!usuario.match(/^[a-zA-Z0-9]+$/g)) {
          this.criaErro(campo, 'Nome de usuário precisar conter apenas letras e/ou números.');
          valid = false;
        }
    
        return valid;
      }
    

    validaCPF(campo){
       const cpf = new ValidaCPF(campo.value);

       if(!cpf.valida()){
        this.criaErro(campo, 'CPF Invalido');
        return false 
    }
        
    return true
}

    criaErro(campo, msg){
        const div = document.createElement('div');
        div.innerHTML = msg
        div.classList.add('text-error')
        campo.insertAdjacentElement('afterend', div);
    }

}

const valida = new ValidaFormulario();

