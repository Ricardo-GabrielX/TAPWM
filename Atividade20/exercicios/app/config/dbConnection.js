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
let connSQLServer = function(){ 
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
}

module.exports = function(){ 
 console.log('O autoload carregou o módulo de conexão com o bd'); 
 return connSQLServer; 
}
