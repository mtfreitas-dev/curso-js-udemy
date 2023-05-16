function retornaHora(data) {
    if (data && !(data instanceof Date)){
        throw new TypeError('Esperando a instancia de Date.');
    } 

    if (!data){
        data = new Date();
    }

    return date.toLocaleTimeString('pt-BR', {
        hour12: false
    });

}

const hora = retornaHora();
console.log(hora);