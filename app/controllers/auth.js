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

        res.status(StatusCodes.CREATED).send({
            message: 'Create user successful',
            userID: newUser._id,
            email: newUser.email
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