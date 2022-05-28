'use strict'

const express = require('express')
const app = express()

// connection to database
const connectDB = require('./db/connection')


// middleware
app.use(express.json())



module.exports = async (port) => {
    try {
        // connectDB
        const {
            MONGO_URL,
            MONGO_DB_NAME
        } = process.env
        connectDB(MONGO_URL, MONGO_DB_NAME)

        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`);
        })
    } catch (error) {
        console.log(error);
    }
}