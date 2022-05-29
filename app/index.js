'use strict'

const express = require('express')
const app = express()

// connection to database
const connectDB = require('./db/connection')

const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

const routers = require('./routers')


// middleware
app.use(express.json())

// routers
routers(app)

// not-found
app.use(notFoundMiddleware)

// error handler
app.use(errorHandlerMiddleware)


module.exports = async (port) => {
    try {
        // connectDB
        const {
            MONGO_URL,
            MONGO_DB_NAME
        } = process.env
        await connectDB(MONGO_URL, MONGO_DB_NAME)

        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`);
        })
    } catch (error) {
        console.log(error);
    }
}