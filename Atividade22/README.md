# Atividade 22 - CRUD de professores

Aplicação Node.js com Express, EJS, Consign e SQL Server. A organização segue as atividades anteriores, com a aplicação na pasta `exercicios` e separação entre configuração, modelos, rotas e views.

## Executar

1. Crie ou selecione o banco `BD` no SQL Server e execute `scriptCreate.sql`. As tabelas existentes são preservadas.
2. No PowerShell, configure o acesso e inicie a aplicação:

```powershell
cd Atividade22/exercicios
npm ci
$env:DB_SERVER = 'localhost'
$env:DB_DATABASE = 'BD'
$env:DB_USER = 'seu_usuario'
$env:DB_PASSWORD = 'sua_senha'
npm start
```

Acesse `http://localhost:3000`. Para desenvolvimento com reinício automático, use `npm run dev`.

As variáveis opcionais são `DB_PORT` (1433), `DB_ENCRYPT` (`false`), `DB_TRUST_CERTIFICATE` (`true`) e `PORT` (3000). As credenciais são lidas do ambiente. Sem acesso ao SQL Server, as rotas que consultam professores respondem com uma mensagem de indisponibilidade.

## Funcionalidades

- Página inicial e páginas de cursos e história.
- Listagem pública em `/informacao/professores`.
- Administração em `/admin/crud_professores`, com cadastro, edição, exclusão e acesso aos detalhes por ID.
- Validação de nome, e-mail e ID, consultas parametrizadas e resposta para registros inexistentes.
- Formulário demonstrativo de usuários em `/admin/adicionar_usuario`, sem persistência de usuários nesta atividade.

## Verificar

```powershell
npm test
```

Os testes exercitam as rotas HTTP e os modelos usando uma conexão simulada. A integração com um SQL Server real depende da configuração do ambiente.
