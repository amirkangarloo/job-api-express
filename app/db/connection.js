'use strict'

const mongoose = require('mongoose')

const connectDB = (url, dbName) => {
    return mongoose.connect(`${url}/${dbName}`)
}

module.exports = connectDB