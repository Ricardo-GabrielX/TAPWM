const dbConnection = require('../config/dbConnection');

module.exports = function(app) {
    // REMOVIDO DE FATO (mantido como referência):
    // let dbConnection = require('../config/dbConnection');
    // app.get('/informacao/professores', function(req,res){
    //     const sql = require('mssql/msnodesqlv8');
    //     async function getProfessores() {
    //         try {
    //             const pool = await sql.connect(sqlConfig);
    //             const results = await pool.request().query('SELECT * from PROFESSORES');
    //             res.render('informacao/professores', { profs: results.recordset });
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     }
    //     getProfessores();
    // });

    // ALTERAÇÃO: a rota agora tenta conectar ao banco e, se falhar, usa dados locais.
    app.get('/informacao/professores', async function(req, res) {
        // FALLBACK: dados de exemplo para manter a página visível mesmo sem o banco.
        const fallbackProfessores = [
            { NOME_PROFESSOR: 'Prof. Exemplo 1', EMAIL_PROFESSOR: 'prof1@fatec.com' },
            { NOME_PROFESSOR: 'Prof. Exemplo 2', EMAIL_PROFESSOR: 'prof2@fatec.com' }
        ];

        try {
            const sql = await dbConnection();

            if (!sql) {
                return res.render('informacao/professores', { profs: fallbackProfessores });
            }

            const results = await sql.query('SELECT * FROM PROFESSORES');
            const professores = results.recordset && results.recordset.length ? results.recordset : fallbackProfessores;

            return res.render('informacao/professores', { profs: professores });
        } catch (err) {
            // ALTERAÇÃO: em vez de quebrar a tela, registra o erro e renderiza fallback.
            console.error(err);
            return res.render('informacao/professores', { profs: fallbackProfessores });
        }
    });
};