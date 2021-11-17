// Dependencies
// =============================================================
const path =  require('path');
const express = require('express');
const exphbs = require('express-handlebars');
// Requires the 'express-session' module
const session = require(`express-session`);
const sequelize = require('./config/connection');
<<<<<<< HEAD
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const routes = require('./controllers')
// Sets up the Express App
// =============================================================
=======
const hbs = exphbs.create({});
const routes = require('./routes');
>>>>>>> 67022f29d2679e8ef5eb35b01d05ce1781027c02
const app = express();
const session = require('express-session');
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
<<<<<<< HEAD
=======
app.use(require('./routes/api/'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Sets up the sessions with the 'secret', 'resave', 'saveUninitialized' options
app.use(
  session({
    secret: 'This is a major secret!',
    resave: false,
    saveUninitialized: false
  })
);

// app.use(require('./routes/api/'));


// Starts the server to begin listening
// =============================================================
// app.listen(PORT, () => {
//   console.log('App listening on PORT ' + PORT);
// });

const routes = require('./routes');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
>>>>>>> 67022f29d2679e8ef5eb35b01d05ce1781027c02

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));



const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening ' + PORT));
});

<<<<<<< HEAD
=======


// npm install --save  
// npm dotenv --save
// npm install express sequelize mysql2 --save
// npm install express-handlebars
// npm install bcrypt
// npm install node-fetch
// npm i express-session connect-session-sequelize
>>>>>>> 67022f29d2679e8ef5eb35b01d05ce1781027c02
