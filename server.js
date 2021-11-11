const path = require('path');
const mysql = require('mysql2'); // npm install --save mysql2

const express = require('express'); // npm install -> npm start
const app = express();

const session = require('express-session');  // npm install express-session
const exphbs = require('express-handlebars'); // npm install express-handlebars

const PORT = process.env.PORT || 3001;
const sequelize = require('./config/connection');

// // app.set('trust proxy', 1) // trust first proxy
// app.use(session({
//     secret: 'keyboard cat',
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: true }
//   }))

const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });