let dbConnection = require('../config/dbConnection');

module.exports = function(app){
   app.get('/informacao/professores', function(req,res){
       const sql = require ('mssql/msnodesqlv8');
 
       
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