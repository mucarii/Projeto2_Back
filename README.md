
<h1>Sistema de Autenticação com Node.js, Express e MongoDB</h1>📚 

Integrantes:
<ul>
<li>Carlos Renato Alves de Oliveira — RA: 1162934</li>
<li>Murilo Luiz Calore Ritto — RA: 1997483</li> 
</ul>

Este projeto é um sistema de autenticação básico que inclui login, registro, dashboard protegida e logout, utilizando Node.js, Express, MongoDB e sessões.

<h1>🚀 Funcionalidades</h1>

Login: Autenticação de usuários com email e senha<br>
Registro: Cadastro de novos usuários (com verificação de email único)<br>
Dashboard: Página protegida que só pode ser acessada por usuários autenticados<br>
Logout: Encerra a sessão do usuário<br>
Sessões: Armazenamento do estado de autenticação usando express-session<br>

<h1>🛠️ Tecnologias Utilizadas:</h1>

<h2>Backend</h2>

<li>Node.js</li>
<li>Express (roteamento e middlewares)</li>
<li>Mongoose (ORM para MongoDB)</li>
<li>Express-session (gerenciamento de sessões)</li>
<li>EJS (templates para renderização no servidor)</li>
<li>MongoDB (armazenamento de usuários)</li>
<h2>Frontend</h2>

<li>CSS puro para estilização</li>
<li>HTML semântico</li>


<h1>📂 Estrutura do Projeto</h1>

<ul>
<li>├── app.js                # Configuração principal do servidor</li>
<li>├── models/</li>
<li>│   └── User.js           # Modelo do usuário (Mongoose)</li>
<li>├── routes/</li>
<li>│   └── authRoutes.js     # Rotas de autenticação (login, registro, logout)</li>
<li>├── controllers/</li>
<li>│   └── authController.js # Lógica das rotas (opcional, pode ser mesclada com routes)</li>
<li>├── public/css</li>
<li>│   └── style.css         # Estilos CSS</li>
<li>├── views/                # Templates EJS</li>
<li>│   ├── login.ejs</li>
<li>│   ├── register.ejs</li>
<li>│   └── dashboard.ejs</li>
<li>└── .env                  # Variáveis de ambiente (ex: MONGO_URI)</li>
</ul>
  
<h1>🔧 Como Executar o Projeto</h1>
<h2>Pré-requisitos</h2>
<ul>
<li>Node.js (v14+)</li>
<li>MongoDB (local ou Atlas)</li>
<li>npm</li>

<h2>Passos</h2>
<h3>Clone o repositório:</h3>


git clone https://github.com/mucarii/projeto2-login-session-mvc.git<br>
cd auth-system<br>


<h3>Configure o ambiente:</h3>
npm install


<h3>Crie um arquivo .env na raiz do projeto com:</h3>

env
MONGO_URI=sua_string_de_conexao_mongodb

<h3>Inicie o servidor:</h3>


npm start
O servidor estará rodando em: http://localhost:3000



