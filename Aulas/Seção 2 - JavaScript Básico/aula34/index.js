function meuEscopo() {
    const form = document.querySelector('#formulario');
    const resultado = document.querySelector('#resultado');

    const pessoas = []

    function recebeEventoForm(evento) {
          evento.preventDefault();

           const nome = document.querySelector('#inome')
           const sobremnome = document.querySelector('#isobrenome')
           const peso = document.querySelector('#ipeso')
           const altura = document.querySelector('#ialtura')

           nome.value
    }
    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();