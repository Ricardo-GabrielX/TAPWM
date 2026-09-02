# TAPWM - Tecnologias de Programação Web e Mobile

Repositório destinado ao versionamento de exercícios, projetos e atividades práticas desenvolvidos na disciplina de Tecnologias de Programação Web e Mobile da FATEC Sorocaba.

O repositório abrange desde fundamentos de Programação Orientada a Objetos (POO) em C#/.NET até o desenvolvimento backend com Node.js, Express e renderização de páginas no servidor (Server-Side Rendering) utilizando o motor de templates EJS, além de manipulação avançada de DOM e eventos no frontend com JavaScript.

---

## Tecnologias e Conceitos Abordados

- **Linguagens**: C#, JavaScript (ES6+)
- **Plataformas e Runtimes**: .NET Framework / .NET Core, Node.js
- **Frameworks e Bibliotecas Web**: Express.js, EJS (Embedded JavaScript Templates)
- **Frontend**: HTML5, CSS3, DOM API, Event Handling
- **Conceitos de Engenharia de Software**:
  - Paradigma de Orientação a Objetos (Herança, Polimorfismo, Encapsulamento, Classes Abstratas)
  - Modelo de concorrência e I/O não-bloqueante (Event Loop, Callbacks, Promises)
  - Arquitetura MVC (Model-View-Controller) básica e roteamento HTTP
  - Validação de formulários no lado do cliente e manipulação de estado

---

## Estrutura do Repositório e Atividades

### 1. Programação Orientada a Objetos (.NET / C#)
- **Atividade2 (PEmpregado)**: Implementação de arquitetura orientada a objetos com Windows Forms. Utilização de classes abstratas (`Empregado`), herança e polimorfismo com classes derivadas (`EmpregadoHorista`, `EmpregadoMensalista`), aplicando encapsulamento e validação de regras de negócio.

### 2. Fundamentos de JavaScript e Manipulação do DOM
- **atividade3**: Operações aritméticas básicas, entrada de dados, coerção de tipos e cálculo de médias.
- **atividade4**: Lógica condicional, estruturas de decisão e geração de números pseudoaleatórios via `Math.random` com o jogo Pedra, Papel e Tesoura.
- **Atividade5 & atividade6**: Declaração de funções, escopo de variáveis e manipulação básica de elementos no documento.
- **Atividade7**: Modularização de funções utilitárias (cálculo de maior valor, ordenação) e integração com estilização CSS.
- **atividade8**: Manipulação de coleções de dados, agregação e estatísticas sobre arrays de objetos (pesquisa de público com idade, sexo e opinião).
- **Atividade10**: Criação e instanciação de objetos em JavaScript utilizando literais de objeto, notação de colchetes e propriedades dinâmicas.
- **Atividade12**: Manipulação dinâmica do DOM baseada em eventos de ponteiro (`mouseover`, `mouseout`, `click`) e gerenciamento de estado visual da interface.
- **Atividade14**: Manipulação de formulários, tratamento do evento `input`/`change` e transformação dinâmica de strings (caixa alta e caixa baixa).
- **Atividade15**: Validação de formulários no lado do cliente, interceptação do evento `submit`, verificação de campos obrigatórios e comprimento mínimo de caracteres.
- **eventos**: Práticas com ouvintes de eventos (`addEventListener`), propagação e tratamento de interações do usuário no navegador.

### 3. Backend com Node.js e Express
- **Atividade16**: Fundamentos de execução assíncrona no Node.js. Análise do Event Loop e I/O não-bloqueante por meio de chamadas síncronas (`fs.readFileSync`) versus assíncronas (`fs.readFile`) com callbacks.
- **Atividade17**: Evolução do padrão assíncrono em Node.js com Promises e criação de servidores HTTP nativos utilizando o módulo `http`.
- **Atividade18**: Introdução ao framework Express.js. Criação de rotas HTTP (método GET), configuração de middlewares e introdução à renderização de templates com a engine EJS.
- **Atividade19**: Estruturação de aplicação web com Express e EJS. Separação hierárquica de views em subdiretórios (`views/home`, `views/admin`, `views/informacao`), configuração de rotas modularizadas e entrega de páginas dinâmicas renderizadas no servidor.

---

## Como Executar os Projetos

### Pré-requisitos
- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) (gerenciador de pacotes incluso no Node.js)
- [.NET SDK](https://dotnet.microsoft.com/) / Visual Studio (para projetos em C#)

### Executando Aplicações Node.js / Express (exemplo: Atividade19)

1. Clone o repositório:
```bash
git clone https://github.com/Ricardo-GabrielX/TAPWM.git
cd TAPWM
```

2. Navegue até a pasta da atividade desejada:
```bash
cd Atividade19/exercicios
```

3. Instale as dependências do projeto:
```bash
npm install
```

4. Inicie o servidor:
```bash
npm start
```

5. Acesse no navegador:
```text
http://localhost:3000
```

### Executando Projetos .NET / Windows Forms (Atividade2)

1. Abra o arquivo de solução (`PEmpregado.sln`) no Visual Studio ou execute via CLI:
```bash
cd Atividade2/PEmpregado
dotnet build
dotnet run --project PEmpregado/PEmpregado.csproj
```
