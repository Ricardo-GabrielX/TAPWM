const app = require('./app/config/server');

const porta = process.env.PORT || 3000;
app.listen(porta, function () {
    console.log(`Servidor iniciado na porta ${porta}`);
});
