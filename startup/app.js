const express = require('express')
require('express-async-errors')
const app = express();

require('./routes')(app) // load routes
require('./db')() // connect to a DB

module.exports = app
