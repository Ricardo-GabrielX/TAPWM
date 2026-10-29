const express = require('express');
const consign = require('consign');
const path = require('path');

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));
app.use(express.urlencoded({ extended: false }));

consign({ cwd: path.join(__dirname, '..') })
    .include('config/dbConnection.js')
    .then('models')
    .then('routes')
    .into(app);

app.use(function (err, req, res, next) {
    console.error('Erro ao processar a solicitação:', err.message);
    res.status(503).send('Não foi possível acessar o banco de dados. Verifique a conexão com o SQL Server.');
});

module.exports = app;
