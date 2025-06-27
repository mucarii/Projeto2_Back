require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const path = require('path');
const authRoutes = require('./routes/authRoutes');

const app = express();

mongoose.connect(process.env.MONGO_URI);

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
