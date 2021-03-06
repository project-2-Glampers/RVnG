const router = require('express').Router();
const sequelize = require('../config/connection');
const { RV, User, City } = require('../models');




router.get('/home', (req, res) => {
  res.render('index')

});

router.get('/', (req, res) => {
  res.render('index')

});

router.get('/login', (req, res) => {
  
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/about', (req,res) => {
  res.render('about')
});

router.get('/contact', (req,res) => {
  res.render('contact')
});

module.exports = router;