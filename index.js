//---------------BASIC SETUP----------------
const express = require('express');
const path = require('path');
const home = require('./routes/home');
const edit = require('./routes/edit');
const notFound = require('./routes/notFound');
const session = require('express-session');
const bodyParser = require('body-parser');
const todos = require('./routes/api/todos');
require('./models/db');

// Init express
const app = express();

// Port
const PORT = 4000;

// Listen on a port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Setting up global itemList array
global.itemList = [];

// Setting up global counter of id
global.counter = 0;

// Setting up the PUG engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

//---------------MIDDLEWARE----------------

app.use(bodyParser());

app.use(
  session({
    secret: '343ji43j4n3jn4jk3n'
  })
);

//---------------ROUTES----------------

// Homepage
app.use(home);

// Edit page
app.use(edit);

// 404 page
app.use(notFound);

//-----------API endpoints-----------
app.use(todos);
