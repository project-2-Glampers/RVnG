// Dependencies
// =============================================================
const path =  require('path');
const express = require('express');
const exphbs = require('express-handlebars');
// Requires the 'express-session' module
const session = require(`express-session`);
const sequelize = require('./config/connection');

const routes = require('./controllers');
const app = express();

const PORT = process.env.PORT || 3001;

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'This is a major secret!',
  cookie: {},
  resave: false,
  saveUninitialized: false, 
  store: new SequelizeStore({db: sequelize})
}

app.use(session(sess));

// Sets Handlebars as the default template engine
const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));


app.use(routes);

// const sess = {
//   secret: 'Super secret secret',
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize
//   })
// };

// turn on routes


// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening ' + PORT));
});



// npm install --save  
// npm dotenv --save
// npm install express sequelize mysql2 --save
// npm install express-handlebars
// npm install bcrypt
// npm install node-fetch
// npm i express-session connect-session-sequelize
