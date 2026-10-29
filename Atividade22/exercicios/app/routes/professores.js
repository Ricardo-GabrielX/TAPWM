module.exports = function (app) {
    const model = app.models.professormodel;

    function lerId(valor) {
        const texto = String(valor || '');
        const id = Number(texto);
        return /^\d+$/.test(texto) && Number.isInteger(id) && id > 0 && id <= 2147483647 ? id : null;
    }

    function lerProfessor(body) {
        return {
            nome_professor: typeof body.nome_professor === 'string' ? body.nome_professor.trim() : '',
            email_professor: typeof body.email_professor === 'string' ? body.email_professor.trim() : ''
        };
    }

    function validarProfessor(professor) {
        if (!professor.nome_professor || professor.nome_professor.length > 50) {
            return 'Informe um nome com até 50 caracteres.';
        }
        if (professor.email_professor.length > 100 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(professor.email_professor)) {
            return 'Informe um e-mail válido com até 100 caracteres.';
        }
        return null;
    }

    app.get(['/informacao/professores', '/professores', '/admin/crud_professores'], async function (req, res) {
        const pool = await app.config.dbConnection();
        const results = await model.getProfessores(pool);
        const view = req.path === '/admin/crud_professores' ? 'admin/crud_professores' : 'informacao/professores';
        res.render(view, { profs: results.recordset });
    });

    app.get('/admin/adicionar_professor', function (req, res) {
        res.render('admin/adicionar_professor', { professor: {}, erro: null });
    });

    app.post('/professor/salvar', async function (req, res) {
        const professor = lerProfessor(req.body || {});
        const erro = validarProfessor(professor);
        if (erro) {
            return res.status(400).render('admin/adicionar_professor', { professor, erro });
        }
        const pool = await app.config.dbConnection();
        await model.salvarProfessor(professor, pool);
        res.redirect('/admin/crud_professores');
    });

    app.get(['/admin/editar_professor', '/informacao/professores/detalhaprofessor'], async function (req, res) {
        const id = lerId(req.query.id);
        if (!id) return res.status(400).send('Informe um ID de professor válido.');
        const pool = await app.config.dbConnection();
        const results = await model.getProfessorPorId(id, pool);
        if (!results.recordset.length) return res.status(404).send('Professor não encontrado.');
        if (req.path === '/admin/editar_professor') {
            return res.render('admin/editar_professores', { professor: results.recordset[0], erro: null });
        }
        res.render('informacao/professores/detalhaprofessor', { professor: results.recordset[0] });
    });

    app.post('/professor/editar', async function (req, res) {
        const body = req.body || {};
        const id = lerId(body.id_professor);
        if (!id) return res.status(400).send('Informe um ID de professor válido.');
        const professor = { ...lerProfessor(body), id_professor: id };
        const erro = validarProfessor(professor);
        if (erro) {
            return res.status(400).render('admin/editar_professores', {
                professor: { ID_PROFESSOR: id, NOME_PROFESSOR: professor.nome_professor, EMAIL_PROFESSOR: professor.email_professor },
                erro
            });
        }
        const pool = await app.config.dbConnection();
        const results = await model.editarProfessor(professor, pool);
        if (!results.rowsAffected[0]) return res.status(404).send('Professor não encontrado.');
        res.redirect('/admin/crud_professores');
    });

    app.post('/professor/deletar', async function (req, res) {
        const id = lerId((req.body || {}).id_professor);
        if (!id) return res.status(400).send('Informe um ID de professor válido.');
        const pool = await app.config.dbConnection();
        const results = await model.deletarProfessor(id, pool);
        if (!results.rowsAffected[0]) return res.status(404).send('Professor não encontrado.');
        res.redirect('/admin/crud_professores');
    });
};
