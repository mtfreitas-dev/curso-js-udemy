function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sabado';
            return diaSemanaTexto;
        default:
            diaSemanaTexto = '';
    }

    return diaSemanaTexto

}

const diaSemanaTexto = getDiaSemanaTexto(5);
const data = new Date();
const diaSemana = data.getDay();



console.log(diaSemana, diaSemanaTexto)

/* (if (diaSemana == 0) {
    diaSemanaTexto = 'Domingo'
} else if (diaSemana == 1) {
    diaSemanaTexto = 'Segunda'
} else if (diaSemana == 2) {
    diaSemanaTexto = 'Terça'
} else if (diaSemana == 3) {
    diaSemanaTexto = 'Quarta'
} else if (diaSemana == 4) {
    diaSemanaTexto = 'Quinta'
} else if (diaSemana == 5) {
    diaSemanaTexto = 'Sexta'
} else {
    diaSemanaTexto = 'Sabado'
}


*/