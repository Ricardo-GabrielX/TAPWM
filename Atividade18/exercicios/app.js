let express = require('express');
let app = express();

app.get('/', function(req, res) {
    res.send('Hello, World!');
});



app.get('/historia', function(req, res) {
    res.send("<h1>História da Fatec</h1><p>Esta é a página sobre a história da Fatec Sorocaba.</p>");
});

app.get('/cursos', function(req, res) {
    res.send("<h1>Cursos da Fatec</h1><p>Esta é a página sobre os cursos oferecidos pela Fatec Sorocaba.</p>");
});

app.get('/professores', function(req, res) {
    res.send("<h1>Professores da Fatec</h1><p>Esta é a página sobre os professores da Fatec Sorocaba.</p>");
});

app.listen(3000, function() {
    console.log('Servidor rodando na porta 3000');
});
