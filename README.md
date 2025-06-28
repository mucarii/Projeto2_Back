
📚 Sistema de Autenticação com Node.js, Express e MongoDB

Integrantes:

Murilo Luiz Calore Ritto — RA: 1997483
Carlos Renato Alves de Oliveira — RA: 1162934


Este projeto é um sistema de autenticação básico que inclui login, registro, dashboard protegida e logout, utilizando Node.js, Express, MongoDB e sessões.

🚀 Funcionalidades
Login: Autenticação de usuários com email e senha

Registro: Cadastro de novos usuários (com verificação de email único)

Dashboard: Página protegida que só pode ser acessada por usuários autenticados

Logout: Encerra a sessão do usuário

Sessões: Armazenamento do estado de autenticação usando express-session

🛠️ Tecnologias Utilizadas
Backend
Node.js

Express (roteamento e middlewares)

Mongoose (ORM para MongoDB)

Express-session (gerenciamento de sessões)

EJS (templates para renderização no servidor)

Frontend
CSS puro para estilização

HTML semântico

Banco de Dados
MongoDB (armazenamento de usuários)

📂 Estrutura do Projeto
text
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
├── views/                # Templates EJS
│   ├── login.ejs
│   ├── register.ejs
│   └── dashboard.ejs
└── .env                  # Variáveis de ambiente (ex: MONGO_URI)
🔧 Como Executar o Projeto
Pré-requisitos
Node.js (v14+)

MongoDB (local ou Atlas)

npm ou yarn

Passos
Clone o repositório:

sh
git clone https://github.com/seu-usuario/auth-system.git
cd auth-system
Instale as dependências:

sh
npm install
Configure o ambiente:

Crie um arquivo .env na raiz do projeto com:

env
MONGO_URI=sua_string_de_conexao_mongodb
Inicie o servidor:

sh
npm start
O servidor estará rodando em: http://localhost:3000



