'use strict'

const express = require('express')
const app = express()

// connection to database
const connectDB = require('./db/connection')

// security packages
const cors = require('cors')
const rateLimit = require('express-rate-limit')
const helmet = require('helmet')
const xssClean = require('xss-clean')

const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

const routers = require('./routers')


// middleware
app.set('trust proxy', 1);
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  })
)

app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(xssClean())

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