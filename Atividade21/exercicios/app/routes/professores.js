module.exports = function(app) {
    app.get('/informacao/professores', async function(req, res) {
        try {
            const pool = await app.config.dbConnection();
            const results = await pool.request().query('SELECT * FROM PROFESSORES');
            res.render('informacao/professores', { profs: results.recordset });
        } catch (err) {
            console.error('Erro ao consultar professores:', err.message);
            res.status(503).send('Não foi possível consultar os professores. Verifique a conexão com o SQL Server.');
        }
    });
};
