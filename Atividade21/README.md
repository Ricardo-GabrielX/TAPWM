# Atividade 21 - Consulta de professores

Continuação da Atividade20, mantendo a estrutura `exercicios/app`, as páginas EJS e o carregamento de módulos com Consign. A listagem em `/informacao/professores` consulta a tabela `PROFESSORES` no SQL Server e exibe os nomes e e-mails retornados pelo banco.

## Executar

Use o banco das atividades anteriores ou execute `scriptCreate.sql` em um banco vazio para criar as tabelas. Configure a conexão no PowerShell:

```powershell
cd Atividade21/exercicios
npm ci
$env:DB_SERVER = 'localhost'
$env:DB_DATABASE = 'BD'
$env:DB_USER = 'seu_usuario'
$env:DB_PASSWORD = 'sua_senha'
npm start
```

Acesse `http://localhost:3000`. Para reiniciar automaticamente durante o desenvolvimento, use `npm run dev`.

Também é possível configurar `DB_PORT` (1433), `DB_ENCRYPT` (`false`), `DB_TRUST_CERTIFICATE` (`true`) e `PORT` (3000). As credenciais são lidas das variáveis de ambiente.

## Páginas

- `/`: página inicial com navegação.
- `/informacao/cursos`: cursos.
- `/informacao/historia`: história.
- `/admin/adicionar_usuario`: formulário demonstrativo da atividade anterior.
- `/informacao/professores`: registros consultados no SQL Server.

Se a tabela estiver vazia, a listagem informa que não há professores cadastrados. Se a conexão ou a consulta falhar, a rota responde com status 503 e uma mensagem de indisponibilidade.

## Verificar

Execute `npm test` para verificar a navegação, a renderização dos registros e o tratamento de falhas com uma conexão simulada. A verificação com um SQL Server real depende das credenciais configuradas no ambiente.
