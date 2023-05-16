
let data = new Date();

let diaSemana = data.getDay();
let nomeDiaSemana = getnomeDiaSemana(diaSemana);

let dia = data.getDate();
let ano = data.getFullYear();
let hora = data.getHours();
let minutos = data.getMinutes();

let numeroMes = data.getMonth();
let nomeMes = getNomeMes(numeroMes);


function getnomeDiaSemana(diaSemana) {
    /*switch (diaSemana) {
        case 0:
            nomeDiaSemana = 'Domingo';
            return nomeDiaSemana;
        case 1:
            nomeDiaSemana = 'Segunda-feira';
            return nomeDiaSemana;
        case 2:
            nomeDiaSemana = 'Terça-feira';
            return nomeDiaSemana;
        case 3:
            nomeDiaSemana = 'Quarta-feira';
            return nomeDiaSemana;
        case 4:
            nomeDiaSemana = 'Quinta-feira';
            return nomeDiaSemana;
        case 5:
            nomeDiaSemana = 'Sexta-feira';
            return nomeDiaSemana;
        case 6:
            nomeDiaSemana = 'Sabado-feira';
            return nomeDiaSemana;
        default:
            nomeDiaSemana = '';
    }
    return nomeDiaSemana
    */
    let nomeDiaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

    return nomeDiaSemana[diaSemana];
}

function getNomeMes(numeroMes) {
    let nomeMes;

    switch (numeroMes) {
        case 0:
        nomeMes = 'Janeiro';
        return nomeMes;
    
        case 1:
        nomeMes = 'Fevereiro';
        return nomeMes;

        case 2:
        nomeMes = 'Março';
        return nomeMes;
        
        case 3:
        nomeMes = 'Abril';
        return nomeMes;
        
        case 4:
        nomeMes = 'Maio';
        return nomeMes;
        
        case 5:
        nomeMes = 'Junho';
        return nomeMes;
        
        case 6:
        nomeMes = 'Julho';
        return nomeMes;

        case 7:
        nomeMes = 'Agosto';
        return nomeMes;

        case 8:
        nomeMes = 'Setembro';
        return nomeMes;

        case 9:
        nomeMes = 'Outubro';
        return nomeMes;

        case 10:
        nomeMes = 'Novambro';
        return nomeMes;

        case 11:
        nomeMes = 'Dezembro';
        return nomeMes;

        default:
            nomeMes = '';
        
        return nomeMes;
    }
}
        




let resultado = document.querySelector('#resultado');
resultado.innerHTML = `${nomeDiaSemana}, ${dia} de ${nomeMes} de ${ano}. ${hora}:${minutos}`;