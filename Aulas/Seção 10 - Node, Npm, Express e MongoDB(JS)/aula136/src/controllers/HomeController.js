exports.paginaInicial = (req, res) => {
    res.render('index');  
};

exports.trataPost = (req, res) => {
    res.send('Olá, sou a nova rota de post');
};

console.log(exports)