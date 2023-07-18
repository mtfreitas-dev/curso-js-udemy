const express = require('express');
const app = express();

app.use(
    express.urlencoded(
        {
            extended: true
        }
    )
)

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar</button>
    <form>
    `);      
});

app.get('/testes/:idUsuario?/:parametro?', (req, res) => {
    console.log(req.query);
    console.log(req.query);
    res.send(req.params);
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`O que você me enviou foi: ${req.body.nome}`);
})


app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor exeutando na porta 3000')
})

