'use strict'

const CustomAPIError = require('../errors')
const {StatusCodes} = require('http-status-codes')

const errorHandlerMiddleware = (err, req, res, next) => {
    if (err instanceof CustomAPIError) {
        return res.status(err.statusCode).send({
            massage: err.massage
        })
    }

    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
        message: "Something is wrong in server, Please try later"
    })
}


module.exports = errorHandlerMiddleware