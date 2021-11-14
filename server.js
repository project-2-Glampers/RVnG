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
const PORT = process.env.PORT || 3001;
const hbs = exphbs.create({});

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

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening ' + PORT));
});

