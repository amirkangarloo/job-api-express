'use strict'

const User = require('../models/User')
const {
    StatusCodes
} = require('http-status-codes')
const {
    BadRequestError,
    UnauthenticatedError
} = require('../errors')

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
    try {
        const {
            email,
            password
        }= req.body
    
        if (!email || !password) {
            throw new BadRequestError('Please provide email and password')
        }
    
        const user = await User.findOne({email})

        // check user is valid
        if (!user) {
            throw new UnauthenticatedError('Invalid Credentials')
        }
        
        // check password is valid
        const passwordIsValid = await user.comparePassword(password)
        if (!passwordIsValid) {
            throw new UnauthenticatedError('Invalid Credentials')
        }


        const token = user.createJWT()
        res.status(StatusCodes.OK).send({
            message: 'Login successful',
            userID: user._id,
            name: user.name,
            token
        })

    } catch (error) {
        next(error)
    }
}


module.exports = {
    register,
    login
}