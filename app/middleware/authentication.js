'use strict'

const {
    UnauthenticatedError
} = require('../errors')
const jwt = require('jsonwebtoken')

module.exports = async (req, res, next) => {
    try {
        // check header
        const authHeader = req.headers.authorization
        if (!authHeader || !authHeader.startsWith('Bearer')) {
            throw new UnauthenticatedError('Authentication invalid')
        }

        // get token
        const [, token] = authHeader.split(' ')
        const payload = jwt.verify(token, process.env.APP_SECRET)

        // attach the user to the job routes
        req.user = {
            userId: payload.userId,
            name: payload.name
        }

        next()
        
    } catch (error) {
        next(error)
    }
}