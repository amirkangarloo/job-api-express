'use strict'

const BadRequestError = require('./bad-request')
const CustomAPIError = require('./custom-api')
const NotFoundError = require('./not-found')
const UnauthenticatedError = require('./unauthenticated')


module.exports = {
    BadRequestError,
    CustomAPIError,
    NotFoundError,
    UnauthenticatedError
}