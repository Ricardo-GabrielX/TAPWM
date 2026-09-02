let express = require('express');
let app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.send('Hello, World!');
});

app.get('/secao/historia', function(req, res) {
    res.render('secao/historia');
});

app.get('/secao/cursos', function(req, res) {
    res.render('secao/cursos');
});

app.get('/secao/professores', function(req, res) {
    res.render('secao/professores');
});

app.listen(3000, function() {
    console.log('Servidor rodando na porta 3000');
});
