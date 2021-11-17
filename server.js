// Dependencies
// =============================================================
const path =  require('path');
const express = require('express');
const exphbs = require('express-handlebars');
// Requires the 'express-session' module
const session = require(`express-session`);
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const routes = require('./controllers')
// Sets up the Express App
// =============================================================
const app = express();

const hbs = exphbs.create({});
// const session = require('express-session');
const PORT = process.env.PORT || 3001;

// Sets up the sessions with the 'secret', 'resave', 'saveUninitialized' options
const sess = {
    secret: 'This is a major secret!',
    cookie: {},
    resave: false,
    saveUninitialized: false, 
    store: new SequelizeStore({db: sequelize})
  }

app.use(session(sess));
// Sets Handlebars as the default template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));



// const SequelizeStore = require('connect-session-sequelize')(session.Store);

// const sess = {
//   secret: 'Super secret secret',
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize
//   })
// };

app.use(session(sess));

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log('Now listening ' + PORT));
});



// npm install --save  
// npm dotenv --save
// npm install express sequelize mysql2 --save
// npm install express-handlebars
// npm install bcrypt
// npm install node-fetch
// npm i express-session connect-session-sequelize
