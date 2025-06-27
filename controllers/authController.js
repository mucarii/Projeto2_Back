const User = require('../models/User');

exports.loginPage = (req, res) => {
  res.render('login', { error: null });
};

exports.login = async (req, res) => {
  const { email, senha } = req.body;
  const user = await User.findOne({ email, senha });

  if (!user) return res.render('login', { error: 'Credenciais inválidas' });

  req.session.user = user;
  res.redirect('/dashboard');
};

exports.dashboard = (req, res) => {
  if (!req.session.user) return res.redirect('/login');
  res.render('dashboard', { user: req.session.user });
};

exports.logout = (req, res) => {
  req.session.destroy(() => res.redirect('/login'));
};
