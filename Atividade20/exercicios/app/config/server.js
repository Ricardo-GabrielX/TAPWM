let express = require('express');
let consign = require('consign');

let app = express(); // executando o express
app.set('view engine', 'ejs'); // o mecanismo de engine a ser usado

app.set('views','./app/views'); // diretório onde os arquivos de visualização (views) estão localizados
consign().include('app/routes').into(app); // inclui os arquivos de rotas no app
module.exports = app;   