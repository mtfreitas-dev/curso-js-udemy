const fs = require('fs');
const path = require('path');
const { json } = require('stream/consumers');
const caminhoArquivo = path.resolve(__dirname, '..','teste.jason');
const escreve = require('.modulos/escrever')
const ler = require('./ler')

const pessoas = [
    {nome: 'Matheus'},
    {nome: 'Pedro'},
    {nome: 'João'},
]

const jason = JSON.stringify(pessoas, '', 2)

fs.writeFile(caminhoArquivo, jason, {flag: 'w'});

