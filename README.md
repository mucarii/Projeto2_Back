# Projeto2_Back

    <h1>📝 Sistema de Autenticação com Node.js, Express e MongoDB</h1>
    <p>Este projeto é um sistema de autenticação básico que inclui <strong>login</strong>, <strong>registro</strong>, <strong>dashboard protegida</strong> e <strong>logout</strong>, utilizando Node.js, Express, MongoDB e sessões.</p>

    <h2>🚀 Funcionalidades</h2>
    <ul>
        <li><strong>Login</strong>: Autenticação de usuários com email e senha.</li>
        <li><strong>Registro</strong>: Cadastro de novos usuários (com verificação de email único).</li>
        <li><strong>Dashboard</strong>: Página protegida que só pode ser acessada por usuários autenticados.</li>
        <li><strong>Logout</strong>: Encerra a sessão do usuário.</li>
        <li><strong>Sessões</strong>: Armazenamento do estado de autenticação usando <code>express-session</code>.</li>
    </ul>

    <h2>🛠️ Tecnologias Utilizadas</h2>
    <h3>Backend:</h3>
    <ul>
        <li>Node.js</li>
        <li>Express (roteamento e middlewares)</li>
        <li>Mongoose (ORM para MongoDB)</li>
        <li>Express-session (gerenciamento de sessões)</li>
        <li>EJS (templates para renderização no servidor)</li>
    </ul>

    <h3>Frontend:</h3>
    <ul>
        <li>CSS puro para estilização</li>
        <li>HTML semântico</li>
    </ul>

    <h3>Banco de Dados:</h3>
    <ul>
        <li>MongoDB (armazenamento de usuários)</li>
    </ul>

    <h2>📂 Estrutura do Projeto</h2>
    <div class="file-structure">
.
├── app.js                # Configuração principal do servidor
├── models/
│   └── User.js           # Modelo do usuário (Mongoose)
├── routes/
│   └── authRoutes.js     # Rotas de autenticação (login, registro, logout)
├── controllers/
│   └── authController.js # Lógica das rotas (opcional, pode ser mesclada com routes)
├── public/
│   └── style.css         # Estilos CSS
├── views/                # Templates EJS (não incluídos no código fornecido)
│   ├── login.ejs
│   ├── register.ejs
│   └── dashboard.ejs
└── .env                  # Variáveis de ambiente (ex: MONGO_URI)
    </div>

    <h2>🔧 Como Executar o Projeto</h2>
    <h3>Pré-requisitos</h3>
    <ul>
        <li>Node.js (v14+)</li>
        <li>MongoDB (local ou Atlas)</li>
        <li>npm ou yarn</li>
    </ul>

    <h3>Passos</h3>
    <ol>
        <li><strong>Clone o repositório</strong>:
            <pre><code>git clone https://github.com/seu-usuario/auth-system.git
cd auth-system</code></pre>
        </li>
        <li><strong>Instale as dependências</strong>:
            <pre><code>npm install</code></pre>
        </li>
        <li><strong>Configure o ambiente</strong>:
            <p>Crie um arquivo <code>.env</code> na raiz do projeto com:</p>
            <pre><code>MONGO_URI=sua_string_de_conexao_mongodb</code></pre>
        </li>
        <li><strong>Inicie o servidor</strong>:
            <pre><code>npm start</code></pre>
            <p>O servidor estará rodando em: <a href="http://localhost:3000">http://localhost:3000</a>.</p>
        </li>
    </ol>

