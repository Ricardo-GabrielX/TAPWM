const express = require('express');
const consign = require('consign');
const path = require('path');

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

consign({ cwd: path.join(__dirname, '..') })
    .include('config/dbConnection.js')
    .then('routes')
    .into(app);

module.exports = app;
