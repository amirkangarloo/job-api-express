'use strict'

const {StatusCodes} = require('http-status-codes')

const notFoundMiddleware = (req, res, next) => {
    res.status(StatusCodes.NOT_FOUND).send({
        message: "Route does not exist"
    })
}

module.exports = notFoundMiddleware