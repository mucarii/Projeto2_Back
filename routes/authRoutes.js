const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Middleware para proteger a dashboard
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
  const user = await User.findOne({ email, senha });

  if (!user) {
    return res.render('login', { error: 'Credenciais inválidas' });
  }

  req.session.user = user;
  res.redirect('/dashboard');
});

router.get('/dashboard', checkAuth, (req, res) => {
  res.render('dashboard', { user: req.session.user });
});

router.get('/logout', (req, res) => {
  req.session.destroy(() => res.redirect('/login'));
});
// Página de cadastro
router.get('/register', (req, res) => {
  res.render('register', { error: null });
});

// Registro do usuário
router.post('/register', async (req, res) => {
  const { nome, email, senha } = req.body;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res.render('register', { error: 'Email já cadastrado.' });
  }

  try {
    const newUser = new User({ nome, email, senha });
    await newUser.save();
    res.redirect('/login');
  } catch (err) {
    res.render('register', { error: 'Erro ao registrar. Tente novamente.' });
  }
});



module.exports = router;
