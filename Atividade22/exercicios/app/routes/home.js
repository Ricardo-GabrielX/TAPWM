module.exports = function (app) {
    app.get(['/', '/informacao/home'], function (req, res) {
        res.render('home/index');
    });

    app.get(['/informacao/cursos', '/cursos'], function (req, res) {
        res.render('informacao/cursos');
    });

    app.get(['/informacao/historia', '/historia'], function (req, res) {
        res.render('informacao/historia');
    });

    const rotasCadastro = ['/admin/adicionar_usuario', '/adicionar_usuario', '/cadastro'];
    app.get(rotasCadastro, function (req, res) {
        res.render('admin/adicionar_usuario', { enviado: false });
    });
    app.post(rotasCadastro, function (req, res) {
        res.render('admin/adicionar_usuario', { enviado: true });
    });
};
