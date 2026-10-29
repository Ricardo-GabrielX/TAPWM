const sql = require('mssql');

module.exports = function () {
    let conexao;

    return function () {
        if (!process.env.DB_USER || !process.env.DB_PASSWORD) {
            return Promise.reject(new Error('Configure DB_USER e DB_PASSWORD para acessar o banco.'));
        }

        if (!conexao) {
            const pool = new sql.ConnectionPool({
                user: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                server: process.env.DB_SERVER || 'localhost',
                database: process.env.DB_DATABASE || 'BD',
                port: Number(process.env.DB_PORT || 1433),
                connectionTimeout: 5000,
                options: {
                    encrypt: process.env.DB_ENCRYPT === 'true',
                    trustServerCertificate: process.env.DB_TRUST_CERTIFICATE !== 'false'
                }
            });
            pool.on('error', function (err) {
                console.error('Erro de conexão com o SQL Server:', err.message);
            });
            conexao = pool.connect().catch(function (err) {
                conexao = undefined;
                throw err;
            });
        }

        return conexao;
    };
};
