'use strict'

const register = async (req, res, next) => {
    res.send('register user')
}

const login = async (req, res, next) => {
    res.send('login user')
}


module.exports = {
    register,
    login
}