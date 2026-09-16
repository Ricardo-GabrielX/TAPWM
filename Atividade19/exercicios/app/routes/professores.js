module.exports = function(app){
   app.get('/informacao/professores', function(req,res){
       const sql = require ('mssql/msnodesqlv8');
 
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
  
      async function getProfessores() {
          try {
              const pool = await sql.connect(sqlConfig);
          
               const results = await pool.request().query('SELECT * from PROFESSORES')
          
               res.json(results.recordset);
 
              res.render('informacao/professores',{profs: results.recordset})
    
           } catch (err) {
               console.log(err)
          }
        
       }
      getProfessores();
   });
}