const router = require('express').Router();
const sequelize = require('../config/connection');
const { RV, User, City } = require('../models');




router.get('/', (req, res) => {
  res.render('index')

});

router.get('/login', (req, res) => {
  
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('index');
});

module.exports = router;