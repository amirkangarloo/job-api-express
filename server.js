'use strict'

require('dotenv').config()
const startApp = require('./app')
const port = process.env.APP_PORT || 5000

// start application
startApp(port)