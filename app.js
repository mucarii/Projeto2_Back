require('dotenv').config();
const express = require('express');
const path = require('path');
const session = require('express-session');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.use(session({
  secret: 'segredo123',
  resave: false,
  saveUninitialized: false,
}));

app.use(authRoutes);

app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'));
