'use strict'

const {
    CustomAPIError
} = require('../errors')
const {
    StatusCodes
} = require('http-status-codes')

const errorHandlerMiddleware = (err, req, res, next) => {
    if (err instanceof CustomAPIError) {
        return res.status(err.statusCode).send({
            message: err.message
        })
    }
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
        err
    })
}

module.exports = errorHandlerMiddleware