let sql = require ('mssql'); 
    module.exports = function(){ 
        const sqlConfig = {
            user: 'xx',
            password: 'xxxx',
            database: 'BD', 
            driver: 'msnodesqlv8',
            options: {
                encrypt: false,
                trustServerCertificate: true,
            }
        }
return sql.connect(sqlConfig); 
} 