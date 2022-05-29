'use strict'

const User = require('../models/User')
const {
    StatusCodes
} = require('http-status-codes')

const register = async (req, res, next) => {
    try {
        const newUser = await User.create({
            ...req.body
        })
        const token = newUser.createJWT()

        res.status(StatusCodes.CREATED).send({
            message: 'Create user successful',
            userID: newUser._id,
            name: newUser.name,
            token
        })

    } catch (error) {
        next(error)
    }
}

const login = async (req, res, next) => {
    res.send('login user')
}


module.exports = {
    register,
    login
}