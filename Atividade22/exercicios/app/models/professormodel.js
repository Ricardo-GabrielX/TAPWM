const sql = require('mssql');

module.exports = function () {
    return {
        getProfessores: function (connection) {
            return connection.request().query('SELECT * FROM professores ORDER BY ID_PROFESSOR');
        },

        getProfessorPorId: function (id, connection) {
            return connection.request()
                .input('id', sql.Int, id)
                .query('SELECT * FROM professores WHERE ID_PROFESSOR = @id');
        },

        salvarProfessor: function (professor, connection) {
            return connection.request()
                .input('nome', sql.VarChar(50), professor.nome_professor)
                .input('email', sql.VarChar(100), professor.email_professor)
                .query('INSERT INTO professores (NOME_PROFESSOR, EMAIL_PROFESSOR) VALUES (@nome, @email)');
        },

        editarProfessor: function (professor, connection) {
            return connection.request()
                .input('id', sql.Int, professor.id_professor)
                .input('nome', sql.VarChar(50), professor.nome_professor)
                .input('email', sql.VarChar(100), professor.email_professor)
                .query('UPDATE professores SET NOME_PROFESSOR = @nome, EMAIL_PROFESSOR = @email WHERE ID_PROFESSOR = @id');
        },

        deletarProfessor: function (id, connection) {
            return connection.request()
                .input('id', sql.Int, id)
                .query('DELETE FROM professores WHERE ID_PROFESSOR = @id');
        }
    };
};
