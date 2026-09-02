let app = require('./app/config/server'); // carregando o módulo do servidor
let rotaHome = require('./app/routes/home')// só está definindo as rotas
rotaHome(app); // Está executando a função que está dentro do módulo home.js, passando o app como parâmetro

let rotaAdicionarUsuario = require('./app/routes/adicionar_usuario');
rotaAdicionarUsuario(app);

let rotaCursos = require('./app/routes/cursos');
rotaCursos(app);    

let rotaProfessores = require('./app/routes/professores');
rotaProfessores(app);

let rotaHistoria = require('./app/routes/historia');
rotaHistoria(app);


app.listen(3000, function() {
    console.log('Servidor iniciado na porta 3000');
});
