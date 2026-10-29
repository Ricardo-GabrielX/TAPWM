const { test, before, after, beforeEach } = require('node:test');
const assert = require('node:assert/strict');
const { once } = require('node:events');
const app = require('../app/config/server');

let server;
let baseUrl;
let registros;
let consultas;
let falhaConexao;
let falhaConsulta;
const conexaoOriginal = app.config.dbConnection;

before(async () => {
    app.config.dbConnection = async function() {
        if (falhaConexao) throw new Error('Conexão indisponível no teste');
        return {
            request() {
                return {
                    async query(texto) {
                        consultas.push(texto);
                        if (falhaConsulta) throw new Error('Consulta indisponível no teste');
                        return { recordset: registros };
                    }
                };
            }
        };
    };
    server = app.listen(0, '127.0.0.1');
    await once(server, 'listening');
    baseUrl = `http://127.0.0.1:${server.address().port}`;
});

after(async () => {
    app.config.dbConnection = conexaoOriginal;
    await new Promise((resolve, reject) => server.close(err => err ? reject(err) : resolve()));
});

beforeEach(() => {
    registros = [{ ID_PROFESSOR: 1, NOME_PROFESSOR: 'Maria Silva', EMAIL_PROFESSOR: 'maria@fatec.com' }];
    consultas = [];
    falhaConexao = false;
    falhaConsulta = false;
});

test('página inicial e seus links renderizam sem conexão com o banco', async () => {
    falhaConexao = true;
    const resposta = await fetch(baseUrl + '/');
    assert.equal(resposta.status, 200);
    const html = await resposta.text();
    for (const rota of ['/admin/adicionar_usuario', '/informacao/cursos', '/informacao/historia', '/informacao/professores']) {
        assert.ok(html.includes(`href="${rota}"`));
    }
    for (const rota of ['/informacao/home', '/admin/adicionar_usuario', '/informacao/cursos', '/informacao/historia']) {
        assert.equal((await fetch(baseUrl + rota)).status, 200, rota);
    }
    assert.equal(consultas.length, 0);
});

test('listagem exibe os dados retornados pela consulta e escapa HTML', async () => {
    registros.push({ ID_PROFESSOR: 2, NOME_PROFESSOR: '<script>alert(1)</script>', EMAIL_PROFESSOR: 'outro@fatec.com' });
    const resposta = await fetch(baseUrl + '/informacao/professores');
    assert.equal(resposta.status, 200);
    const html = await resposta.text();
    assert.match(html, /Maria Silva/);
    assert.match(html, /maria@fatec.com/);
    assert.match(html, /outro@fatec.com/);
    assert.match(html, /&lt;script&gt;/);
    assert.ok(!html.includes('<script>alert(1)</script>'));
    assert.deepEqual(consultas, ['SELECT * FROM PROFESSORES']);
    assert.ok(!html.includes('Prof. Exemplo'));
});

test('tabela vazia informa que não há professores cadastrados', async () => {
    registros = [];
    const resposta = await fetch(baseUrl + '/informacao/professores');
    assert.equal(resposta.status, 200);
    assert.match(await resposta.text(), /Nenhum professor cadastrado/);
});

test('falhas de conexão e de consulta retornam 503 sem expor detalhes internos', async () => {
    for (const tipo of ['conexao', 'consulta']) {
        falhaConexao = tipo === 'conexao';
        falhaConsulta = tipo === 'consulta';
        const resposta = await fetch(baseUrl + '/informacao/professores');
        assert.equal(resposta.status, 503);
        const html = await resposta.text();
        assert.match(html, /SQL Server/);
        assert.ok(!html.includes('no teste'));
    }
});

test('módulo de conexão retorna o pool com a configuração do ambiente', async () => {
    const sql = require('mssql');
    const connectOriginal = sql.connect;
    const nomes = ['DB_USER', 'DB_PASSWORD', 'DB_SERVER', 'DB_DATABASE', 'DB_PORT', 'DB_ENCRYPT', 'DB_TRUST_CERTIFICATE'];
    const ambienteOriginal = Object.fromEntries(nomes.map(nome => [nome, process.env[nome]]));
    try {
        process.env.DB_USER = 'usuario_teste';
        process.env.DB_PASSWORD = 'senha_teste';
        process.env.DB_SERVER = 'servidor_teste';
        process.env.DB_DATABASE = 'banco_teste';
        process.env.DB_PORT = '1435';
        process.env.DB_ENCRYPT = 'true';
        process.env.DB_TRUST_CERTIFICATE = 'false';
        const pool = {};
        sql.connect = async function(config) {
            assert.equal(config.user, 'usuario_teste');
            assert.equal(config.password, 'senha_teste');
            assert.equal(config.server, 'servidor_teste');
            assert.equal(config.database, 'banco_teste');
            assert.equal(config.port, 1435);
            assert.equal(config.options.encrypt, true);
            assert.equal(config.options.trustServerCertificate, false);
            return pool;
        };
        const conectar = require('../app/config/dbConnection')();
        assert.equal(await conectar(), pool);
        delete process.env.DB_PASSWORD;
        await assert.rejects(conectar(), /Configure DB_USER e DB_PASSWORD/);
    } finally {
        sql.connect = connectOriginal;
        for (const nome of nomes) {
            if (ambienteOriginal[nome] === undefined) delete process.env[nome];
            else process.env[nome] = ambienteOriginal[nome];
        }
    }
});
