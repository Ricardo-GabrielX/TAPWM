-- Execute no banco utilizado pela aplicação (BD por padrão).
IF OBJECT_ID('dbo.professores', 'U') IS NULL
BEGIN
    CREATE TABLE dbo.professores
    (
        ID_PROFESSOR INT IDENTITY(1,1) PRIMARY KEY NOT NULL,
        NOME_PROFESSOR VARCHAR(50) NOT NULL,
        EMAIL_PROFESSOR VARCHAR(100) NOT NULL
    );
END;

IF OBJECT_ID('dbo.usuario', 'U') IS NULL
BEGIN
    CREATE TABLE dbo.usuario
    (
        ID_USUARIO INT IDENTITY(1,1) PRIMARY KEY NOT NULL,
        NOME_USUARIO VARCHAR(50) NOT NULL,
        EMAIL_USUARIO VARCHAR(100) NOT NULL,
        SENHA_USUARIO VARCHAR(6) NOT NULL
    );
END;
