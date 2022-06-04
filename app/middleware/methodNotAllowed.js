'use strict'

const {StatusCodes} = require('http-status-codes')

const methodNotAllowedMiddleware = (req, res, next) => {
    res.status(StatusCodes.METHOD_NOT_ALLOWED).send({
        message: "Method Not Allowed"
    })
}

module.exports = methodNotAllowedMiddleware