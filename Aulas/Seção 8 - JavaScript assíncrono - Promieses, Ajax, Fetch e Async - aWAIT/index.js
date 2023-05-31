document.addEventListener('click', e => {
    const el = e.target;
    const tag = e.tagName.toLowerCase();

    if(tag === 'a'){
        e.preventDefault();
        carregaPagina(el);
    }
});

 async function carregaPagina(el){
    const href = el.getAttribute('href');

     fetch(href)
     .then(response => {
        if(response.status !== 200) throw new Error('Erro 303')
        response.text()
     } )
     .then(html => carregaResultado(response))
     .catch(e => console.log(e))
     
 }


function carregaResultado(response){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = resultado;
}

