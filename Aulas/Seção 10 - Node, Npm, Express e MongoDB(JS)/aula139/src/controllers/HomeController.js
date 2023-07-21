const HomeModel = require('../models/homeModel.js');

HomeModel.find()
 .then(dados => console.log(dados))
 .catch(e => console.log(e))

exports.paginaInicial = (req, res) => {
    res.render('index');
    return
};

exports.trataPost = (req, res) => {
    res.send(req.body.cliente);
    return
};