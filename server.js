// Dependencies
// =============================================================
const express = require('express');

//const exphbs = require('express-handlebars');
// Requires the 'express-session' module
//const session = require(`express-session`);
const sequelize = require('./config/connection');

// Sets up the Express App
// =============================================================
//const hbs = exphbs.create({});

// Sets Handlebars as the default template engine
// app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
// app.set('view engine', 'handlebars');

//app.use(express.json());
//app.use(express.urlencoded({ extended: true }));

// Sets up the sessions with the 'secret', 'resave', 'saveUninitialized' options
// app.use(
//   session({
//     secret: 'This is a major secret!',
//     resave: false,
//     saveUninitialized: false
//   })
// );

// app.use(require('./routes/api/'));


// Starts the server to begin listening
// =============================================================
// app.listen(PORT, () => {
//   console.log('App listening on PORT ' + PORT);
// });

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});



// npm install --save  
// npm dotenv --save
// npm install express sequelize mysql2 --save
// npm install bcrypt --save