const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function mostraHora(segundos){
    let data = new Date(segundos * 1000);

    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

function iniciarContagem(){
    relogio.classList.remove('relogio-pausar')
    clearInterval(timer); 
     timer = setInterval(function(){
        segundos++;
         return relogio.innerHTML = mostraHora(segundos)
    }, 1000)
    
}

function pausarContagem(){
    relogio.classList.add('relogio-pausar');
    clearInterval(timer); 
}

function zerarContagem(){
    clearInterval(timer); 
    relogio.innerHTML = '00:00:00'
    relogio.classList.remove('relogio-pausar')
    segundos = 0;
}