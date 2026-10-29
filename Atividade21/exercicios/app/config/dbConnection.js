const sql = require('mssql');

module.exports = function() {
    return function connSQLServer() {
        if (!process.env.DB_USER || !process.env.DB_PASSWORD) {
            return Promise.reject(new Error('Configure DB_USER e DB_PASSWORD para acessar o banco.'));
        }

        const sqlConfig = {
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            server: process.env.DB_SERVER || 'localhost',
            database: process.env.DB_DATABASE || 'BD',
            port: Number(process.env.DB_PORT || 1433),
            connectionTimeout: 5000,
            options: {
                encrypt: process.env.DB_ENCRYPT === 'true',
                trustServerCertificate: process.env.DB_TRUST_CERTIFICATE !== 'false'
            },
            pool: {
                max: 10,
                min: 0,
                idleTimeoutMillis: 30000
            }
        };

        return sql.connect(sqlConfig);
    };
};
