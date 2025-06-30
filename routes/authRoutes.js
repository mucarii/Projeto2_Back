const express = require('express');
const router = express.Router();
const { connect } = require('../models/db');

// Middleware de autenticação
function checkAuth(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    res.redirect('/login');
  }
}

router.get('/', (req, res) => {
  res.redirect('/login');
});

router.get('/login', (req, res) => {
  res.render('login', { error: null });
});

router.post('/login', async (req, res) => {
  const { email, senha } = req.body;
  const db = await connect();
  const user = await db.collection('users').findOne({ email, senha });

  if (!user) {
    return res.render('login', { error: 'Credenciais inválidas' });
  }

  req.session.user = user;
  res.redirect('/dashboard');
});

router.get('/register', (req, res) => {
  res.render('register', { error: null });
});

router.post('/register', async (req, res) => {
  const { nome, email, senha } = req.body;
  const db = await connect();
  const existingUser = await db.collection('users').findOne({ email });

  if (existingUser) {
    return res.render('register', { error: 'Email já cadastrado.' });
  }

  await db.collection('users').insertOne({ nome, email, senha });
  res.redirect('/login');
});

router.get('/dashboard', checkAuth, (req, res) => {
  res.render('dashboard', { user: req.session.user });
});

router.get('/logout', (req, res) => {
  req.session.destroy(() => res.redirect('/login'));
});

module.exports = router;
