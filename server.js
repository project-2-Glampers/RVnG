// Dependencies
// =============================================================
const express = require('express');
const exphbs = require('express-handlebars');
// Requires the 'express-session' module
//const session = require(`express-session`);
const sequelize = require('./config/connection');
const hbs = exphbs.create({});
const routes = require('./routes');
const app = express();
const session = require('express-session');
const PORT = process.env.PORT || 3001;

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



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



// npm install --save  
// npm dotenv --save
// npm install express sequelize mysql2 --save
// npm install express-handlebars
// npm install bcrypt
// npm install node-fetch
// npm i express-session connect-session-sequelize