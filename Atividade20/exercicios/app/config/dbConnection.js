const sql = require('mssql');

// REMOVIDO DE FATO (mantido como referência):
// const sqlConfig = {
//     user: 'xx',
//     password: 'xxxx',
//     database: 'BD',
//     driver: 'msnodesqlv8',
//     options: {
//         encrypt: false,
//         trustServerCertificate: true,
//     }
// };
// return sql.connect(sqlConfig);

// ALTERAÇÃO: removemos o uso direto do driver nativo 'msnodesqlv8' porque ele não
// está presente no ambiente e fazia a aplicação quebrar ao iniciar.
// O módulo 'mssql' é suficiente para tentar a conexão normalmente.
const sqlConfig = {
    user: 'xx',
    password: 'xxxx',
    server: 'localhost',
    database: 'BD',
    options: {
        encrypt: false,
        trustServerCertificate: true,
    },
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000,
    },
};

module.exports = async function() {
    try {
        await sql.connect(sqlConfig);
        return sql;
    } catch (err) {
        // ALTERAÇÃO: se o banco não estiver ativo, a aplicação não deve cair.
        // Em vez disso, ela retorna null para que a rota use dados de fallback.
        console.warn('Banco de dados indisponível. Usando dados de fallback:', err.message);
        return null;
    }
};
